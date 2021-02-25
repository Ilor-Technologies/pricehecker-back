<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Job extends BaseModel
{
    protected $fillable = ['queue', 'payload', 'attempts', 'reserved_at', 'available_at', 'created_at'];
}
