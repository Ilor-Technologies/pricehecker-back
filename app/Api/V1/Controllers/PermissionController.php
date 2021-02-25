<?php

namespace App\Api\Controllers;

use App\Api\Requests\PermissionRequest;
use App\Http\Controllers\Controller;
use App\Permission;
use App\Role;
use Dingo\Api\Exception\DeleteResourceFailedException;
use Dingo\Api\Http\Response;
use Illuminate\Http\Request;
use Illuminate\Support\Str;

class PermissionController extends Controller
{
    /**
     * get all permissions.
     *
     * @return \Illuminate\Support\Collection
     */
    public function index()
    {
        return Permission::query()->pluck('name');
    }

    /**
     * Store a newly created permission in storage.
     *
     * @param PermissionRequest $request
     * @return Response
     * @throws \Illuminate\Validation\ValidationException
     */
    public function store(PermissionRequest $request)
    {
        $this->validate($request, [
            'permission_name' => 'required|string'
        ]);

        $permissions = $this->generatePermissions($request->permission_name);
        
        // create permissions
        foreach ($permissions as $permission) {
            Permission::query()->firstOrCreate(['name' => $permission ]);
        }
        // sync role for super_admin
        if ($role = Role::query()->where('name', 'super_admin')->first()) {
            $role->syncPermissions(Permission::all());
        }
        return new Response(['status'=>  'Permissions ' . implode(', ', $permissions) . ' created.' ], 201);
    }

    /**
     * Remove the specified permission from storage.
     *
     * @param  \Illuminate\Http\Request $request
     * @return Response
     * @throws \Illuminate\Validation\ValidationException
     */
    public function destroy(Request $request)
    {
        $this->validate($request, [
            'permission_name' => 'required|string'
        ]);

        $permission_name = $request->permission_name;
        $permissions = $this->generatePermissions($permission_name);

        // remove permission
        if (Permission::query()->where('name', 'LIKE', '%'. $this->getNameArgument($permission_name))->delete()) {
            // sync role for admin
            if ($role = Role::query()->where('name', 'admin')->first()) {
                $role->syncPermissions(Permission::all());
            }
            return new Response(['status'=>  'Permissions ' . implode(', ', $permissions) . ' deleted.' ], 201);
        }
        
        throw new DeleteResourceFailedException('No permissions for ' . $this->getNameArgument($permission_name) .' found!');
    }

    /**
    * protected function to generate permissions based on name. eg user generates view_users, add_users etc
    *
    * @param string $permission_name
    *
    * @return array
     */
    protected function generatePermissions(string $permission_name)
    {
        $abilities = ['view', 'add', 'edit', 'delete'];
        $name = $this->getNameArgument($permission_name);

        return array_map(function ($val) use ($name) {
            return $val . '_'. $name;
        }, $abilities);
    }
    /**
    * protected function to generate plural lower case of permission name
    *
    * @param string $permission_name
    *
    * @return string
     */
    protected function getNameArgument(string $permission_name)
    {
        return strtolower(Str::plural($permission_name));
    }
}
