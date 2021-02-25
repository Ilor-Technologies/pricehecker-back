<?php

namespace App;

use App\Api\Traits\HandlesUniqueUids;
use Exception;
use Tymon\JWTAuth\Facades\JWTAuth;

class Parastatal extends BaseModel
{

    use HandlesUniqueUids;
    protected $table = 'parastatals';

    protected $fillable = ['id',  'code', 'name', 'email', 'institution_id', 'phone', 'address_id'];

    protected $hidden = ['created_by', 'updated_by'];

//    public static function boot()
//    {
//        parent::boot();
//
//        static::creating(function ($model) {
//            $model->code = $model->generateUniqueUid($model->name);
//        });
//
//        /**
//         * scope to return only parastatals that user belongs to
//         */
//        /* static::addGlobalScope('isMemberOf', function (Builder $builder) {
//            try {
//                $user = JWTAuth::parseToken()->authenticate();
//                return $builder->where('id', $user->internalUser()->first()->parastatal_id);
//            } catch (Exception $e) {
//                return $builder->where('id', 0);
//            }
//        }); */
//    }
    
    //relationships
    public function users()
    {
        return $this->hasMany('App\InternalUser', 'parastatal_id');
    }
    public function address()
    {
        // return $this->belongsToMany('App\Address');
        return $this->belongsTo('App\Address', 'address_id');
    }
    public function institution()
    {
        return $this->belongsTo('App\Institution', 'institution_id');
    }
    public function showCode()
    {
        try {
            $user = JWTAuth::parseToken()->authenticate();
            if ($user->hasPermissionTo('view_parastatals_code') || $this->where('id', $user->internalUser()->first()->parastatal_id)) {
                return true;
            }
        } catch (Exception $e) {
            return false;
        }
        return false;
    }
}
