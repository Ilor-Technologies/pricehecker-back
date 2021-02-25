<?php

namespace App\Api\Requests;

use Config;
use Dingo\Api\Http\FormRequest;

class VendorSignUpRequest extends FormRequest {

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
            'username' => 'bail|required|unique:users',
            'email' => 'required|email|unique:users',
            'password' => 'required|min:6',
            'business_name' => 'required',
            'bpp_id' => 'string|unique:vendors',
            'rc_number' => 'required|unique:vendors',
            'tax_identification_number' => 'required|unique:vendors',
            'phone' => 'required|min:8|max:20|unique:users',
            'business_description' => 'required',
            'state_id' => 'required',
            'city_id' => 'required',
            'address_line_1' => 'required',
            'email1' => 'email|unique:vendors,email',
            'website' => 'url',
//		    users table data
            'first_name' => 'required|max:255',
            'last_name' => 'required|max:255',
            'frontend_url' => 'required|string',
        ];
	}
}
