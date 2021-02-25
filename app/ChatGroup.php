<?php

namespace App;

class ChatGroup extends BaseModel
{
    protected $fillable = ['id', 'name', 'description', 'is_group', 'user_list', 'signature'];

    protected $appends = ['by', 'time'];
    protected $hidden = ['user_list'];

    public function getByAttribute()
    {
        return $this->created_by;
    }

    public function getTimeAttribute()
    {
        return $this->created_at;
    }

    public function chatGroupParticipants()
    {
        return $this->hasMany(ChatGroupParticipant::class, 'chat_group_id');
    }

    public function participants()
    {
        return $this->hasManyThrough(User::class, ChatGroupParticipant::class, 'chat_group_id', 'id', 'id', 'user_id');
    }

    public function messages()
    {
        return $this->hasMany(ChatMessage::class, 'chat_group_id');
    }

//    public function getNameAttribute()
//    {
//        $name = $this->attributes['name'];
//        if($name) return $name;
//        if (auth()->user()->hasRole(Role::VENDOR)) {
//            $creator = $this->creator;
//            if (!$creator) {
//                $creator = $this->participants()->where('is_vendor', false)->first();
//            }
//            $counts = $this->participants()->where('users.id', '!=', auth()->id())->count() - 1;
//            return $creator->full_name . (($counts > 0) ? (' and ' . $counts . ' others') : '');
//        } else {
//            $participants = $this->participants()->where('is_vendor', true)->first();
//            $counts = $this->participants()->where('users.id', '!=', auth()->id())->count() - 1;
//            return $participants->vendor->business_name . (($counts > 0) ? (' and ' . $counts . ' others') : '');
//        }

//    }

//    public function getDescriptionAttribute() {
//        $description = $this->attributes['description'];
//        if (!$description) {
//        }
//
//        return $description;
//    }
}
