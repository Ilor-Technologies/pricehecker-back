<?php
/**
 * Created by PhpStorm.
 * User: Gemdajs
 * Date: 01-Jun-18
 * Time: 06:41 AM
 */

namespace App\Http\Traits;

use App\Permission;
use App\Role;

trait HasRoles {

    public function roles() {
        return $this->belongsToMany(Role::class);
    }

    public function authorizeRoles($roles) {

        if (is_array($roles)) {

            return $this->hasAnyRole($roles) ||
                abort(401, 'This action is unauthorized.');

        }

        return $this->hasRole($roles) ||
            abort(401, 'This action is unauthorized.');

    }

    /**
     * Check multiple roles
     * @param array $roles
     * @return bool
     */
    public function hasAnyRole($roles) {
        return null !== $this->roles()->whereIn('name', $roles)->first();
    }

    /**
     * Check one role
     * @param string $role
     * @return bool
     */
    public function hasRole($role) {
        $roleName = $role;
        if ($role instanceof Role) {
            $roleName = $role->name;
        }
        return null !== $this->roles()->where('name', $roleName)->first();
    }

    public function can($permission, $arguments = []) {
        if (parent::can($permission, $arguments)) {
            return true;
        }
        if ($permission instanceof Permission) {
            $permission = $permission->name;
        }

        foreach ($this->roles as $r) {
            if ($r->permissions()->where('name', $permission)->count()) return true;
        }

        return false;
    }

    public function assignRole(...$roles) {
        foreach ($roles as $r) {
            if($r instanceof Role) {
                $roleObj = $r;
            } else {
                if(is_array($r)) {
                    $r = $r[0];
                }
                $roleObj = Role::findByName($r);
            }

            $this->roles()->attach($roleObj);
            return $this;
        }
        return $this;
    }

    /**
     * Revoke the given role from the model.
     */
    public function removeRole($role) {
        if (is_string($role)) {
            $role = Role::findByName($role);
        }
        if ($role instanceof Role)
            $this->roles()->detach($role);
        else
            throw new \InvalidArgumentException('Invalid role instance detected.');
    }

    /**
     * Remove all current roles and set the given ones.
     *
     * @param array $roles
     * @return $this
     */
    public function syncRoles(...$roles) {
        $this->roles()->detach();

        return $this->assignRole($roles);
    }

    /**
     * Determine if the model has all of the given role(s).
     *
     * @param $roles
     * @return bool
     */
    public function hasAllRoles($roles): bool {
        if (is_string($roles) && false !== strpos($roles, '|')) {
            $roles = $this->convertPipeToArray($roles);
        }

        if (is_string($roles) || $roles instanceof Role) {
            return $this->hasRole($roles);
        }

        $roles = collect()->make($roles)->map(function ($role) {
            return $role instanceof Role ? $role->name : $role;
        });

        return $roles->intersect($this->roles()->pluck('name')) == $roles;
    }

    /**
     * Determine if the model may perform the given permission.
     * @param $permission
     * @return bool
     */
    public function hasPermissionTo($permission): bool {
        if (is_string($permission)) {
            $permission = Permission::findByName($permission);
        }

        return $this->hasDirectPermission($permission) || $this->hasPermissionViaRole($permission);
    }

    /**
     * Determine if the model has any of the given permissions.
     *
     * @param array ...$permissions
     *
     * @return bool
     */
    public function hasAnyPermission(...$permissions): bool {
        if (is_array($permissions[0])) {
            $permissions = $permissions[0];
        }

        foreach ($permissions as $permission) {
            if ($this->hasPermissionTo($permission)) {
                return true;
            }
        }

        return false;
    }

    /**
     * Determine if the model has, via roles, the given permission.
     *
     * @param Permission $permission
     *
     * @return bool
     */
    protected function hasPermissionViaRole(Permission $permission): bool {
        return $this->can($permission);
    }

    /**
     * Determine if the model has the given permission.
     *
     * @return bool
     */
    public function hasDirectPermission($permission): bool {
        if (is_string($permission)) {
            $permission = Permission::findByName($permission);

            if (!$permission) {
                return false;
            }
        }

        return $this->can($permission);
    }

    /**
     * Return all permissions the directory coupled to the model.
     */
    public function getDirectPermissions() {
        return $this->getAllPermissions();
    }

    /**
     * Return all the permissions the model has via roles.
     */
    public function getPermissionsViaRoles() {
        return $this->getAllPermissions();
    }

    /**
     * Return all the permissions the model has, both directly and via roles.
     */
    public function getAllPermissions() {
        return $this->roles->flatMap(function ($role) {
            return $role->permissions;
        })->sort()->values();
    }

    public function getRoleNames() {
        return $this->roles->pluck('name');
    }

    protected function getStoredRole($role): Role {
        if (is_string($role)) {
            return Role::findByName($role);
        }

        return $role;
    }

    protected function convertPipeToArray(string $pipeString) {
        $pipeString = trim($pipeString);

        if (strlen($pipeString) <= 2) {
            return $pipeString;
        }

        $quoteCharacter = substr($pipeString, 0, 1);
        $endCharacter = substr($quoteCharacter, -1, 1);

        if ($quoteCharacter !== $endCharacter) {
            return explode('|', $pipeString);
        }

        if (!in_array($quoteCharacter, ["'", '"'])) {
            return explode('|', $pipeString);
        }

        return explode('|', trim($pipeString, $quoteCharacter));
    }
}
