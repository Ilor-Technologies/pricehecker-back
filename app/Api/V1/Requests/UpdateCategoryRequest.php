<?php

namespace App\Api\Requests;

use Config;
use Dingo\Api\Http\FormRequest;

class UpdateCategoryRequest extends FormRequest {

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
            'name' => 'required|string',
            'description' => 'required|string',
            'meta_keyword' => 'nullable|string',
            'meta_description' => 'nullable|string',
            'picture' => 'image|max:2048',
            'properties' => 'json|nullable'
        ];
	}
}
