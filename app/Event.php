<?php

namespace App;

class Event extends BaseModel
{

    protected $table = 'events';

    protected $fillable = ['id', 'event', 'event_enum_id', 'information', 'thread'];

    public function eventEnum()
    {
        return $this->belongsTo(EventEnum::class, 'event_enum_id', 'type_id');
    }
}
