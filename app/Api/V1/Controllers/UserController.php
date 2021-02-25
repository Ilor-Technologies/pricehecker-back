<?php

namespace App\Api\Controllers;

use App\Address;
use App\Api\PermissionEnums;
use App\Api\Requests\ChangePasswordRequest;
use App\Api\Requests\LockUserRequest;
use App\Events\AccountDeletionRequest;
use App\Events\AdminUpdateUserDetail;
use App\Events\AdminUpdateUserPassword;
use App\Events\LockUserAccount;
use App\Grade;
use App\Http\Controllers\Controller;
use App\Institution;
use App\InternalUser;
use App\IsLocked;
use App\JwtToken;
//use App\Notification;
use App\Notification;
use App\Permission;
use App\Role;
use App\State;
use App\User;
use App\Vendor;
use Dingo\Api\Exception\DeleteResourceFailedException;
use Dingo\Api\Exception\UpdateResourceFailedException;
use Dingo\Api\Http\Request;
use Dingo\Api\Http\Response;
use Illuminate\Support\Facades\Validator;
use Symfony\Component\HttpKernel\Exception\AccessDeniedHttpException;
use Symfony\Component\HttpKernel\Exception\BadRequestHttpException;
use Symfony\Component\HttpKernel\Exception\NotFoundHttpException;
use Tymon\JWTAuth\Exceptions\JWTException;
use Tymon\JWTAuth\JWTAuth;

class UserController extends Controller
{

    /* private $model;


    public function __construct(User $user)
    {
        $this->model = $user;
    } */

    /**
     * index method to get return all users
     *
     * @return json $users
     */
    public function index()
    {
//        if()
//        return User::latest()->paginate();
    }

    /**
     * get all users
     *
     * @return array
     *
     * @SWG\Get(
     *   path="/users/all",
     *   tags={"Users"},
     *   summary="Get all user, no pagination",
     *   description="",
     *   produces={"application/json"},
     *   security={
     *         {
     *             "Bearer": {}
     *         }
     *     },
     *   @SWG\Response(
     *     response=200, description="successful operation",
     *     @SWG\Property(type="array", @SWG\Items(@SWG\Schema(ref="#/definitions/User"))
     *   )
     * )
     * )
     *
     */
    public function getAllNoPaginate()
    {
        return User::query()->get();
    }

    /**
     * @return \Illuminate\Contracts\Pagination\LengthAwarePaginator $users (locked users)
     */
    public function getLockedUsers()
    {
        return User::query()->where('is_locked', '1')->latest()->paginate();
    }

    /**
     * @param Request $request
     * @return \Illuminate\Contracts\Pagination\LengthAwarePaginator|\Illuminate\Database\Eloquent\Builder
     *
     * @SWG\Get(
     *   path="/users/vendors",
     *   tags={"Vendors"},
     *   summary="Get paginated vendors",
     *   description="",
     *   produces={"application/json"},
     *   security={
     *         {
     *             "Bearer": {}
     *         }
     *     },
     *   @SWG\Response(
     *     response=200, description="successful operation",
     *     @SWG\Schema(
     *      type="object",
     *     @SWG\Property(
     *          property="data", type="array", description="Data",
     *          @SWG\Items(
     *              @SWG\Schema(ref="#/definitions/Vendor")
     *          )
     *     ),
     *     @SWG\Property(property="from", type="string", description="From"),
     *     @SWG\Property(property="to", type="string", description="To"),
     *     @SWG\Property(property="current_page", type="string", description="Current page number"),
     *     @SWG\Property(property="last_page", type="string", description="Last page"),
     *     @SWG\Property(property="total", type="string", description="Total number of result"),
     *     @SWG\Property(property="next_page_url", type="string", description="Next page url"),
     *     @SWG\Property(property="prev_page_url", type="string", description="Previous page url"),
     *     @SWG\Property(property="path", type="string", description="Request path")
     *      )
     *   )
     * )
     * )
     */
    public function getVendors(Request $request)
    {

        $users = Vendor::query();
        $search = $request->input('search');
        if ($search) {
            $uIds = User::query()->where('email', 'like', '%' . $search . '%')
                ->orWhere('first_name', 'like', '%' . $search . '%')
                ->orWhere('last_name', 'like', '%' . $search . '%')->pluck('id');

            $users = $users->where('business_name', 'like', '%' . $search . '%')
                ->orWhere('rc_number', 'like', '%' . $search . '%')
                ->orWhere('tax_identification_number', 'like', '%' . $search . '%')
                ->orWhere('business_description', 'like', '%' . $search . '%')
                ->whereIn('user_id', $uIds);
        }

        $users = $users->with('user', 'address.state', 'address.city')->latest()->withDates()->paginate();
        $users->appends($request->all());

        return $users;
    }

