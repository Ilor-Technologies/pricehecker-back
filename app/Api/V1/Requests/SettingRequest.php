<?php

namespace App\Api\Requests;

use Dingo\Api\Http\FormRequest;
use Config;

class SettingRequest extends FormRequest
{
    public function rules()
    {
        return [
            'key' => 'required',
            'value' => 'required'
        ];
    }

    public function authorize()
    {
        return true;
    }
}
