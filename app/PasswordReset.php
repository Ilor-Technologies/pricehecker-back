<?php

namespace App;

class PasswordReset extends BaseModel
{
    protected $table = 'password_resets';
        
    protected $fillable = ['id', 'email', 'token'];
}
