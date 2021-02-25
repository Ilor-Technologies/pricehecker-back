<?php

namespace App\Api\Requests;

use Dingo\Api\Http\FormRequest;
use Illuminate\Support\Facades\Config;

class WarehouseRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize() {return true;}

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            'name' => 'required|string',
            'state_id' => 'required|exists:states,id',
            'city_id' => 'required|exists:cities,id',
            'address_line_1' => 'required|string',
        ];
    }
    
    public function messages()
    {
        return [
            'name.*' => 'Warehouse name is required',
            'address_line_1.*' => 'Address is required',
        ];
    }
}
