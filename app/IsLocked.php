<?php

namespace App;

class IsLocked extends BaseModel
{
    protected $table = 'is_lockeds';
    
    protected $fillable = ['id', 'user_id', 'reason'];
    
    public function user()
    {
        return $this->belongsTo(User::class, 'user_id');
    }
}
