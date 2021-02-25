<?php

namespace App\Api\Requests;

use Dingo\Api\Http\FormRequest;
use Config;

class CreateDocumentFormatRequest extends FormRequest
{
    public function rules()
    {
        return [
            'extension' => 'required|string|unique:document_formats,extension',
            'mime_type' => 'required|string|unique:document_formats,mime_type',
            'description' => 'required|string',
            'allowed' => 'integer|nullable'
        ];
    }

    public function authorize()
    {
        return true;
    }
}
