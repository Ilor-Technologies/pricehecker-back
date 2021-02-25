<?php

namespace App\Api\Requests;

use Config;
use Dingo\Api\Http\FormRequest;

class ForgotPasswordRequest extends FormRequest
{
    public function rules()
    {
        return [
            'email' => 'required|email',
            'frontend_url' => 'required|string',
        ];
    }

    public function authorize()
    {
        return true;
    }
}
