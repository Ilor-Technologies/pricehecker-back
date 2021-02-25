<?php

namespace App\Api\Controllers;

use App\Api\Requests\AdminEditUserRequest;
use App\Api\Requests\VendorEditRequest;
use App\Http\Controllers\Controller;
use Carbon\Carbon;
use Dingo\Api\Exception\StoreResourceFailedException;
use Dingo\Api\Exception\UpdateResourceFailedException;
use App\Address;
use App\AdminCreatedUser;
use App\PasswordReset;
use App\Picture;
use App\Role;
use App\State;
use App\User;
use App\Vendor;
use App\Events\AdminUpdateUserDetail;
use App\Events\SendPasswordResetLinkEmail;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use Tymon\JWTAuth\JWTAuth;

class VendorController extends Controller
{
    public function show()
    {
        $user = $this->authUser();
        if (!$user || !($vendor = Vendor::query()->where('user_id', $user->id)->first())) {
            return $this->withMessage('Vendor authentication invalid', 404);
        }

        $detail = $vendor->toArray();

        $address = Address::query()->where('id', $vendor->address_id)->first();
        if ($address) {
            $detail['address_info'] = $address->toArray();
            $detail['address_info']['state'] = State::query()->where('id', $address->state_id)->pluck('name')->first();
        }

        $logo = Picture::query()->where('id', $vendor->picture_id)->first();
        if ($logo) {
            $detail['logo'] = $logo->toArray();
        }

        $states = State::with('cities')->all();

        return $this->withJson(['detail' => $detail, 'states' => $states]);
    }

    /**
     * @SWG\Get(
     *   path="/users/vendors/create",
     *   tags={"Vendors"},
     *   summary="Admin Create Vendor Record Data",
     *   description="",
     *   produces={"application/json"},
     *   security={
     *         {
     *             "Bearer": {}
     *         }
     *     },
     *   @SWG\Response(
     *     response=200, description="successful operation",
     *     @SWG\Property(type="array", @SWG\Items(@SWG\Schema(ref="#/definitions/State"))
     *   )
     * )
     * )
     *
     */
    public function showAdminCreate()
    {
        //gets all pre-data for signup e.g. parastatals, institutions list etc.
        $states = State::with('cities')->all();

        return $this->withJson([
            'states' => $states
        ]);
    }

    /**
     * @SWG\Put(
     *   path="/vendor/account",
     *   tags={"Vendors"},
     *   summary="Update Vendor Account",
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
     *         @SWG\Property(type="string", property="business_name"),
     *         @SWG\Property(type="string", property="rc_number"),
     *         @SWG\Property(type="string", property="email"),
     *         @SWG\Property(type="string", property="tax_identification_number"),
     *         @SWG\Property(type="string", property="state_id"),
     *         @SWG\Property(type="string", property="city_id"),
     *         @SWG\Property(type="string", property="address_line_1"),
     *         @SWG\Property(type="string", property="address_line_2"),
     *         @SWG\Property(type="string", property="pobox_number"),
     *         @SWG\Property(type="string", property="email1"),
     *         @SWG\Property(type="string", property="website"),
     *         @SWG\Property(type="string", property="logo"),
     *         @SWG\Property(type="string", property="phone")
     *     )
     *   ),
     *   @SWG\Response(
     *     response=202, description="successful operation",
     *     @SWG\Property(type="string", property="status")
     *   )
     * )
     * )
     * @param VendorEditRequest $request
     * @param JWTAuth $JWT_auth
     * @return \Illuminate\Http\JsonResponse
     */
    public function update(VendorEditRequest $request, JWTAuth $JWT_auth)
    {
        $user = $this->authUser();
        if (!$user || !($vendor = Vendor::query()->where('user_id', $user->id)->first())) {
            return $this->withMessage('Vendor authentication invalid', 404);
        }

        if ($user->email != $request->email) {
            if (User::query()->where('email', $request->email)->where('id', '!=', $user->id)->first()) {
                return $this->withMessage('The email supplied has been taken.', 406);
            }
        }

        if ($user->phone != $request->phone) {
            if (User::query()->where('phone', $request->phone)->where('id', '!=', $user->id)->first()) {
                return $this->withMessage('The phone number supplied has been taken.', 406);
            }
        }

        if ($vendor->rc_number != $request->rc_number) {
            if (Vendor::query()->where('rc_number', $request->rc_number)->where('id', '!=', $vendor->id)->first()) {
                return $this->withMessage('The RC Number supplied has been taken.', 406);
            }
        }

        if ($vendor->tax_identification_number != $request->tax_identification_number) {
            if (Vendor::query()->where('tax_identification_number', $request->tax_identification_number)->where('id', '!=', $vendor->id)->first()) {
                return $this->withMessage('The TIN supplied has been taken.', 406);
            }
        }
        if ($request->email1 && $vendor->email != $request->email1) {
            if (Vendor::query()->where('email', $request->email1)->where('id', '!=', $vendor->id)->first()) {
                return $this->withMessage('The email supplied has been taken.', 406);
            }
        }

        $address_data = array_filter($request->only([
            'state_id',
            'city_id',
            'address_line_1',
            'address_line_2',
            'pobox_number'
        ], 'strlen'));
        if (!$request->has('address_line_2')) {
            $address_data['address_line_2'] = "";
        }

        if (!$request->has('pobox_number')) {
            $address_data['pobox_number'] = "";
        }

        $user_updated = $user->update($request->only(['email', 'first_name', 'last_name', 'middle_name', 'phone']));

        $address_updated = Address::query()->updateOrCreate(['id' => $vendor->address_id], $address_data);

        $address_updated->save();

        $data = $request->only(['business_name', 'rc_number', 'tax_identification_number', 'business_description', 'website']);
        $data['email'] = $request->email1 ? $request->email1 : $request->email;
        if ($address_updated) {
            $data['address_id'] = $address_updated->id;
        }

        /* $picture_id = 0;

        if ($vendor->picture_id != null) {
            $picture_id = $vendor->picture_id;
        }

        if ($request->hasFile('logo')) {
            $image = $request->file('logo');
            $name = time() . '.' . $image->getClientOriginalExtension();
            $destinationPath = public_path('/logos');
            $image->move($destinationPath, $name);

            $picture = Picture::updateOrCreate(['id' => $picture_id], [
                'seo_filename' => $name,
                'mime_type' => $image->getClientOriginalExtension()
            ]);

            $data['picture_id'] = $picture->id;
        } */

        $vendor_updated = $vendor->update($data);

        if ($user_updated && $vendor_updated && $address_updated) {
            //return $this->response->accepted('Update successful', 202);
            return response()->json(['status' => 'Update successful'], 202);
        }

        throw new UpdateResourceFailedException('Unable to update profile');
    }

