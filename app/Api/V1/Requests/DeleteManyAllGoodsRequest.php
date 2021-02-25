<?php

namespace App\Api\Requests;

use Dingo\Api\Http\FormRequest;
use Illuminate\Support\Facades\Config;

class DeleteManyAllGoodsRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize() {
        return true;
    }
    
    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules() {
        return [
            'dt' => 'required'
        ];
    }
    
    public function messages() {
        return ['dt.*' => 'Sorry, your request cannot be processed because no valid items were specified.',];
    }
}