    /**
     * @param Request $request
     * @return \Illuminate\Contracts\Pagination\LengthAwarePaginator|\Illuminate\Database\Eloquent\Builder
     *
     * @SWG\Get(
     *   path="/users/vendors/single",
     *   tags={"Vendors"},
     *   summary="Get all vendors",
     *   description="",
     *   produces={"application/json"},
     *   security={
     *         {
     *             "Bearer": {}
     *         }
     *     },
     *   @SWG\Response(
     *     response=200, description="successful operation",
     *     @SWG\Property(
     *          property="data", type="array", description="Data",
     *          @SWG\Items(
     *              @SWG\Schema(ref="#/definitions/Vendor")
     *          )
     *     ),
     *   )
     * )
     * )
     */
    public function getVendorsAll(Request $request)
    {

        $users = Vendor::query();
        $search = $request->input('search');
        if ($search) {
            $uIds = User::query()->where('email', 'like', '%' . $search . '%')
                ->orWhere('first_name', 'like', '%' . $search . '%')
                ->orWhere('last_name', 'like', '%' . $search . '%')->pluck('id')->toArray();

            $users = $users->where('business_name', 'like', '%' . $search . '%')
                ->orWhere('rc_number', 'like', '%' . $search . '%')
                ->orWhere('tax_identification_number', 'like', '%' . $search . '%')
                ->orWhere('business_description', 'like', '%' . $search . '%')
                ->whereIn('user_id', $uIds);

        }
        $users = $users->orderBy('business_name')->withDates()->get();

        return $users;
    }

    /**
     * @param Request $request
     * @return \Illuminate\Contracts\Pagination\LengthAwarePaginator|\Illuminate\Database\Eloquent\Builder
     *
     * @SWG\Get(
     *   path="/users/vendors/bpp",
     *   tags={"Vendors"},
     *   summary="Get paginated vendors registered with BPP",
     *   description="",
     *   produces={"application/json"},
     *   security={
     *         {
     *             "Bearer": {}
     *         }
     *     },
     *   @SWG\Response(
     *     response=200, description="successful operation",
     *     @SWG\Schema(
     *      type="object",
     *     @SWG\Property(
     *          property="data", type="array", description="Data",
     *          @SWG\Items(
     *              @SWG\Schema(ref="#/definitions/Vendor")
     *          )
     *     ),
     *     @SWG\Property(property="from", type="string", description="From"),
     *     @SWG\Property(property="to", type="string", description="To"),
     *     @SWG\Property(property="current_page", type="string", description="Current page number"),
     *     @SWG\Property(property="last_page", type="string", description="Last page"),
     *     @SWG\Property(property="total", type="string", description="Total number of result"),
     *     @SWG\Property(property="next_page_url", type="string", description="Next page url"),
     *     @SWG\Property(property="prev_page_url", type="string", description="Previous page url"),
     *     @SWG\Property(property="path", type="string", description="Request path")
     *      )
     *   )
     * )
     * )
     */
    public function getBPPVendors()
    {
        return Vendor::query()->where('bpp_id', '!=', '')->latest()->paginate();
    }

