<?php

namespace App\Api\Controllers;

use App\Api\Requests\AdminCreateUserRequest;
use App\Api\Requests\AdminEditUserRequest;
use App\Api\Requests\InternalUserEditRequest;
use App\Events\AdminUpdateUserDetail;
use App\Events\SendPasswordResetLinkEmail;
use App\Http\Controllers\Controller;
use Carbon\Carbon;
use Dingo\Api\Exception\StoreResourceFailedException;
use App\AdminCreatedUser;
use App\Parastatal;
use App\InternalUser;
use App\InternalUserStatus;
use App\Institution;
use App\PasswordReset;
use App\Picture;
use App\Role;
use App\State;
use App\User;
use Illuminate\Support\Facades\Validator;
use Tymon\JWTAuth\JWTAuth;

class InternalUserController extends Controller
{

    /**
     * Gets authenticated user's detail for inclusion in JWTAuth token
     *
     * @return \Illuminate\Http\JsonResponse
     * @internal param $id
     *
     */

    public function show()
    {
        $user = $this->authUser();
        if (!$user || !($internalUser = InternalUser::query()->where('user_id', $user->id)->first())) {
            return $this->notFound('Internal user authentication invalid');
        }

        $detail = $internalUser->toArray();

        $states = State::with('cities')->get(['id', 'name']);
        $institutions = Institution::with('parastatals')->get();
        $job_titles = InternalUserStatus::all(['id', 'name', 'description']);

        return $this->withJson([
            'detail' => $detail,
            'states' => $states,
            'institutions' => $institutions,
            'job_titles' => $job_titles
        ]);
    }

    /**
     * @SWG\Get(
     *   path="/users/internal/create",
     *   tags={"Internal Users"},
     *   summary="Admin Create Internal Record Data",
     *   description="",
     *   produces={"application/json"},
     *   security={
     *         {
     *             "Bearer": {}
     *         }
     *     },
     *   @SWG\Response(
     *     response=200, description="successful operation",
     *     @SWG\Schema(type="object",
     *        @SWG\Property(type="string", property="roles"),
     *        @SWG\Property(type="string", property="states"),
     *        @SWG\Property(type="string", property="parastatals"),
     *        @SWG\Property(type="string", property="institutions"),
     *        @SWG\Property(type="string", property="job_titles"),
     *     )
     *   )
     * )
     * )
     *
     */
    public function showAdminCreate()
    {
        //gets all pre-data for signup e.g. parastatals, institutions list etc.
        $states = State::with('cities')->get(['id', 'name']);
        $institutions = Institution::with('parastatals')->get();
        $roles = Role::all(['name']);
        $job_titles = InternalUserStatus::all(['id', 'name', 'description']);

        return $this->withJson([
            'roles' => $roles,
            'states' => $states,
            'institutions' => $institutions,
            'job_titles' => $job_titles
        ]);
    }

    /**
     * @param InternalUserEditRequest $request
     * @param JWTAuth $JWT_auth
     * @return \Dingo\Api\Http\Response
     *
     * @SWG\Put(
     *   path="/internal/account/update",
     *   tags={"Internal Users"},
     *   summary="Internal User Update Account",
     *   description="",
     *   produces={"application/json"},
     *   security={
     *         {
     *             "Bearer": {}
     *         }
     *     },
     *   @SWG\Parameter(
     *     name="body",
     *     in="body",
     *     description="the body of the request.",
     *     required=true,
     *     @SWG\Schema(
     *         type="object",
     *         @SWG\Property(type="string", property="first_name"),
     *         @SWG\Property(type="string", property="last_name"),
     *         @SWG\Property(type="string", property="middle_name"),
     *         @SWG\Property(type="string", property="email"),
     *         @SWG\Property(type="string", property="phone"),
     *         @SWG\Property(type="string", property="institution_id"),
     *         @SWG\Property(type="string", property="employed_date"),
     *         @SWG\Property(type="string", property="grade_id"),
     *         @SWG\Property(type="string", property="job_title"),
     *         @SWG\Property(type="string", property="logo"),
     *     )
     *   ),
     *   @SWG\Response(
     *     response=202, description="successful operation",
     *     @SWG\Property(type="string", property="status")
     *   )
     * )
     * )
     */
    public function update(InternalUserEditRequest $request)
    {
        $user = $this->authUser();

        if (!($internalUser = $user->internalUser)) {
            return $this->withMessage('User record is missing.', 404);
        }

        if ($user->email != $request->email) {
            if (User::query()->where('email', $request->email)->where('id', '!=', $user->id)->first()) {
                return $this->withMessage('The email supplied has been taken, please choose another', 406);
            }
        }

        if ($user->phone != $request->phone) {
            if (User::query()->where('phone', $request->phone)->where('id', '!=', $user->id)->first()) {
                return $this->withMessage('The phone number supplied has been taken.', 406);
            }
        }

        $userUpdated = $user->update($request->only(['email', 'first_name', 'last_name', 'middle_name', 'phone']));

        //$useless = InternalUserStatus::firstOrCreate($request->only('job_title'));

        $data = $request->only('institution_id', 'parastatal_id', 'employed_date', 'grade_id', 'job_title');

        $picture_id = 0;

        if ($user->picture_id != null) {
            $picture_id = $user->picture_id;
        }

        if ($request->hasFile('logo')) {
            $image = $request->file('logo');
            $name = time() . '.' . $image->getClientOriginalExtension();
            $destinationPath = public_path('/logos');
            $image->move($destinationPath, $name);

            $picture = Picture::query()->updateOrCreate(['id' => $picture_id], [
                'seo_filename' => $name,
                'mime_type' => $image->getClientOriginalExtension()
            ]);

            $data['picture_id'] = $picture->id;
        }

        $internalUserUpdated = $internalUser->update($data);

        if ($userUpdated && $internalUserUpdated) {
            return $this->withJson(['message' => "Updated successfully"]);
        }

        return $this->withMessage('Unable to update all data', 500);
    }

