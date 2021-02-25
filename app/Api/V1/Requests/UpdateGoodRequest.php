<?php

namespace App\Api\Requests;

use Dingo\Api\Http\FormRequest;
use Config;

class UpdateGoodRequest extends FormRequest
{
    public function rules()
    {
        return [
            'all_good_id' => 'required|min:1|exists:all_goods,id',
            'full_description' => 'required',
            'price' => 'required|numeric|max:99999999999999999999|min:1',
            'sku' => 'string|max:450|nullable',
            'warehouse_id' => 'required|exists:warehouses,id',
            'property' => 'json|nullable',
            'details' => 'json|nullable',
            //'picture' => 'array',
            'picture' => 'image|max:2048',
            'picture.*' => 'required_with:picture|image|max:2048',
        ];
    }

    public function authorize()
    {
        return true;
    }
}
