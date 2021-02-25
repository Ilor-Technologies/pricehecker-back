<?php

namespace App\Api\Requests;

use Dingo\Api\Http\FormRequest;
use Illuminate\Support\Facades\Config;

class CreateAllGoodsRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            'name' => 'required',
            'short_description' => 'required',
            'category_id' => 'required|exists:categories,id',
            'properties' => 'json|nullable'
        ];
    }
    
    public function messages() {
        return [
            'category_id.exists' => 'Category does not exist',
        ];
    }
}
