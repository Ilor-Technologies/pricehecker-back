<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class PermissionRole extends BaseModel
{
    protected $fillable = ['id', 'permission_id', 'role_id'];
}
