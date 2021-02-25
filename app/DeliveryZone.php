<?php

namespace App;

class DeliveryZone extends BaseModel
{
    protected $table = 'delivery_zones';
    protected $fillable = ['id', ];
    
    public function goods()
    {
        return $this->belongsToMany('App\Good')
                    ->using('App\DeliveryZoneRate');
    }
}
