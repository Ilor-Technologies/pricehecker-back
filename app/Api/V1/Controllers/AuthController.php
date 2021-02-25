<?php
/**
 * Created by PhpStorm.
 * User: gemda
 * Date: 18/06/2019
 * Time: 9:47 PM
 */

namespace App\Api\Controllers;


use App\AccountActivation;
use App\Address;
use App\Api\Requests\ForgotPasswordRequest;
use App\Api\Requests\LoginRequest;
use App\Api\Requests\SignUpRequest;
use App\Api\Requests\VendorSignUpRequest;
use App\Document;
use App\DocumentFormat;
use App\Events\LoginEvent;
use App\Events\LoginFailedEvent;
use App\Events\LoginNotActiveEvent;
use App\Events\SendPasswordResetLinkEmail;
use App\Events\SendWelcomeEmail;
use App\Grade;
use App\Http\Controllers\Controller;
use App\Institution;
use App\InternalUser;
use App\IsLocked;
use App\JwtToken;
use App\Parastatal;
use App\PasswordReset;
use App\Role;
use App\State;
use App\User;
use App\Vendor;
use Dingo\Api\Exception\StoreResourceFailedException;
use Illuminate\Contracts\Mail\Mailer as Mail;
use Illuminate\Http\Request;
use Symfony\Component\HttpKernel\Exception\AccessDeniedHttpException;
use Tymon\JWTAuth\Exceptions\JWTException;
use Tymon\JWTAuth\JWTAuth;

class AuthController extends Controller
{
    /**
     * Attempt user login
     *
     * @param LoginRequest $request
     * @param JWTAuth $JWTAuth
     * @return json response
     *
     * @SWG\Post(
     *   path="/auth/login",
     *   tags={"Users"},
     *   summary="Attempt user login",
     *   description="",
     *   produces={"application/json"},
     *     @SWG\Parameter(
     *     name="user credential",
     *     in="body",
     *     description="The user's login credentials (username and password)",
     *     required=true,
     *     @SWG\Schema(
     *      required={"username", "password"},
     *             @SWG\Property(property="username", type="string", description="Username"),
     *             @SWG\Property(property="password", type="string", description="Password"),
     *     )
     *   ),
     *   @SWG\Response(response=200, description="successful operation",
     *     @SWG\Schema(
     *          @SWG\Property(property="token", type="string", description="*Auth token"),
     *      )
     *   ),
     * )
     */
    public function login(LoginRequest $request, JWTAuth $JWTAuth)
    {
        $credentials = $request->only(['username', 'password']);

        try {
            $token = $JWTAuth->attempt($credentials);

            if (!$token) {
//                todo: report event
                event(new LoginFailedEvent($request->ip()));
                return $this->withMessage('Access denied, invalid credential.', 400);
            }
        } catch (JWTException $e) {
            return $this->withMessage($e->getMessage(), 400);
        }

        //user authenticated
        //check if they are active
        $user = User::query()->where('username', $credentials['username'])->firstOrFail();

        if ($user->is_active == 0) {
//            todo: report event
            event(new LoginNotActiveEvent($user));
            return $this->withMessage('Account is not active.', 400);
        }
        //check if they are locked
//        if($user->is_vendor) {
        $lock_details = IsLocked::query()->where('user_id', $user->id)->first();
        if ($lock_details) {
//                event(new UserLoginIsLocked($user));
            return $this->withJson([
                'message' => 'Sorry, you have been locked out.',
                'reason' => $lock_details->reason
            ], 403);
        }
//        }

        //check if user cancelled their account
        if ($user->cancelledAccount()) {
            event(new LoginFailedEvent($request->ip()));
            throw new AccessDeniedHttpException('Access denied. You have either cancelled or deleted your account.');
        }

        //fire login event
        event(new LoginEvent($user));

//        this is critical for chat authentication
//        JwtToken::query()->create([
//            'user_id' => $user->id,
//            'token' => $token
//        ]);
        //return response with token
        return $this->withJson([
            'token' => $token,
            'claim' => [
                'i' => $user->id,
                'n' => "{$user->full_name}",
                'r' => $user->role,
                'p' => $user->getAllPermissions()->pluck('name'),
                'd' => $user->picture
            ]
        ]);
    }

