<?php

namespace App;

class ChatGroupParticipant extends BaseModel
{
    protected $fillable = ['id', 'chat_group_id', 'user_id'];

    public function chatGroup() {
        return $this->belongsTo(ChatGroup::class, 'chat_group_id');
    }

    public function user() {
        return $this->belongsTo(User::class, 'user_id');
    }
}