    /**
     * @SWG\Put(
     *   path="/users/vendors/{id}",
     *   tags={"Vendors"},
     *   summary="Admin Update Vendor Account",
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
     *     description="Vendor id",
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
     *         @SWG\Property(type="string", property="business_name"),
     *         @SWG\Property(type="string", property="rc_number"),
     *         @SWG\Property(type="string", property="email"),
     *         @SWG\Property(type="string", property="tax_identification_number"),
     *         @SWG\Property(type="string", property="state_id"),
     *         @SWG\Property(type="string", property="city_id"),
     *         @SWG\Property(type="string", property="address_line_1"),
     *         @SWG\Property(type="string", property="address_line_2"),
     *         @SWG\Property(type="string", property="pobox_number"),
     *         @SWG\Property(type="string", property="email1"),
     *         @SWG\Property(type="string", property="website"),
     *         @SWG\Property(type="string", property="logo"),
     *         @SWG\Property(type="string", property="phone")
     *     )
     *   ),
     *   @SWG\Response(
     *     response=202, description="successful operation",
     *     @SWG\Property(type="string", property="status")
     *   )
     * )
     * )
     * @param VendorEditRequest $request
     * @param JWTAuth $JWT_auth
     * @return \Illuminate\Http\JsonResponse
     */
    public function adminUpdate(JWTAuth $JWT_auth, AdminEditUserRequest $request, $id)
    {
        $admin = $this->authUser();
        if (!$admin) {
            return $this->withMessage("Access denied.", 403);
        }

        $adminDetails = UserController::getAdminDetails($admin);
        if (!$adminDetails) {
            return $this->notFound('Please check your authentication.');
        }

        $user = User::query()->where('id', $id)->first();
        $details = Vendor::query()->where('user_id', $user->id)->first();

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
            return response()->json([
                'error' => [
                    'errors' => $validator->errors(),
                    'message' => '422 Unprocessable Entity'
                ]
            ], 422);
        }

        if ($user->email != $request->email) {
            if (User::query()->where('email', $request->email)->where('id', '!=', $user->id)->first()) {
                return $this->withMessage('The email supplied has been taken.', 406);
            }
        }

        if ($user->phone != $request->phone) {
            if (User::query()->where('phone', $request->phone)->where('id', '!=', $user->id)->first()) {
                return $this->withMessage('The phone number supplied has been taken.', 406);
            }
        }

        if ($details->rc_number != $request->rc_number) {
            if (Vendor::query()->where('rc_number', $request->rc_number)->where('id', '!=', $details->id)->first()) {
                return $this->withMessage('The RC Number supplied has been taken.', 406);
            }
        }

        if ($details->tax_identification_number != $request->tax_identification_number) {
            if (Vendor::query()->where('tax_identification_number', $request->tax_identification_number)->where('id', '!=', $details->id)->first()) {
                return $this->withMessage('The TIN supplied has been taken.', 406);
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
//            $data['picture_id'] = $picture->id;

//            Todo: Implement Picture generic api by sam
//            $picture = Picture::getPicture($request);
//            $data['picture_id'] = $picture->id;
        }

        $data['email'] = $request->email1 ? $request->email1 : $request->email;
        $vendor_updated = $details->update($data);

        if ($user_updated && $vendor_updated && $address_updated) {
            event(new AdminUpdateUserDetail($admin, $user));

            //return $this->withArray(['Status' => 'Update successful', 'status_code' => 202]);
            return response()->json(['status' => 'Update successful'], 202);
        }

        return $this->withMessage('Unable to update all data', 200);
    }


