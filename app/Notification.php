<?php

namespace App;

use Exception;
use Illuminate\Database\Eloquent\Builder;
use App\Api\Traits\HandlesEventLogging;
use Tymon\JWTAuth\Facades\JWTAuth;
use Yajra\Auditable\AuditableTrait;

class Notification extends BaseModel
{
    use AuditableTrait, HandlesEventLogging;

    protected $table = 'notifications';

    protected $fillable = ['id', 'title', 'body'];

    protected $hidden = ['is_public', 'pivot'];

    protected $appends = ['status'];

//    protected static function boot()
//    {
//        parent::boot();
//
//        /* static::addGlobalScope('public_private_admin', function (Builder $builder) {
//            $builder->publicAndPrivate();
//        }); */
//    }

    //relationships
    public function users()
    {
        return $this->belongsToMany('App\User')->withPivot('status');
    }

    /**
     * get status from pivot table
     */
    public function getStatusAttribute()
    {
        if ($this->pivot) {
            return $this->pivot->status;
        }
        return null;
    }

    /**
     * scope to get both private and public notifications for a user
     * @param Builder $query
     * @return
     */
    public function scopePublicAndPrivate(Builder $query)
    {
        $user = JWTAuth::parseToken()->authenticate();
        if ($user->hasPermissionTo('view_admin_notifications')) {
            return $this->public($query)
                ->union($this->private($query))
                ->union($this->admin($query));

                //or just view all. i.e where is_public == 0
                //return $query;
        }
        return $this->public($query)
            ->union($this->private($query));
    }

    /**
     * scope to get only public notifications
     * @param Builder $query
     * @return Builder
     */
    public function scopePublic(Builder $query) {
        return $query->where('is_public', 1);
    }

    /**
     * scope to get only private notifications for a user
     */
    public function scopePrivate(Builder $query)
    {
        $user = JWTAuth::parseToken()->authenticate();
        //$user = User::find(2);

        return $query->whereHas('users', function ($q) use ($user) {
            $q->where('id', $user->id);
        });
        //return $user->notifications();
    }

    /**
     * scope to get only admin notifications
     */
    public function scopeAdmin(Builder $query)
    {
        return $query->where('is_public', -1);
    }

    /**
     * notify all users
     *
     * @param array $notificationArray
     * @return bool
     */
    public function notifyAllUsers(array $notificationArray)
    {
        try {
            $users = User::all()->pluck('id')->toArray();
        } catch (Exception $e) {
            return false;
        }
        return $this->_notifyUsers($notificationArray, $users);
    }

    /**
     * notify users with provided user ids
     *
     * @param array $notificationArray
     * @param array $users
     * @return bool
     */
    public function notifyUsers($notificationArray, $users)
    {
        try {
            $users = User::query()->where('id', $users)->pluck('id')->toArray();
        } catch (Exception $e) {
            return false;
        }

        if (!count($users)) {
            return false;
        }
        return $this->_notifyUsers($notificationArray, $users, 0);
    }

    protected function _notifyUsers(array $notificationArray, array $users, $isPublic = 1) {
        try {
            $notification = new $this($notificationArray);
            $notification->is_public = $isPublic;
            $notification->save();
            $notification->users()->attach($users);
        } catch (Exception $e) {
            $notification = false;
        }
        return $notification;
    }
}
