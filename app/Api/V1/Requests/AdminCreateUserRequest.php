<?php

namespace App\Api\Requests;

use Config;
use Dingo\Api\Http\FormRequest;

class AdminCreateUserRequest extends FormRequest {
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
            'first_name' => 'required|max:255',
            'last_name' => 'required|max:255',
            'phone' => 'required|min:8|max:20|unique:users',
            'frontend_url' => 'required|string',
        ];
	}
}
