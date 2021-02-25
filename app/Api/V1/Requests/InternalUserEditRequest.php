<?php

namespace App\Api\Requests;

use Config;
use Dingo\Api\Http\FormRequest;

class InternalUserEditRequest extends FormRequest
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
            'email' => 'bail|required|email',
            'first_name' => 'required|max:255',
            'last_name' => 'required|max:255',
            'phone' => 'required|min:8|max:20',
            'job_title' => 'required|string',
            'institution_id' => 'required',
            'employed_date' => 'numeric|min:1950',
            'grade_id' => 'required',
            'parastatal_id' => 'required',
            'logo' => 'image|mimes:jpeg,png,jpg,gif,svg'
        ];
    }

    public function messages()
    {
        return [
            'employed_date.numeric' => 'Year of employment must be in digits',
            'employed_date.min' => 'Year of employment cannot be earlier than 1950'
        ];
    }
}
