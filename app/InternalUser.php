<?php

namespace App;

use Illuminate\Support\Facades\DB;

/**
 * @property mixed user_id
 */
class InternalUser extends BaseModel
{

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = ['id', 'user_id', 'institution_id', 'grade_id', 'parastatal_id', 'job_title', 'employed_date', 'is_locked'];

    /**
     * The attributes that should be hidden for arrays.
     *
     * @var array
     */
    protected $hidden = ['created_at', 'updated_at'];

    private $userModel = false;


    protected $appends = [ 'username', 'email', 'first_name', 'last_name', 'full_name',
        'middle_name', 'phone', 'is_active', 'role'
    ];

//    public static function boot()
//    {
//        parent::boot();
//
//        /**
//         * scope to return only internal users that belong to an admin's institution
//         */
///*         static::addGlobalScope('sameInstitution', function (Builder $builder) {
//            $user = JWTAuth::parseToken()->authenticate();
//
//            try {
//                return $builder->where('institution_id', $user->internalUser()->first()->institution_id);
//            } catch (Exception $e) {
//                return $builder->where('institution_id', 0);
//            }
//        }); */
//    }

    //relationships
    public function user()
    {
        return $this->belongsTo(User::class, 'user_id');
    }

    public function address()
    {
        return $this->belongsTo(Address::class, 'address_id');
    }

    public function institution()
    {
        return $this->belongsTo(Institution::class, 'institution_id');
    }

    public function grade()
    {
        return $this->belongsTo(Grade::class, 'grade_id');
    }

    public function parastatal()
    {
        return $this->belongsTo(Parastatal::class, 'parastatal_id');
    }

    public function getEmailAttribute()
    {
        return $this->userObject()->email;
    }

    public function getFirstNameAttribute()
    {
        return $this->userObject()->first_name;
    }

    public function getFullNameAttribute()
    {
        return $this->userObject()->first_name . ' '. $this->userObject()->last_name;
    }

    public function getLastNameAttribute()
    {
        return $this->userObject()->last_name;
    }

    public function getMiddleNameAttribute()
    {
        return $this->userObject()->middle_name;
    }

    public function getPhoneAttribute()
    {
        return $this->userObject()->phone;
    }

    public function getIsActiveAttribute()
    {
        return $this->userObject()->is_active;
    }

    public function getUsernameAttribute()
    {
        return $this->userObject()->username;
    }

    public function picture()
    {
        return $this->belongsTo(Picture::class, 'picture_id');
    }

    public function getRoleAttribute()
    {
        return '';
    }

    private function userObject()
    {
        if (!$this->userModel) {
            $this->userModel = DB::table('users')->find($this->user_id);
        }
        return $this->userModel;
    }

}
