<?php

namespace App\Api\Requests;

use Config;
use Dingo\Api\Http\FormRequest;

class SignUpRequest extends FormRequest
{

    public function rules()
    {
        return [
            'username' => 'bail|required|unique:users',
            'email' => 'required|email|unique:users,email',
            'password' => 'required|min:6',
            'first_name' => 'required|max:255',
            'last_name' => 'required|max:255',
            'phone' => 'required|min:8|max:20|unique:users',
            'institution_id' => 'required',
            'grade_id' => 'required',
            'parastatal_id' => 'required|exists:parastatals,id',
            'job_title' => 'required|string',
            'employed_date' => 'numeric|min:1950',
            'frontend_url' => 'required|string',
            'parastatal_code' => 'required|exists:parastatals,code',
        ];
    }

    public function authorize()
    {
        return true;
    }

    public function messages()
    {
        return [
            'employed_date.numeric' => 'Year of employment must be in digits',
            'employed_date.min'=> 'Year of employment cannot be earlier than 1950'
        ];
    }
}