    /**
     * @SWG\Put(
     *   path="/users/internal/{id}",
     *   tags={"Internal Users"},
     *   summary="Admin Update Internal User Account",
     *   description="",
     *   produces={"application/json"},
     *   security={
     *         {
     *             "Bearer": {}
     *         }
     *     },
     *   @SWG\Parameter(
     *     name="id",
     *     in="path",
     *     description="Internal user id",
     *     required=true,
     *     type="string"
     *   ),
     *   @SWG\Parameter(
     *     name="body",
     *     in="body",
     *     description="the body of the request.",
     *     required=true,
     *     @SWG\Schema(
     *         type="object",
     *         @SWG\Property(type="string", property="first_name"),
     *         @SWG\Property(type="string", property="last_name"),
     *         @SWG\Property(type="string", property="middle_name"),
     *         @SWG\Property(type="string", property="email"),
     *         @SWG\Property(type="string", property="phone"),
     *         @SWG\Property(type="string", property="institution_id"),
     *         @SWG\Property(type="string", property="employed_date"),
     *         @SWG\Property(type="string", property="grade_id"),
     *         @SWG\Property(type="string", property="job_title"),
     *         @SWG\Property(type="string", property="logo")
     *     )
     *   ),
     *   @SWG\Response(
     *     response=202, description="successful operation",
     *     @SWG\Property(type="string", property="status")
     *   )
     * )
     * )
     * @param AdminEditUserRequest $request
     * @param $id
     * @return \Dingo\Api\Http\Response
     */
    public function adminUpdate(AdminEditUserRequest $request, $id)
    {
        $admin = $this->authUser();

        if (!$admin) {
            return $this->withMessage("Access denied.", 403);
        }

        $adminDetails = UserController::getAdminDetails($admin);
        if (!$adminDetails) {
            return $this->notFound('Please check your authentication.');
        }

        $user = User::query()->find($id);
        $details = InternalUser::query()->where('user_id', $user->id)->first();

        if (!$user || !$details) {
            return $this->notFound('The user\'s details are missing.');
        }

        if (!$admin->isSuperAdmin() && $details->institution_id != $adminDetails->institution_id) {
            return $this->withMessage('Permission not granted for this action. User belongs to a different MDA/State.', 403);
        }

        $validator = Validator::make($request->all(), [
            'institution_id' => 'required',
            'employed_date' => 'numeric|min:1950',
            'grade_id' => 'required',
            'parastatal_id' => 'required',
            'job_title' => 'required|string',
            'role' => 'required',
        ], [
            'employed_date.numeric' => 'Year of employment must be in digits',
            'employed_date.min' => 'Year of employment cannot be earlier than 1950',
            'parastatal_id.required' => 'Parastatal is required',
            'grade_id.required' => 'Grade/Level is required',
            'institution_id.required' => 'A valid institution is required'
        ]);

        if ($validator->fails()) {
            return $this->validationError($validator->errors());
        }

        if ($user->email != $request->email) {
            if (User::query()->where('email', $request->email)
                ->where('id', '!=', $user->id)->first()) {
                return $this->withMessage('The email supplied has been taken.', 406);
            }
        }

        if ($user->phone != $request->phone) {
            if (User::query()->where('phone', $request->phone)->where('id', '!=', $user->id)->first()) {
                return $this->withMessage('The phone number supplied has been taken.', 406);
            }
        }

        $user_updated = $user->update($request->only(['email', 'first_name', 'last_name', 'middle_name', 'phone']));

        $data = $request->only('institution_id', 'parastatal_id', 'employed_date', 'grade_id', 'job_title');

        if ($request->hasFile('logo')) {
//            $image = $request->file('logo');
//            $name = time() . '.' . $image->getClientOriginalExtension();
//            $destinationPath = public_path('/images/logos');
//            $image->move($destinationPath, $name);
//
//            $picture = Picture::create([
//                'seo_filename' => $name,
//                'mime_type' => $image->getClientOriginalExtension()
//            ]);
//
//            $user->update(['picture_id' => $picture->id]);

//            Todo: Implement Picture generic api by sam
        }

        $internal_details_updated = $details->update($data);

        if ($user_updated && $internal_details_updated) {
            $user->syncRoles($request->role);
            event(new AdminUpdateUserDetail($admin, $user));
            return $this->withJson(['message' => 'Update successful', 'status_code' => 202]);
        }

        return $this->withMessage('Unable to update all data', 500);
    }

