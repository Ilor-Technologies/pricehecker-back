<?php

namespace App;

use Carbon\Carbon;
use Illuminate\Support\Arr;

class ChatMessage extends BaseModel
{
    protected $fillable = ['id', 'chat_group_id', 'content', 'picture_id', 'created_by', 'parent_id', 'signature'];
    protected $appends = ['message', 'is_incoming', 'time', 'group_id', 'by'];

    public function getGroupIdAttribute() {
        return $this->chat_group_id;
    }

    public function getByAttribute() {
        return $this->created_by;
    }

    public function getMessageAttribute()
    {
        return $this->attributes['content'];
    }

    public function getIsIncomingAttribute()
    {
        return $this->attributes['created_by'] !== auth()->id();
    }

    public function getTimeAttribute()
    {
        return $this->attributes['created_at'];
    }

    public function chatGroup()
    {
        return $this->hasOne(ChatGroup::class, 'chat_group_id');
    }

    public function replyingTo()
    {
        return $this->belongsTo(self::class, 'parent_id');
    }

    public function file()
    {
        return $this->belongsTo(Picture::class, 'picture_id');
    }


}