    /**
     * @param JWTAuth $auth
     * @param Request $request
     * @return \Illuminate\Contracts\Pagination\LengthAwarePaginator|\Illuminate\Database\Eloquent\Builder
     *
     * @throws JWTException
     * @SWG\Get(
     *   path="/users/internal-users",
     *   tags={"Vendors"},
     *   summary="Get paginated internal users",
     *   description="",
     *   produces={"application/json"},
     *   security={
     *         {
     *             "Bearer": {}
     *         }
     *     },
     *   @SWG\Response(
     *     response=200, description="successful operation",
     *     @SWG\Schema(
     *      type="object",
     *     @SWG\Property(
     *          property="data", type="array", description="Data",
     *          @SWG\Items(
     *              @SWG\Schema(ref="#/definitions/InternalUser")
     *          )
     *     ),
     *     @SWG\Property(property="from", type="string", description="From"),
     *     @SWG\Property(property="to", type="string", description="To"),
     *     @SWG\Property(property="current_page", type="string", description="Current page number"),
     *     @SWG\Property(property="last_page", type="string", description="Last page"),
     *     @SWG\Property(property="total", type="string", description="Total number of result"),
     *     @SWG\Property(property="next_page_url", type="string", description="Next page url"),
     *     @SWG\Property(property="prev_page_url", type="string", description="Previous page url"),
     *     @SWG\Property(property="path", type="string", description="Request path")
     *      )
     *   )
     * )
     * )
     */
    public function getInternalUsers(JWTAuth $auth, Request $request)
    {
        $admin = $this->authUser();

        $det = $this->_getAdminDetails($admin);
        if (!$det) {
            return $this->forbidden("Access denied for logged in user. Please login as an admin.");
        }

        $search = $request->input('search');
        $users = InternalUser::query()->with('institution', 'user.picture');
        if ($search) {
            $uIdss = User::query()->where('username', 'like', '%' . $search . '%')
                ->orWhere('first_name', 'like', '%' . $search . '%')
                ->orWhere('last_name', 'like', '%' . $search . '%')
                ->orWhere('middle_name', 'like', '%' . $search . '%')
                ->orWhere('email', 'like', '%' . $search . '%')
                ->orWhere('phone', 'like', '%' . $search . '%')->pluck('id')->toArray();

            $users = $users->whereIn('user_id', $uIdss)
                ->orWhere('job_title', 'like', '%' . $search . '%');
        }

        $users = $users->withDates();

        if (!$admin->isSuperAdmin()) {
            $users = $users->where('institution_id', $admin->institution);
        }

        if ($request->has('no-paginate')) {
            $users = $users->get();
        } else {
            $users = $users->latest()->paginate();
            $users->appends($request->all());
        }
        return $users;
    }

    /**
     * Get user by username.
     *
     * @param  string $username
     * @return  \Dingo\Api\Http\Response
     *
     *
     *
     * @SWG\Get(
     *   path="/user-exists/username/{username}",
     *   tags={"Users"},
     *   summary="Get a user by username",
     *   description="",
     *   operationId="show",
     *   produces={"application/json"},
     *   security={
     *         {
     *             "Bearer": {}
     *         }
     *     },
     *   @SWG\Parameter(
     *     name="username",
     *     in="path",
     *     description="The username of user to be fetched.",
     *     required=true,
     *     type="string"
     *   ),
     *   @SWG\Response(response=200, description="successful operation"),
     *   @SWG\Response(response=400, description="Invalid id supplied"),
     *   @SWG\Response(response=404, description="User not found")
     * )
     */
    public function getUserByUsername($username)
    {
        if (User::query()->where('username', $username)->first()) {
            return $this->withJson(['status' => 'user exists']);
        }
        return $this->notFound("User not fond");
    }

    public function getUserProfileData($username) {
        $user = User::query()->where('username', $username)->first();
        if ($user) {
            if($user->is_vendor) {
                $user->load('vendor.address');
            } else {
                $user->load('internalUser.parastatal', 'internalUser.institution', 'internalUser.grade');
            }
            return $user;
        }

        return $this->notFound('Sorry, the user\'s record is not found.');
    }

