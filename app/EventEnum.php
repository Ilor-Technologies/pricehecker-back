<?php

namespace App;

class EventEnum extends BaseModel
{
    protected $table = 'event_enums';

    protected $fillable = ['id', 'name', 'type_id'];

    public function events()
    {
        return $this->hasMany(Event::class, 'event_enum_id', 'type_id');
    }
}