    /**
     * @SWG\Post(
     *   path="/users/internal",
     *   tags={"Internal Users"},
     *   summary="Admin Create Internal User Record",
     *   description="",
     *   produces={"application/json"},
     *   security={
     *         {
     *             "Bearer": {}
     *         }
     *     },
     *   @SWG\Parameter(
     *     name="body",
     *     in="body",
     *     description="the body of the request.",
     *     required=true,
     *     @SWG\Schema(
     *         type="object",
     *         @SWG\Property(type="string", property="first_name"),
     *         @SWG\Property(type="string", property="last_name"),
     *         @SWG\Property(type="string", property="middle_name"),
     *         @SWG\Property(type="string", property="email"),
     *         @SWG\Property(type="string", property="phone"),
     *         @SWG\Property(type="string", property="institution_id"),
     *         @SWG\Property(type="string", property="employed_date"),
     *         @SWG\Property(type="string", property="grade_id"),
     *         @SWG\Property(type="string", property="job_title"),
     *         @SWG\Property(type="string", property="logo"),
     *         @SWG\Property(type="string", property="username")
     *     )
     *   ),
     *   @SWG\Response(
     *     response=201, description="successful operation",
     *     @SWG\Property(type="string", property="status")
     *   )
     * )
     * )
     * @param AdminCreateUserRequest $request
     * @param JWTAuth $JWTAuth
     * @return \Illuminate\Http\JsonResponse
     * @throws \Exception
     */
    public function adminStore(AdminCreateUserRequest $request)
    {
        //$request->frontend_url = 'http://www.pricechecker.ilortech.com';

        $validator = Validator::make($request->all(), [
            'institution_id' => 'required',
            'grade_id' => 'required',
            'parastatal_id' => 'required',
            'job_title' => 'required|string',
            'employed_date' => 'numeric|min:1950',
            'role' => 'required'
        ], [
            'employed_date.numeric' => 'Year of employment must be in digits',
            'employed_date.min' => 'Year of employment cannot be earlier than 1950',
            'parastatal_id.required' => 'Parastatal is required',
            'grade_id.required' => 'Grade/Level is required',
            'institution_id.required' => 'A valid institution is required'
        ]);

        if ($validator->fails()) {
            return $this->validationError($validator->errors());
        }

        $role_ = Role::findByName($request->role, 'api');

        $data = $request->only(['username', 'email', 'first_name', 'last_name', 'middle_name', 'phone']);

        $data['password'] = $request->username . Carbon::now(1);
        $data['is_active'] = 1;
        $data['is_vendor'] = 0;

        $auth_user = $this->authUser();
        $data['created_by'] = $auth_user->id;

        $user = new User($data);

        //save $user;
        if (!$user->save()) {
            throw new StoreResourceFailedException('Unable to register new record.');
        }

        AdminCreatedUser::query()->create(['user_id' => $user->id]);
        //assign the user role
        $user->assignRole($role_);

        $data = $request->only('institution_id', 'parastatal_id', 'employed_date', 'grade_id', 'job_title');
        $data['user_id'] = $user->id;

        $details = new InternalUser($data);

        if (!$details->save()) {
            $user->forceDelete();
            return $this->withMessage('Unable to complete registration', 500);
        }
        //valid user
        $reset_token = $user->username . strtotime(Carbon::now(1));
        $reset_token = md5($reset_token);
        $reset_link = $request->frontend_url . '/' . $reset_token;

        PasswordReset::query()->create([
            'email' => $user->email,
            'token' => $reset_token
        ]);
        //mail the reset link to user
        //$mail->to($user->email)->queue(new ForgotPasswordMail($reset_token));
        $user->reset_token = $reset_token;

        event(new SendPasswordResetLinkEmail($user, $reset_link));

        return $this->withJson(['message' => 'Record registered successfully.'], 201);
    }
}