    /**
     * Get user by email.
     *
     * @param  string $email
     * @return  \Dingo\Api\Http\Response
     *
     *
     *
     * @SWG\Get(
     *   path="/user-exists/email/{email}",
     *   tags={"Users"},
     *   summary="Get a user by email",
     *   description="",
     *   operationId="show",
     *   produces={"application/json"},
     *   security={
     *         {
     *             "Bearer": {}
     *         }
     *     },
     *   @SWG\Parameter(
     *     name="username",
     *     in="path",
     *     description="The email of user to be fetched.",
     *     required=true,
     *     type="string"
     *   ),
     *   @SWG\Response(response=200, description="successful operation"),
     *   @SWG\Response(response=400, description="Invalid id supplied"),
     *   @SWG\Response(response=404, description="User not found")
     * )
     */
    public function getUserByEmail($email)
    {
        if (User::query()->where('email', $email)->first()) {
            return $this->withJson(['status' => 'user exists']);
        }
        return $this->notFound("User not fond");
    }

    public function getAllUserDetail($id) {
        $user = User::with('internalUser.institution', 'vendor.address', 'picture')->find($id);
        if($user) {
            return $user;
        }

        return $this->withMessage('User record not found', 404);
    }

    public function getAuthUserDetail() {
        $user = User::with('internalUser.institution', 'vendor.address', 'picture')->find(auth()->id());
        if($user) {
            return $user;
        }

        return $this->withMessage('User record not found', 404);
    }

    /**
     * @param $id
     * @param null $user
     * @return \Illuminate\Http\JsonResponse
     */
    public function getInternalUserDetailForAdmin($id)
    {
        $authUser = $this->authUser();
        $admin = self::getAdminDetails($authUser);
        if (!$admin) {
            return $this->forbidden("Not enough permission.");
        }

        $user = User::with('internalUser.institution', 'internalUser.parastatal', 'internalUser.grade')->find($id);

        if (!$user) {
            return $this->withMessage('User details not found.', 404);
        }

        $type = $user->internalUser;
        if (!$type) {
            return $this->withMessage('User record not found.', 404);
        }

        if (!$authUser->isSuperAdmin() && $type->institution_id != $admin->institution_id) {
            return $this->withMessage("You do not access enough permission to access this user's information", 403);
        }

        return $this->withJson([
            'user' => $user,
            'roles' => Role::forAuthUser(),
            'institutions' => Institution::with('parastatals')->get(),
            'grades' => Grade::query()->get(),
        ]);
    }

    public function getVendorDetailForAdmin($id)
    {

        $user = User::with('vendor', 'vendor.address.state', 'vendor.address.city')->find($id);

        if (!$user) {
            return $this->withMessage('Vendor details not found.', 404);
        }

        return $this->withJson([
            'user' => $user,
            'states' => State::with('cities')->get(),
        ]);
    }

    /**
     * delete user
     *
     * @param JWTAuth $JWTAuth
     * @param $id
     * @return Response response
     * @throws \Exception
     */
    public function destroy(JWTAuth $JWTAuth, $id)
    {

        $user = User::query()->find($id);
        if (!$user) {
            return $this->notFound("User record not found!");
        }

        $authUser = $this->authUser();

        if ($authUser->id == $id) {
            //tell current user they can't delete themselves
            return $this->withMessage('You cannot delete yourself', 400);
        }

        $isVendor = $user->is_vendor;
        if ($isVendor) {
            $vendorRecord = $user->vendor;
            $vendorRecord->address()->delete();
            $vendorRecord->goods()->delete();
            $deleted = $vendorRecord->delete();
        } else {
//            $internalUser = $user->internalUser()->count();
            $deleted = $user->internalUser()->delete();
//            error_log('internal user: ' . ($internalUser));
//            return $this->withMessage('Testing', 400);
        }

        if ($deleted) {
            $user->delete();
            return $this->withJson(['status' => 'User deleted'], 201);
        }
        //user not deleted
        return $this->withMessage('Delete request failed', 500);
    }

