<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use App\Api\PermissionEnums;
use App\Exceptions\PermissionDoesNotExist;

class Permission extends BaseModel
{
    protected $fillable = ['id', 'name', 'description'];

    protected $appends = ['display_name'];

    public function roles()
    {
        return $this->belongsToMany(Role::class);
    }

    public static function findByName(string $name)
    {
        $permission = Permission::query()->where('name', $name)->first();

        if (! $permission) {
            throw PermissionDoesNotExist::named($name);
        }

        return $permission;
    }

    public static function findById(int $id)
    {
        $permission = Permission::query()->where('id', $id)->first();

        if (! $permission) {
            throw PermissionDoesNotExist::withId($id);
        }

        return $permission;
    }

    public function getDisplayNameAttribute() {
        return ucwords(str_replace('_', ' ', $this->name));
    }

    public static function defaultPermissions()
    {
        return self::getPerms(0);
    }

    public static function getAdminPermissions()
    {
        return self::getPerms(1);
    }

    public static function getInternalUserPermissions()
    {
        return self::getPerms(2);
    }

    public static function getVendorPermissions()
    {
        return self::getPerms(3);
    }

    /**
     * @return array
     */
    private static function getPerms($id)
    {
        $perms = [];
        foreach (PermissionEnums::$permissions as $key => $arr) {
            if (in_array($id, $arr)) {
                $perms[] = $key;
            }
        }
        return $perms;
    }

    //make sure the permissions sent are available in the db
    public static function areValidPermissions(array $permissions = []) : bool
    {
        return $permissions === array_intersect($permissions, self::query()->pluck('name')->toArray());
    }
}
