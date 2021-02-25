<?php

namespace App\Api\Requests;

use Dingo\Api\Http\FormRequest;

/**
 * @property mixed group_name
 * @property mixed signature
 */
class ChatGroupCreateRequest extends FormRequest
{
    public function rules()
    {
        return [
            'participants' => 'required|array',
            'participants.*' => 'exists:users,id',
            'group_name' => 'string'
        ];
    }

    public function authorize()
    {
        return true;
    }
}
