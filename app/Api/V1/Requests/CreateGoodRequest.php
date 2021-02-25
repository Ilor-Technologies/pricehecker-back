<?php

namespace App\Api\Requests;

use Dingo\Api\Http\FormRequest;

class CreateGoodRequest extends FormRequest
{
    public function rules()
    {
        return [
            'all_good_id' => 'required|min:1|exists:all_goods,id',
            'full_description' => 'required',
            'price' => 'required|max:99999999999999999999|min:1',
            'sku' => 'string|max:450|unique:goods,sku',
            'warehouse_id' => 'required',
            'properties' => 'json|nullable',
            'details' => 'json|nullable',
            'pictures' => 'array',
            'pictures.*' => 'exists:pictures,id'
        ];
    }
    
    public function messages() {
        return [
            'all_good_id.*' => 'Goods is required',
            'warehouse_id.*' => 'Warehouse is required',
            'vendor_id.*d' => 'Owner is required'
        ];
    }
    
    public function authorize()
    {
        return true;
    }
}
