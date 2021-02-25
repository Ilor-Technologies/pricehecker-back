<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;



/**
 * @property  user_id
 */
class SysNotification extends BaseModel
{

    protected $fillable = ['id', 'user_id', 'message', 'status', 'type'];

    public function user() {
        return $this->belongsTo(User::class);
    }
    
    public function scopeUnread($query) {
        return $query->where('status', false);
    }
}
