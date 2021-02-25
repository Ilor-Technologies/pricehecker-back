<?php

namespace App\Api\Requests;

use Config;
use Dingo\Api\Http\FormRequest;

class IsLockedRequest extends FormRequest
{
    public function rules()
    {
        return ['user_id' => 'required'];
    }

    public function authorize()
    {
        return true;
    }
}
