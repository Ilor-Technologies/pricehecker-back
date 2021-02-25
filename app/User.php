<?php

namespace App;

use App\Api\Traits\GeneralModelTrait;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Illuminate\Support\Facades\Hash;
use App\Http\Traits\HasRoles;
use Tymon\JWTAuth\Contracts\JWTSubject as AuthenticatableUserContract;

/**
 * @property string email
 * @property string first_name
 * @property string last_name
 * @property string phone
 * @property string password
 */
class User extends Authenticatable implements AuthenticatableUserContract
{
    use Notifiable, HasRoles, GeneralModelTrait;

    protected $guard_name = 'api';


    /* custom attributes we use from time to time. Not stored in database tho. */
    /* protected $email_subject = '';
	public function getEmailSubjectAttribute()
	{
		return $this->email_subject;
	}

	public function setEmailSubjectAttribute($value)
	{
		$this->email_subject = $value;
	} */

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = ['id',
        'username',
        'email',
        'password',
        'slug',
        'role_id',
        'first_name',
        'last_name',
        'middle_name',
        'phone',
        'is_active',
        'is_online',
        'is_vendor',
        'picture_id',
    ];

    /**
     * The attributes that should be hidden for arrays.
     *
     * @var array
     */
    protected $hidden = [
        'password',
        'roles',
//        'is_vendor'
    ];

    protected $appends = ['role', 'full_name'];

    /**
     * Automatically creates hash for the user password.
     *
     * @param  string $value
     *
     * @return void
     */
    public function setPasswordAttribute($value)
    {
        $this->attributes['password'] = Hash::make($value);
    }

    /**
     * Automatically InitialCaps the user's first name.
     *
     * @param  string $value
     *
     * @return void
     */
    public function setFirstNameAttribute($value)
    {
        $this->attributes['first_name'] = ucfirst($value);
    }

    /**
     * Automatically InitialCaps the user's last name.
     *
     * @param  string $value
     *
     * @return void
     */
    public function setLastNameAttribute($value)
    {
        $this->attributes['last_name'] = ucfirst($value);
    }

    //relationships will be defined below
//    public function role()
//    {
//        return $this->belongsTo('App\Role', 'role_id');
//    }

    public function getFullNameAttribute() {
        return "{$this->first_name} {$this->last_name}";
    }

    public function vendor()
    {
        return $this->hasOne(Vendor::class, 'user_id');
    }

    public function internalUser()
    {
        return $this->hasOne(InternalUser::class, 'user_id');
    }

    public function isLockeds()
    {
        return $this->hasMany('App\IsLocked', 'user_id');
    }

    public function reviews()
    {
        return $this->hasMany('App\GoodReview', 'user_id');
    }

    public function goods()
    {
        return $this->hasManyThrough('App\Good', 'App\Vendor', 'user_id', 'vendor_id');
    }

    public function documents()
    {
        return $this->hasMany('App\Document', 'created_by');
    }

    public function notifications()
    {
        return $this->hasMany(SysNotification::class, 'user_id');
    }

    public function isMember($groupId) {
        return $this->chatGroups()->where('chat_groups.id', $groupId)->count() > 0;
    }

//    public function unreadNotifications()
//    {
//        return $this->belongsToMany('App\Notification')->wherePivot('status', '=', 1);
//    }

    public function chatGroups() {
        return $this->hasManyThrough(ChatGroup::class, ChatGroupParticipant::class, 'user_id', 'id', 'id', 'chat_group_id');
    }

    public function jwtToken()
    {
        return $this->hasOne('App\JwtToken', 'user_id');
    }

    public function approvalDetails()
    {
        return $this->hasMany('App\ApprovalDetail', 'approving_officer_id');
    }

    //based on https://github.com/tymondesigns/jwt-auth/issues/260#issuecomment-143683226
    public function getJWTIdentifier()
    {
        return $this->getKey();
        //return $this->slug;
    }

    public function getJWTCustomClaims()
    {
        $data = [
//            'mid' => $this->id,
//            'username' => $this->username,
//            'is_active' => $this->is_active,
//            'role' => $this->role,
//            'permissions' => $this->getAllPermissions()->pluck('name'),
        ];

//        if ($this->is_vendor) {
//            $data['oid'] = $this->vendor->id;
//            $data['vendor'] = $this->vendor;
//        } else {
//            $data['oid'] = $this->internalUser->id;
//            $data['internal_user'] = $this->internalUser;
//            $data['last_survey'] = SurveyReport::owned()->whereNull('approved_at')->latest()->first();
//        }
        return [
//            'user' => $data
        ];
    }

    public function getRoleAttribute()
    {
        $role = $this->getRoleNames()->toArray();
        return implode(', ', $role);
    }


    public function picture()
    {
        return $this->belongsTo(Picture::class, 'picture_id');
    }

    /**
     * default user's phone number field for routing sms notifications.
     *
     * @return string
     */
    public function routeNotificationForTwilio()
    {
        return $this->phone;
    }

    public function isSuperAdmin()
    {

        return $this->hasRole(Role::SYSADMIN);
//        foreach (Permission::defaultPermissions() as $permission) {
//            if (!$this->can($permission)) {
//                return false;
//            }
//        }
//        return true;
    }

    public function cancelledAccount()
    {
        return $this->delete_request;
    }

    public function details()
    {
        if ($this->is_vendor) {
            return $this->belongsTo(Vendor::class, 'user_id');

        }
        return $this->belongsTo(InternalUser::class, 'user_id');
    }
}