    public function changePassword(ChangePasswordRequest $request)
    {
        $user = $this->authUser();
        if (!$user) {
            return $this->withMessage("User account not accessible.", 404);
        }

        if (!password_verify($request->old_password, $user->password)) {
            return $this->forbidden("Current password is not valid.");
        }

        if ($user->update(['password' => $request->password])) {
            return $this->withJson(["message" => "Password updated successfully."]);
        }

        throw new UpdateResourceFailedException("Unable to update user's password at the moment, try again");
    }

    /**
     * @param JWTAuth $JWT_auth
     * @param Request $request
     * @param $id
     * @return Response|\Illuminate\Http\JsonResponse
     */
    public function adminChangePassword(Request $request, $id)
    {
        $admin = $this->authUser();
        if (!$admin) {
            return $this->withMessage("Access denied.", 403);
        }

        $validator = Validator::make($request->all(), [
            'password' => 'required|min:8|confirmed',
        ]);

        if ($validator->fails()) {
            return $this->validationError($validator->errors());
        }
        $user = User::query()->where('id', $id)->first();
        if (!$user) {
            return $this->notFound('User not found');
        }
        if ($user->update(['password' => $request->password])) {
            event(new AdminUpdateUserPassword($admin, $user));

            return $this->withJson(["message" => "User's password updated"]);
        }

        throw new UpdateResourceFailedException("Unable to update user's password at the moment.");
    }

    /**
     * @param JWTAuth $JWTAuth
     * @return bool|\Illuminate\Database\Eloquent\Model|null|InternalUser|Vendor
     */
    public function showAuthenticatedUser($auth = null)
    {
        $user = $this->authUser();
        if (!$user) {
            return $this->withMessage('User record not found.', 404);
        }

        if (!$user->is_vendor) {
            $user->load('internalUser.parastatal', 'picture');
        } else {
            $user->load('vendor');
        }
        return $user;
    }

    /**
     * lock an internal user with a passed user id
     *
     * @param LockUserRequest $request
     *
     * @return json response
     * @throws \Exception
     */
    public function lockUserById(LockUserRequest $request, $id)
    {
        if (!($user = InternalUser::query()->where('user_id', $id)->first()) && !($user = Vendor::query()->where('user_id', $id)->first())) {
            throw new NotFoundHttpException('The user\'s details is not found.');
        }

        //note that users (admin) must have been authenticated before this call
        $admin = self::getAdminDetails($this->authUser());
        if (!$admin) return $this->forbidden("Your identity cannot be verified at the moment, please try again.");

        if ($user->user_id == $admin->user_id) {
            throw new BadRequestHttpException('You cannot lock yourself.');
        }

        if (!$user instanceof Vendor && ($user->userObject())->isSuperAdmin() && !$admin->userObject()->isSuperAdmin()) {
            return $this->withMessage("You do not have enough permission to lock this user", 403);
        }

        if ($user->is_locked == 1) {
            IsLocked::query()->where('user_id', $user->user_id)->delete();
            $user->is_locked = 0;
        } else {
            IsLocked::query()->create(['user_id' => $user->id, 'reason' => $request->reason]);
            $user->is_locked = 1;
        }

        if ($user->save()) {
            event(new LockUserAccount($admin, $user));
            return $this->withJson(['is_locked' => $user->is_locked]);
        }
        throw new UpdateResourceFailedException('User account lock failed');
    }

    /**
     * check if a user is locked by id
     *
     * @param $user_id
     *
     * @return json
     * @internal param IsLockedRequest $request
     *
     */
    public function isLocked($user_id)
    {
        if ($user = InternalUser::query()->where('user_id', $user_id)) {
            return $this->withJson(["status" => $user->is_locked ? true : false]);
        }

        return $this->notFound('User not found');
    }