    public function showVendorSignUp()
    {
        //gets all pre-data for signup e.g. parastatals, institutions list etc.
        $states = State::all(['id', 'name']);

        return $this->withJson(['states' => $states]);
    }

    public function showInternalUserSignUp(Request $request)
    {
        $authUser = $this->authUser();
        //gets all pre-data for signup e.g. parastatals, institutions list etc.
        $data = [
            'institutions' => Institution::with('parastatals')->get(),
            'grades' => Grade::query()->get()
        ];
        $with = explode(',', $request->input('with'));

//        error_log(!$authUser ? 'Not auth' : 'Auth');
        if (in_array('roles', $with) && $authUser) {
            $except = [];
            if (!$authUser->hasRole(Role::SYSADMIN)) {
                $except[] = Role::SYSADMIN;

                if (!$authUser->hasRole(Role::ADMIN)) {
                    $except[] = Role::ADMIN;
                }
            }
            $data['roles'] = Role::forAuthUser();
        }

        return $this->withJson($data);
    }

    /**
     * handle new user signup
     *
     * @param SignUpRequest $request
     * @param JWTAuth $JWTAuth
     *
     * @param SignUpRequest $request
     * @param JWTAuth $JWTAuth
     * @return json
     * @SWG\Post(
     *   path="/internal/signup",
     *   tags={"Internal Users"},
     *   summary="Internal user signup",
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
     *         @SWG\Property(type="string", property="institution_id"),
     *         @SWG\Property(type="string", property="email"),
     *         @SWG\Property(type="string", property="password"),
     *         @SWG\Property(type="string", property="phone"),
     *         @SWG\Property(type="string", property="parastatal_id"),
     *         @SWG\Property(type="string", property="employed_date"),
     *         @SWG\Property(type="string", property="grade_id"),
     *         @SWG\Property(type="string", property="job_title")
     *     )
     *   ),
     *   @SWG\Response(
     *     response=200, description="successful operation",
     *     @SWG\Property(type="string", property="status")
     *   )
     * )
     * )
     * @return \Illuminate\Http\JsonResponse
     * @throws \Exception
     */
    public function signUp(SignUpRequest $request, JWTAuth $JWTAuth)
    {
        //$request->frontend_url = 'http://www.App.ilortech.com';
        $parastatalExists = Parastatal::query()->where(['code' => $request->parastatal_code, 'id' => $request->parastatal_id])->count();

        if (!$parastatalExists) {
            return $this->withMessage('Invalid MDA Code', 400);
        }

        //if we're here, validation already passed
        $data = $request->only(['username', 'email', 'password', 'first_name', 'last_name', 'middle_name', 'phone']);
        $user = new User($data);

        $user->is_active = 1;
        $user->is_vendor = 0;

        //save $user;
        if (!$user->save()) {
            return $this->withMessage("Unable to create new user record.", 500);
        }
        //assign the user role
        $user->assignRole(Role::findByName(Role::INTERNAL_USER, 'api'));

        //$useless = InternalUserStatus::firstOrCreate($request->only('job_title'));

        $data = $request->only('institution_id', 'parastatal_id', 'employed_date', 'grade_id', 'job_title');

        $data['user_id'] = $user->id;
        $internalData = new InternalUser($data);
        if (!$internalData->save()) {
            $user->forceDelete();
            return $this->withMessage("Unable to create new user record", 500);
        }

        //return response()->json( [ 'status' => 'ok' ], 201 );

        //send activation email
        $activation_token = $this->saveActivation($user->email, $user->username);

//        event(new SendWelcomeEmail($user, $activation_token));

        $token = $JWTAuth->fromUser($user);

        return $this->withJson(['status' => 'Sign up successfully', 'token' => $token]);
    }

