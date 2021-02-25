<?php

namespace App\Api\Controllers;

use App\User;
use App\PasswordReset;
use App\Http\Controllers\Controller;
//use Illuminate\Support\Facades\Mail;
use Illuminate\Contracts\Mail\Mailer as Mail;
use App\Mail\RequestPasswordResetLinkMail;
use App\Events\SendPasswordResetLinkEmail;
use App\Api\V2\Requests\ForgotPasswordRequest;
use Symfony\Component\HttpKernel\Exception\NotFoundHttpException;

class ForgotPasswordController extends Controller
{
    public function sendResetEmail(ForgotPasswordRequest $request, Mail $mail, PasswordReset $passwordReset)
    {
        //$request->frontend_url = 'http://www.App.ilortech.com';
        $user = User::query()->where('email', '=', $request->get('email'))->first();
        //check email in user db
        if (!$user) {
            throw new NotFoundHttpException('User not found');
        }
        //valid user
        $reset_token = $user->username . strtotime(\Carbon\Carbon::now(1));
        $reset_token = md5($reset_token);
        $reset_link = $request->frontend_url . '/' . $reset_token;
        

        $passwordReset->create([
            'email' => $user->email,
            'token' => $reset_token
        ]);
        //mail the reset link to user
        //$mail->to($user->email)->queue(new ForgotPasswordMail($reset_token));
        event(new SendPasswordResetLinkEmail($user, $reset_link));

        return response()->json(['status' => 'ok'], 200);
    }
}
