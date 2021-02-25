<?php

namespace App;

use App\Api\Traits\GeneralModelTrait;
use App\Api\Traits\HandlesUniqueUids;
use Exception;
use Tymon\JWTAuth\Facades\JWTAuth;

class Institution extends BaseModel
{
    use HandlesUniqueUids, GeneralModelTrait;
    protected $table = 'institutions';

    protected $fillable = ['id',  'code', 'name', 'email', 'phone', 'address_id'];

    protected $hidden = ['phone', 'email', 'address_id', 'created_by', 'updated_by'];

    //relationships
    public function users()
    {
        return $this->hasManyThrough(InternalUser::class, Parastatal::class, 'institution_id', 'parastatal_id', 'id');
    }
    public function address()
    {
        // return $this->belongsToMany('App\Address');
        return $this->belongsTo(Address::class, 'address_id');
    }

    public function parastatals()
    {
        return $this->hasMany(Parastatal::class, 'institution_id');
    }
    public function showCode()
    {
        try {
            $user = JWTAuth::parseToken()->authenticate();
            return $user && ($user->can('view_institution_code') || $this->where('id', $user->internalUser()->first()->institution_id));
        } catch (Exception $e) {
            return false;
        }
    }
}
