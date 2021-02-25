<?php

namespace App;

class City extends BaseModel
{
    protected $fillable = ['id', 'name', 'state_id', 'longitude', 'latitude'];

    protected $hidden = ['created_at', 'updated_at'];

    public function state()
    {
        return $this->belongsTo(State::class);
    }
}
