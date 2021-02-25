<?php

namespace App\Api\Requests;

use Config;
use Dingo\Api\Http\FormRequest;

class PermissionRequest extends FormRequest
{
    public function rules()
    {
        return [];
    }

    public function authorize()
    {
        return true;
    }
}
