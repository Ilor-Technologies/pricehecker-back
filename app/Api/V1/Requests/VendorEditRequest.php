<?php

namespace App\Api\Requests;

use Dingo\Api\Http\FormRequest;
use Config;

class VendorEditRequest extends FormRequest
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
            'email' => 'required|email',
            'business_name' => 'required',
            'rc_number' => 'required',
            'tax_identification_number' => 'required',
            'phone' => 'required|min:8|max:20',
            'business_description' => 'required',
            'state_id' => 'required',
            'city_id' => 'required',
            'address_line_1' => 'required',
            'email1' => 'email',
            'website' => 'website',
//		    users table data
            'first_name' => 'required|max:255',
            'last_name' => 'required|max:255',
            'logo' => 'image|mimes:jpeg,png,jpg,gif,svg',
        ];
    }
}
