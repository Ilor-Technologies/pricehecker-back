<?php

namespace App\Api\Controllers;

use App\Api\Requests\ResetPasswordRequest;
use Config;
use Tymon\JWTAuth\JWTAuth;
use App\User;
use App\JwtToken;
use App\PasswordReset;
use App\Http\Controllers\Controller;
use App\AdminCreatedUser;
use Symfony\Component\HttpKernel\Exception\HttpException;
use Symfony\Component\HttpKernel\Exception\BadRequestHttpException;
use Symfony\Component\HttpKernel\Exception\AccessDeniedHttpException;

class ResetPasswordController extends Controller
{
    /**
     * validate password request url
     *
     * @param string $reset_token
     *
     * @return \Dingo\Api\Http\Response
     */
    public function getResetPassword($reset_token)
    {
        $passwordReset = PasswordReset::query()->where('token', $reset_token)->first();

        //is password reset token in db and does user exist
        if ($passwordReset && $passwordReset->token === $reset_token) {
            $user = User::query()->where('email', $passwordReset->email)->first();
            if ($user) {
                if (($adminUser = AdminCreatedUser::query()->where('user_id', $user->id)->first())) {
                    $user->update(['is_active' => 1]);
                    $adminUser->delete();
                }
                //reset_token exists, respond ok with reset_token,
                // for the user to be shown form

                return $this->withJson(['status' => 'ok', 'reset_token' => $reset_token]);
            }
        }
        //token invalid
        throw new AccessDeniedHttpException('Invalid or expired reset link');
    }

    /**
     * reset the account when form is submitted
     *
     * @param ResetPasswordRequest $request
     * @param JWTAuth $JWTAuth
     *
     * @return json response with JWToken
     */
    public function doResetPassword(ResetPasswordRequest $request, JWTAuth $JWTAuth)
    {
        $passwordReset = PasswordReset::query()->where($request->only('email', 'token'))->first();
        if ($passwordReset &&
            ($user = User::query()->where('email', $passwordReset->email)->first())
        ) {
            $user->password = $request->password;
            $user->save();
            $passwordReset->delete();
            //delete old token if exists in jwt_token table
            JwtToken::blackListToken($user);
            return $this->withJson([
                'status' => 'password reset successfully'
            ]);
        }
        //invalid request
        return $this->withMessage('Invalid request', 500);
    }
}
