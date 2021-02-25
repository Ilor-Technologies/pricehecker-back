<?php

namespace App;

class State extends BaseModel
{
	protected $fillable = ['id',  'name' ];

	/**
	 * The attributes that should be hidden for arrays.
	 *
	 * @var array
	 */
	protected $hidden = ['created_at', 'updated_at'];

	public function cities(){
	    return $this->hasMany(City::class);
    }

}
