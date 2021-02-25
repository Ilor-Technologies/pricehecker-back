<?php

namespace App;

class Address extends BaseModel
{
    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = ['id',
        'state_id', 'city_id', 'address_line_1', 'address_line_2', 'pobox_number'
    ];
    
    /**
     * The attributes that should be hidden for arrays.
     *
     * @var array
     */
    protected $hidden = ['created_at', 'updated_at'];

    public static function createDefaultAddress()
    {
        $fct = City::query()->where(['name' => 'Abuja Municipal'])->first();
        $address = Address::query()->firstOrCreate(['state_id' => $fct->state_id,
            'city_id' => $fct->id,
            'address_line_1' => '-'], ['address_line_2' => '-', 'pobox_number' => '']);

        return $address;
    }

    public function institution() {
        return $this->hasOne(Institution::class, 'institution_id');
    }
    
    public function city() {
        return $this->belongsTo(City::class, 'city_id');
    }
    
    public function state() {
        return $this->belongsTo(State::class, 'state_id');
    }
}
