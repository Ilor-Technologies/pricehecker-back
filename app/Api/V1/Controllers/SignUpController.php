<?php

namespace App\Api\Controllers;

use App\AccountActivation;
use App\Address;
use App\Api\Requests\SignUpRequest;
use App\Document;
use App\DocumentFormat;
use App\Events\SendWelcomeEmail;
use App\Http\Controllers\Controller;
use App\Institution;
use App\InternalUser;
use App\InternalUserStatus;
use App\Mail\UserRegistrationMail;
use App\Parastatal;
use App\Role;
use App\State;
use App\User;
use App\Vendor;
use Dingo\Api\Exception\StoreResourceFailedException;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Config as IlluminateConfig;
use Tymon\JWTAuth\JWTAuth;

class SignUpController extends Controller
{

    public function showVendorSignUp()
    {
        //gets all pre-data for signup e.g. parastatals, institutions list etc.
        $states = State::all(['id', 'name']);

        return $this->withArray(['states' => $states]);
    }

    public function showInternalUserSignUp()
    {
        //gets all pre-data for signup e.g. parastatals, institutions list etc.
        $institutions = Institution::all(['id', 'name']);
        $parastatals = Parastatal::all(['id', 'name']);
        $states = State::all(['id', 'name']);
        $job_titles = InternalUserStatus::all(['name', 'description']);

        return $this->withArray([
            'states' => $states,
            'parastatals' => $parastatals,
            'institutions' => $institutions,
            'job_titles' => $job_titles
        ]);
    }

    /**
     * handle new user signup
     *
     * @param SignUpRequest $request
     * @param JWTAuth $JWTAuth
     *
     * @return json
     */

    /**
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
     * @param SignUpRequest $request
     * @param JWTAuth $JWTAuth
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

        //save $user;
        if (!$user->save()) {
            throw new StoreResourceFailedException("Unable to create new user record.");
        }
        //assign the user role
        $user->assignRole(Role::findByName('internal_user', 'api'));

        //$useless = InternalUserStatus::firstOrCreate($request->only('job_title'));

        $data = $request->only(
            'institution_id',
            'parastatal_id',
            'employed_date',
            'grade_id',
            'job_title'
        );

        $data['user_id'] = $user->id;
        $internalData = new InternalUser($data);
        if (!$internalData->save()) {
            $user->delete();
            throw new StoreResourceFailedException("Unable to create new user record");
        }

        //return response()->json( [ 'status' => 'ok' ], 201 );

        //send activation email
        $activation_token = $this->saveActivation($user->email, $user->username);
        $activation_link = $request->frontend_url . '/' . $activation_token;

        event(
            new SendWelcomeEmail($user, $activation_link),
            new UserRegistrationMail($user)
        );

        //if we are sending activation email, we'll stop here
        if (!IlluminateConfig::get('apiauth.sign_up.release_token')) {
            return $this->withArray(['status' => 'Sign up successfully']);
        }

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
    public function vendorSignUp(Request $request, JWTAuth $JWTAuth, DocumentFormat $documentFormat)
    {
        $rules = config('apiauth.vendor_sign_up.validation_rules');
        //get allowed formats
        $allowedFormats = $documentFormat->allowedExtensionsToCommaSeperatedString();
        $rules['file'] = 'nullable|max:2048|mimes:' . $allowedFormats;
        $message = [
            'mimes' => 'Uploaded document format, not allowed'
        ];

        //validate
        $this->validate($request, $rules, $message);

        //$request->frontend_url = 'http://www.App.ilortech.com';
        //if we're here, validation already passed
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
            throw new StoreResourceFailedException();
        }
        //assign the user role
        $user->assignRole(Role::findByName('vendor', 'api'));

//		register address for vendor
        $data = $request->only(['state_id', 'city_id', 'address_line_1', 'address_line_2', 'pobox_number']);
        $address = new Address($data);

        if (!$address->save()) {
            $user->delete();
            throw new StoreResourceFailedException();
        }

        $data = $request->only(['bpp_id', 'business_name', 'rc_number', 'tax_identification_number', 'business_description', 'website']);

        $data['user_id'] = $user->id;
        $data['address_id'] = $address->id;
        $data['email'] = $request->email1 ? $request->email1 : $request->email;
        $vendor = new Vendor($data);

        if (!$vendor->save()) {
            $user->delete();
            $address->delete();
            throw new StoreResourceFailedException(500);
        }

        //return response()->json( [ 'status' => 'ok' ], 201 );

        //upload their document
        if ($request->hasFile('file')) {
            $this->uploadSupportingDocument($request, $user);
        }       

        //send activation email
        $activation_token = $this->saveActivation($user->email, $user->username);
        $activation_link = $request->frontend_url . '/' . $activation_token;

        event(new SendWelcomeEmail($user, $activation_link));

        //if we are sending activation email, we'll stop here
        if (!Config::get('apiauth.sign_up.release_token')) {
            return response()->json(['status' => 'ok'], 201);
        }

        $token = $JWTAuth->fromUser($user);

        return response()->json(['status' => 'ok', 'token' => $token], 201);
    }

    /**
     * check check signup fields
     *
     * @param string $field
     * @param string $value
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
                foreach($documents as $document) {
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
}
