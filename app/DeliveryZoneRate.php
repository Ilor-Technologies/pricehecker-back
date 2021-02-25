<?php

namespace App;

use Illuminate\Database\Eloquent\Relations\Pivot;

class DeliveryZoneRate extends Pivot
{
    protected $table = 'delivery_zone_rates';
    
    protected $fillable = ['id',  'rate' ];
}
