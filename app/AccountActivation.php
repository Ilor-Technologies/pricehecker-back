<?php

namespace App;

class AccountActivation extends BaseModel
{
    protected $table = 'account_activations';
        
    protected $fillable = ['id', 'email', 'token'];
}
