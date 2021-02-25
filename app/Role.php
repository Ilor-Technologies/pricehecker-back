<?php

namespace App;

use App\Exceptions\RoleDoesNotExist;
use Illuminate\Support\Str;

class Role extends BaseModel
{
    const SYSADMIN = 'Super Admin';
    const ADMIN = 'Admin';
    const VENDOR = 'Vendor';
    const INTERNAL_USER = 'Internal User';

    const SPECIAL_ROLES = [
        Role::SYSADMIN, ROLE::VENDOR, ROLE::ADMIN, Role::INTERNAL_USER
    ];

    protected $fillable = ['id', 'name', 'description', 'updated_by', 'created_by'];

    public function setNameAttribute($value)
    {
        $this->attributes['name'] = ucwords(str_replace('_', ' ', $value));
    }

    public function users()
    {
        return $this->belongsToMany(User::class);
    }

    public function permissions()
    {
        return $this->belongsToMany(Permission::class);
    }

    public static function findByName($name)
    {
        $role = static::query()->where('name', $name)->first();

        if (!$role) {
            throw RoleDoesNotExist::named($name);
        }

        return $role;
    }

    public static function findById(int $id)
    {
        $role = static::query()->where('id', $id)->first();

        if (!$role) {
            throw RoleDoesNotExist::withId($id);
        }

        return $role;
    }

    /**
     * Find or create role by its name (and optionally guardName).
     *
     * @param string $name
     * @return Model
     */
    public static function findOrCreate(string $name)
    {
        return static::firstOrCreate(['name' => $name]);
    }

    public function hasPermissionTo($permission): bool
    {
        if (is_string($permission)) {
            $permission = Permission::findByName($permission);
        }

        if (is_int($permission)) {
            $permission = Permission::findById($permission);
        }

        return $this->permissions->contains('id', $permission->id);
    }

    public function syncPermissions($permissions)
    {
        $this->permissions()->detach();
        foreach ($permissions as $permission) {
            if (is_string($permission)) {
                $permission = Permission::findByName($permission);
            }
            $this->permissions()->attach($permission);
        }

        return true;
    }

    public static function forAuthUser()
    {
        $authUser = auth()->user();

        $except = [Role::VENDOR];
        if (!$authUser->hasRole(Role::SYSADMIN)) {
            $except[] = Role::SYSADMIN;

            if (!$authUser->hasRole(Role::ADMIN)) {
                $except[] = Role::ADMIN;
            }
        }
        return Role::query()->whereNotIn('name', $except)->get(['name']);
    }

    public function canNotBeDeleted()
    {
        return $this->isSpecialRole();
    }

    public function isSpecialRole()
    {
        return in_array($this->name, Role::SPECIAL_ROLES);
    }

}
