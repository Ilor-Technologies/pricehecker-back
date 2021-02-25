<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class RoleUser extends BaseModel
{
    protected $fillable = ['id', 'user_id', 'role_id'];
    protected $table = 'role_user';
}
