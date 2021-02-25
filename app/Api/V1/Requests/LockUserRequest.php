<?php

namespace App\Api\Requests;

use Config;
use Dingo\Api\Http\FormRequest;

class LockUserRequest extends FormRequest
{
    public function rules()
    {
        return ['reason' => 'required',];
    }

    public function authorize()
    {
        return true;
    }
}