    /**
     * @SWG\Post(
     *   path="/vendor/signup",
     *   tags={"Vendors"},
     *   summary="Vendor signup",
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
     *         @SWG\Property(type="string", property="password"),
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
     * @param Request $request
     * @param JWTAuth $JWTAuth
     * @param DocumentFormat $documentFormat
     * @return \Illuminate\Http\JsonResponse
     * @throws \Exception
     */
    public function vendorSignUp(VendorSignUpRequest $request, JWTAuth $JWTAuth, DocumentFormat $documentFormat)
    {
        $data = $request->only(['username', 'email', 'password', 'first_name', 'last_name', 'middle_name', 'phone']);
        $user = new User($data);

        try {
            if ($auth_user = $this->authUser()) {
                $user['created_by'] = $auth_user->id;
            }
        } catch (\Exception $e) {
        }

        $user->is_active = 1;
        $user->is_vendor = 1;

        //save $user;
        if (!$user->save()) {
            return $this->withMessage('Unable to complete registration', 500);
        }
        //assign the user role
        $user->assignRole(Role::findByName(Role::VENDOR, 'api'));

//		register address for vendor
        $data = $request->only(['state_id', 'city_id', 'address_line_1', 'address_line_2', 'pobox_number']);
        $address = new Address($data);

        if (!$address->save()) {
            $user->forceDelete();
            return $this->withMessage('Unable to complete registration', 500);
        }

        $data = $request->only(['bpp_id', 'business_name', 'rc_number', 'tax_identification_number', 'business_description', 'website']);

        $data['user_id'] = $user->id;
        $data['address_id'] = $address->id;
        $data['email'] = $request->email1 ? $request->email1 : $request->email;
        $vendor = new Vendor($data);

        if (!$vendor->save()) {
            $user->forceDelete();
            $address->forceDelete();
            throw $this->withMessage('Unable to complete sign-up, try again in a bit', 500);
        }

        //send activation email
        $activation_token = $this->saveActivation($user->email, $user->username);

//        event(new SendWelcomeEmail($user, $activation_token));

        return $this->withMessage("Registration successful.");
    }

    /**
     * check check signup fields
     *
     * @param string $field
     * @param string $value
     * @return \Illuminate\Http\JsonResponse
     */
    public function checkFormFields($field, $value)
    {
        switch ($field) {
            case 'email':
            case 'username':
            case 'phone':
                $return = User::query()->where($field, $value)->first();
                break;
            case 'rc_number':
            case 'tax_identification_number':
                $return = Vendor::query()->where($field, $value)->first();
                break;

            default:
                $return = false;
                break;
        }
        $return = $return ? 'taken' : 'not taken';

        return response()->json(['status' => $return], 200);
    }

    /**
     * Save user activation token and email to database
     *
     * @param string $email
     * @param string $userSlug
     *
     * @return string $token
     *
     */
    protected function saveActivation($email, $userSlug)
    {
        $data = [
            'email' => $email,
            'token' => $this->generateActivateToken($userSlug)
        ];

        $accountActivation = new AccountActivation($data);
        $accountActivation->save();

        return $data['token'];
    }

    /**
     * Generate random token for user
     *
     * @param string $userSlug
     *
     * @return string
     */
    protected function generateActivateToken($userSlug)
    {
        return md5(strtolower($userSlug) . mt_rand(13, 23) . strtotime(\Carbon\Carbon::now(1)));
    }

    /**
     * upload vendors supporting document
     *
     * @param Request $request
     * @return Document
     */
    protected function uploadSupportingDocument($request, $user)
    {
        $document = Document::getDocument($request);

        if ($documents = Document::saveDocument($document, null, 1)) {
            if (is_array($documents)) {
                foreach ($documents as $document) {
                    $document->created_by = $user->id;
                    $document->save();
                }
            } else {
                $documents->created_by = $user->id;
                $documents->save();
            }
            return $documents;
        }

        throw new StoreResourceFailedException('couldn\'t upload document');
    }

    public function sendResetEmail(ForgotPasswordRequest $request)
    {
        //$request->frontend_url = 'http://www.App.ilortech.com';
        $user = User::query()->where('email', '=', $request->get('email'))->first();
        //check email in user db
        if (!$user) {
            return $this->withMessage('USer does not exists', 404);
        }
        //valid user
        $reset_token = $user->username . strtotime(\Carbon\Carbon::now(1));
        $reset_token = md5($reset_token);
        $reset_link = $request->frontend_url . '/' . $reset_token;


        PasswordReset::query()->create([
            'email' => $user->email,
            'token' => $reset_token
        ]);
        //mail the reset link to user
        //$mail->to($user->email)->queue(new ForgotPasswordMail($reset_token));
        event(new SendPasswordResetLinkEmail($user, $reset_link));

        return response()->json(['status' => 'ok', 'message' => 'A password reset link is on its wat'], 200);
    }
}