    /**
     * protected function to handle syncing permissions
     * @param Request $request
     * @param $user
     * @return
     */
    protected function syncPermissions(Request $request, $user)
    {
        // Get the submitted roles
        $roles = $request->get('roles', []);
        $permissions = $request->get('permissions', []);

        // Get the roles
        $roles = Role::find($roles);

        // check for current role changes
        if (!$user->hasAllRoles($roles)) {
            // reset all direct permissions for user
            $user->permissions()->sync([]);
        } else {
            // handle permissions
            $user->syncPermissions($permissions);
        }

        $user->syncRoles($roles);

        return $user;
    }

    /**
     * quick function to get user by id
     *
     * @param string $id
     *
     * @return User
     */
    protected function getUserById($id)
    {
        return User::query()->find($id);
    }

    private function _getAdminDetails($admin)
    {
        return self::getAdminDetails($admin);
    }

    public static function getAdminDetails($admin)
    {
        if (!($admin instanceof User) || $admin->is_vendor) return false;
        return $admin->internalUser;
    }

    /**
     * user cancel/delete account request
     *
     * @param \Dingo\Api\Http\Request $request
     * @param \Tymon\JWTAuth\JWTAuth $JWTAuth
     *
     * @return response
     */
    public function cancelAccount(Request $request, JWTAuth $JWTAuth)
    {
        if (!$user = $this->authUser()) {
            throw new BadRequestHttpException('User account not found');
        }
        //try to authenticate the user with provided password
        $credentials = $request->only(['password']);
        $credentials['id'] = $user->id;
        try {
            $token = $JWTAuth->attempt($credentials);

            if (!$token) {
                throw new AccessDeniedHttpException('Cancel request failed, invalid password.');
            }
        } catch (JWTException $e) {
            return $this->withMessage($e->getMessage(), 400);
        }

        $user->delete_request = 1;
        if ($user->save()) {
            //fire event
            event(new AccountDeletionRequest($user));
            //notify admin            
            $notification = new Notification([
                'title' => 'User account deletion request',
                'body' => 'User with ID ' . $user->id . ' has requested that their account be deleted.'
            ]);
            $notification->is_public = -1;
            $notification->save();

            //blacklist the user's token 
            JwtToken::blackListToken($user);
            return response()->json(['message' => 'Your account was cancelled successfully'], 201);
        }
        //user not cancelled
        throw new DeleteResourceFailedException('Cancel request failed');
    }

    /**
     * @param $id
     * @param null $user
     */
    public function getUserDetailForAdmin($id, $user = null)
    {

        $authUser = self::authUser();
        $admin = self::getAdminDetails($authUser);
        if (!$admin) {
            return $this->forbidden("Not enough permission.");
        }

        if ($user == null) {
            $user = User::query()->find($id);
        }

        if (!$user) {
            return $this->notFound('User details not found.');
        }

        if ($user->is_vendor) {
            $type = Vendor::query()->where('user_id', $user->id)->first();
        } else {
            $type = self::getAdminDetails($user);
            if ($type && !$admin->user->isSuperAdmin() && $type->institution_id != $admin->institution_id)
                return $this->forbidden("You do not access enough permission to access this user's information");
        }

        if ($type) {
            $detail = $type->toArray();
        } else {
            $detail = [];
        }

        return $this->withJson($detail);
    }

    public function updateAllUserData(Request $request, $id = null) {
        if ($id === null) {
            $user = $this->authUser();
        } else {
            $user = User::query()->find($id);
        }
        $authUser = $this->authUser();

        if ($authUser->id !== $user->id) {
            $permission = 'update_internal_users';
            if($user->is_vendor) {
                $permission = 'update_vendors';
            }

            if( !$authUser->can($permission)) {
                return $this->withMessage('You do not have the required privilege to edit users information', 403);
            }
        }

        if ($user->is_vendor) {
            return $this->updateVendor($request, $user);
        } else {
            return $this->updateInternalUser($request, $user);
        }
    }