    /**
     * @SWG\Post(
     *   path="/users/vendor",
     *   tags={"Vendors"},
     *   summary="Admin Create Vendor Record",
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
     *         @SWG\Property(type="string", property="username"),
     *         @SWG\Property(type="string", property="first_name"),
     *         @SWG\Property(type="string", property="last_name"),
     *         @SWG\Property(type="string", property="middle_name"),
     *         @SWG\Property(type="string", property="business_name"),
     *         @SWG\Property(type="string", property="rc_number"),
     *         @SWG\Property(type="string", property="email"),
     *         @SWG\Property(type="string", property="tax_identification_number"),
     *         @SWG\Property(type="string", property="state_id"),
     *         @SWG\Property(type="string", property="city_id"),
     *         @SWG\Property(type="string", property="address_line_1"),
     *         @SWG\Property(type="string", property="address_line_2"),
     *         @SWG\Property(type="string", property="pobox_number"),
     *         @SWG\Property(type="string", property="email1"),
     *         @SWG\Property(type="string", property="website"),
     *         @SWG\Property(type="string", property="logo"),
     *         @SWG\Property(type="string", property="phone")
     *     )
     *   ),
     *   @SWG\Response(
     *     response=201, description="successful operation",
     *     @SWG\Property(type="string", property="status")
     *   )
     * )
     * )
     * @param AdminCreateUser $request
     * @param JWTAuth $JWTAuth
     * @return \Illuminate\Http\JsonResponse
     * @throws \Exception
     */
    public function adminStore(Request $request, JWTAuth $JWTAuth)
    {
        //$request->frontend_url = 'http://www.App.ilortech.com';

        $validator = Validator::make($request->all(), [
            'business_name' => 'required',
            'rc_number' => 'required|unique:vendors',
            'tax_identification_number' => 'required|unique:vendors',
            'business_description' => 'required',
            'state_id' => 'required',
            'city_id' => 'required',
            'address_line_1' => 'required',
            'bpp_id' => 'string|unique:vendors',
            'username' => 'required|unique:users',
            'phone' => 'required|unique:users',
            'email' => 'required|unique:users',
        ], [
            'rc_number.required' => 'CAC Number is required',
            'rc_number.unique' => 'This CAC Number has been taken',
            'state_id.required' => 'State is required',
            'city_id.required' => 'City is required',
            'address.required' => 'Address is required'
        ]);

        if ($validator->fails()) {
            return $this->validationError($validator->errors());
        }

        $data = $request->only(['username', 'email', 'first_name', 'last_name', 'middle_name', 'phone']);

//        if (User::query()->where($request->only(['username', 'email',]))->count()) {
//            return $this->withMessage('User record exists.', 400);
//        }

        $data = $request->only(['username', 'email', 'first_name', 'last_name', 'middle_name', 'phone']);

        $data['password'] = $request->username . Carbon::now(1);

        $data['is_vendor'] = 1;
        $data['is_active'] = 1;

        $user = new User($data);

        try {
            if ($auth_user = $this->authUser()) {
                $user->created_by = $auth_user->id;
            }
        } catch (\Exception $e) {
        }

        //save $user;
        if (!$user->save()) {
            throw new StoreResourceFailedException(500);
        }

        AdminCreatedUser::query()->create(['user_id' => $user->id]);
        //assign the user role
        $user->assignRole(Role::findByName(Role::VENDOR, 'api'));

        $data = $request->only(['state_id', 'city_id', 'address_line_1', 'address_line_2', 'pobox_number']);
        $address = new Address($data);

        if (!$address->save()) {
            $user->delete();
            throw new StoreResourceFailedException(500);
        }

        $data = $request->only('bpp_id', 'business_name', 'rc_number', 'tax_identification_number', 'business_description', 'website');

        $data['user_id'] = $user->id;
        $data['address_id'] = $address->id;
        $data['email'] = $request->email1 ? $request->email1 : $request->email;

        $details = new Vendor($data);

        if (!$details->save()) {
            $user->forceDelete();
            $address->forceDelete();
            return $this->withMessage('Unable to create record, try again', 500);
        }
//        valid user
        $reset_token = $user->username . strtotime(Carbon::now(1));
        $reset_token = md5($reset_token);
        $reset_link = $request->frontend_url . '/' . $reset_token;

        PasswordReset::query()->create([
            'email' => $user->email,
            'token' => $reset_token
        ]);
//        mail the reset link to user
//        $mail->to($user->email)->queue(new ForgotPasswordMail($reset_token));
        event(new SendPasswordResetLinkEmail($user, $reset_link));

        return $this->withMessage('New record created successfully.');
    }
}
