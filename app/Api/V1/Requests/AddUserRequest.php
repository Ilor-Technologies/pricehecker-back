<?php

namespace App\Api\Requests;

use Config;
use Dingo\Api\Http\FormRequest;

class AddUserRequest extends FormRequest
{
    public function rules()
    {
        return [
            'email' => 'bail|required|email|unique:users,email',
            'password' => 'required|confirmed',
            'first_name' => 'required|max:255',
            'last_name' => 'required|max:255',
            'phone' => 'required|min:8|max:20',
            'roles' => 'required|min:1'
        ];
    }

    public function authorize()
    {
        return true;
    }
}