    private function updateVendor(Request $request, $user) {
        $admin = $this->authUser();
        $details = $user->vendor;

        if (!$user || !$details) {
            return $this->notFound('The vendor\'s details are missing.');
        }
        $validator = Validator::make($request->all(), [
            'business_name' => 'required',
            'rc_number' => 'required',
            'tax_identification_number' => 'required',
            'business_description' => 'required',
            'state_id' => 'required',
            'city_id' => 'required',
            'address_line_1' => 'required',
        ], [
            'rc_number.required' => 'CAC Number is required',
            'state_id.required' => 'State is required',
            'city_id.required' => 'City is required',
            'address_line_1.required' => 'Address is required'
        ]);

        if ($validator->fails()) {
            return $this->validationError($validator->errors());
        }

        if ($user->email != $request->email) {
            if (User::query()->where('email', $request->email)->where('id', '!=', $user->id)->first()) {
                return $this->withMessage('The email supplied has been taken.', 400);
            }
        }

        if ($user->phone != $request->phone) {
            if (User::query()->where('phone', $request->phone)->where('id', '!=', $user->id)->first()) {
                return $this->withMessage('The phone number supplied has been taken.', 400);
            }
        }

        if ($details->rc_number != $request->rc_number) {
            if (Vendor::query()->where('rc_number', $request->rc_number)->where('id', '!=', $details->id)->first()) {
                return $this->withMessage('The RC Number supplied has been taken.', 400);
            }
        }

        if ($details->tax_identification_number != $request->tax_identification_number) {
            if (Vendor::query()->where('tax_identification_number', $request->tax_identification_number)->where('id', '!=', $details->id)->first()) {
                return $this->withMessage('The TIN supplied has been taken.', 400);
            }
        }

        $user_updated = $user->update($request->only(['email', 'first_name', 'last_name', 'middle_name', 'phone']));

        $data = $request->only('business_name', 'rc_number', 'tax_identification_number', 'business_description', 'website');

        $address_data = array_filter($request->only('state_id', 'city_id', 'address_line_1', 'address_line_2', 'pobox_number'), 'strlen');
        if (!$request->has('address_line_2')) {
            $address_data['address_line_2'] = "";
        }

        if (!$request->has('pobox_number')) {
            $address_data['pobox_number'] = "";
        }

        $address_updated = Address::query()->updateOrCreate(['id' => $details->address_id], $address_data);
        $data['address_id'] = $address_updated->id;

        $data['email'] = $request->email1 ? $request->email1 : $request->email;
        $vendor_updated = $details->update($data);

        if ($user_updated && $vendor_updated && $address_updated) {
            event(new AdminUpdateUserDetail($admin, $user));

            //return $this->withArray(['Status' => 'Update successful', 'status_code' => 202]);
            return response()->json(['status' => 'Update successful'], 202);
        }

        return $this->withMessage('Unable to update all data', 500);
    }

    private function updateInternalUser(Request $request, $user) {
        $admin = $this->authUser();

        $adminDetails = $admin->internalUser;
        if (!$adminDetails) {
            return $this->notFound('Please check your authentication.');
        }

        $details = $user->internalUser;

        if (!$details) {
            return $this->notFound('User\'s details are missing.');
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
                return $this->withMessage('The email supplied has been taken.', 400);
            }
        }

        if ($user->phone != $request->phone) {
            if (User::query()->where('phone', $request->phone)->where('id', '!=', $user->id)->first()) {
                return $this->withMessage('The phone number supplied has been taken.', 400);
            }
        }

        $user_updated = $user->update($request->only(['email', 'first_name', 'last_name', 'middle_name', 'phone']));

        $data = $request->only('institution_id', 'parastatal_id', 'employed_date', 'grade_id', 'job_title');

        $internal_details_updated = $details->update($data);

        if ($user_updated && $internal_details_updated) {
            if ($admin->id !== $user->id) {
                event(new AdminUpdateUserDetail($admin, $user));
            }
            return $this->withJson(['message' => 'Update successful', 'status_code' => 202]);
        }

        return $this->withMessage('Unable to update all data', 500);
    }

}
