<?php

return [
    'sign_up' => [
        'release_token' => env('SIGN_UP_RELEASE_TOKEN'),
        'validation_rules' => [
            'username' => 'bail|required|unique:users',
            'email' => 'required|email|unique:users,email',
            'password' => 'required|min:8|confirmed',
            'first_name' => 'required|max:255',
            'last_name' => 'required|max:255',
            'phone' => 'required|min:8|max:20|unique:users',
            'institution_id' => 'required',
            'grade_id' => 'required',
            'parastatal_id' => 'required',
            'job_title' => 'required|string',
            'employed_date' => 'numeric|min:1950',
            'frontend_url' => 'required|string',
            'parastatal_code' => 'required|string|parastatal_code:parastatal_id',
        ]
    ],
    'vendor_sign_up' => [
        'release_token' => env('SIGN_UP_RELEASE_TOKEN'),
        'validation_rules' => [
            'username' => 'bail|required|unique:users',
            'email' => 'required|email|unique:users',
            'password' => 'required|min:8|confirmed',
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
            'website' => 'website',
//		    users table data
            'first_name' => 'required|max:255',
            'last_name' => 'required|max:255',
            'frontend_url' => 'required|string',
        ]
    ],
    'edit_account' => [
        'validation_rules' => [
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
        ]
    ],
    'edit_vendor_account' => [
        'validation_rules' => [
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
        ]
    ],
    'change_password' => [
        'validation_rules' => [
            'old_password' => 'required',
            'password' => 'required|min:8|confirmed',
        ]
    ],
    'admin_create_user' => [
        'validation_rules' => [
            'username' => 'bail|required|unique:users',
            'email' => 'required|email|unique:users',
            'first_name' => 'required|max:255',
            'last_name' => 'required|max:255',
            'phone' => 'required|min:8|max:20|unique:users',
            'frontend_url' => 'required|string',
        ]
    ],
    'admin_edit_user' => [
        'validation_rules' => [
            'email' => 'bail|required|email',
            'first_name' => 'required|max:255',
            'last_name' => 'required|max:255',
            'phone' => 'required|min:8|max:20'
        ]
    ],
    'login' => [
        'validation_rules' => [
            'username' => 'required',
            'password' => 'required|min:8'
        ]
    ],
    'forgot_password' => [
        'validation_rules' => [
            'email' => 'required|email',
            'frontend_url' => 'required|string',
        ]
    ],
    'reset_password' => [
        'release_token' => env('PASSWORD_RESET_RELEASE_TOKEN', false),
        'validation_rules' => [
            'reset_token' => 'required',
            'password' => 'required|min:8|confirmed'
        ]
    ],
    'lock_user' => [
        'validation_rules' => [
            'reason' => 'required',
        ]
    ],
    'is_locked' => [
        'validation_rules' => [
            'user_id' => 'required',
        ]
    ],
    'add_user' => [
        'validation_rules' => [
            'email' => 'bail|required|email|unique:users,email',
            'password' => 'required|min:8|confirmed',
            'first_name' => 'required|max:255',
            'last_name' => 'required|max:255',
            'phone' => 'required|min:8|max:20',
            'roles' => 'required|min:1'
        ]
    ],
    'setting' => [
        'validation_rules' => [
            'key' => 'required',
            'value' => 'required'
        ]
    ],
    'create_good_category' => [
        'validation_rules' => [
            'name' => 'required|string|unique:categories',
            'description' => 'required|string',
            'meta_keyword' => 'nullable|string',
            'meta_description' => 'nullable|string',
            'picture' => 'image|max:2048',
            'properties' => 'json|nullable'
        ]
    ],
    'update_good_category' => [
        'validation_rules' => [
            'name' => 'required|string',
            'description' => 'required|string',
            'meta_keyword' => 'nullable|string',
            'meta_description' => 'nullable|string',
            'picture' => 'image|max:2048',
            'properties' => 'json|nullable'
        ]
    ],
    'create_good' => [
        'validation_rules' => [
            'all_good_id' => 'required|min:1|exists:all_goods,id',
            'full_description' => 'required',
            'price' => 'required|numeric|max:99999999999999999999|min:1',
            'sku' => 'string|max:450|nullable',
            'warehouse_id' => 'required',
            'properties' => 'json|nullable',
            'details' => 'json|nullable',
            'vendor_id' => 'required',
            //'picture' => 'array',
//            'picture' => 'image|max:2048',
//            'picture.*' => 'required_with:picture|image|max:2048',
        ], 'messages' => [
            'all_good_id.*' => 'Goods is required',
            'warehouse_id.*' => 'Warehouse is required',
            'vendor_id.*d' => 'Owner is required'
        ]
    ],
    'update_good' => [
        'validation_rules' => [
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
        ], 'messages' => [
            'all_good_id.*' => 'Good/product is required',
            'warehouse_id.*' => 'warehouse is required'
        ]
    ],
    'roles' => [
        'superadmin' => 1,
        'admin' => 2,
        'regular' => 3,
    ],
    'start_user_id' => 1326,
    'create_all_goods' => [
        'validation_rules' => [
            'name' => 'required',
            'short_description' => 'required',
            'category_id' => 'required|exists:categories,id',
            'properties' => 'json|nullable'
        ], 'messages' => [
            'category_id.exists' => 'Category does not exist',
//            'category_id.*' => 'Category is required',
        ]
    ],
    'delete_many_all_goods' => [
        'validation_rules' => [
            'dt' => 'required'
        ], 'messages' => [
            'dt.*' => 'Sorry, your request cannot be processed because no valid items were specified.',
        ]
    ],
    'warehouse' => [
        'validation_rules' => [
            'name' => 'required|string',
            'state_id' => 'required|exists:states,id',
            'city_id' => 'required|exists:cities,id',
            'address_line_1' => 'required|string',
//            'address_line_2' => 'string|nullable',
//            'pobox_number' => 'string|nullable'
        ], 'messages' => [
            'name.*' => 'Warehouse name is required'
        ]
    ]

];
