<?php

namespace App\Api\Requests;

use Dingo\Api\Http\FormRequest;

class ChatMessageRequest extends FormRequest
{
    public function rules()
    {
        return [
            'content' => 'required',
            'message' => ''
        ];
    }

    public function authorize()
    {
        return true;
    }
}
