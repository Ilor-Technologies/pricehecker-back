<?php

namespace App\Api\Controllers;

use App\Api\Requests\RoleRequest;
use App\Http\Controllers\Controller;
use App\Permission;
use App\Role;
use Dingo\Api\Exception\DeleteResourceFailedException;
use Dingo\Api\Exception\StoreResourceFailedException;
use Dingo\Api\Http\Response;
use Exception;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use Symfony\Component\HttpKernel\Exception\NotFoundHttpException;

class RoleController extends Controller
{
    /**
     * Display a listing of roles.
     *
     * @param Role $role
     * @param Permission $permission
     *
     * @param Request $request
     * @return json
     */
    public function index(Request $request)
    {
        $search = '';
        if ($request->input('search') != null) {
            $search = $request->input('search');
        }
        $role = Role::query();
        $roles = $role->where('name', 'like', '%' . $search . '%')
            //->makeHidden('pivot')
            ->with('permissions');

        return $roles->get();
    }

    /**
     * Store a newly created role in storage.
     *
     * @param RoleRequest $request
     * @return Response
     * @throws \Illuminate\Validation\ValidationException
     */
    public function store(RoleRequest $request)
    {
        $this->validate($request, ['name' => 'required|unique:roles']);

        if ($role = Role::query()->create($request->only('name'))) {
            $permissions = $request->get('permissions', []);

            //verify permissions to make sure selected permissions are in db
            if (!Permission::areValidPermissions($permissions)) {
                return $this->withMessage('We don\'t recognize some of the permissions you set', 400);
            }
            if ($role->syncPermissions($permissions)) {
                return $this->withMessage('Role created successfully');
            }
            throw new StoreResourceFailedException('Role was created, no permission was assigned');
        }
        throw new StoreResourceFailedException('Role couldn\'t be stored');
    }

    /**
     * Update the specified role by id in storage.
     * also sync the permissions in the request.
     * $request->permissions will be an array of permissions
     *
     * @param  \Illuminate\Http\Request $request
     * @param  string $role_name
     * @return json
     * @throws \Illuminate\Validation\ValidationException
     */
    public function update(Request $request, $role_name)
    {

        try {
            $role = Role::findByName($role_name);
        } catch (Exception $e) {
            throw new NotFoundHttpException('Role not found');
        }

        $this->validate($request, ['name' => 'required']);
        // admin role has everything
        /* if ($role->name === 'admin') {
            $role->syncPermissions(Permission::all());
            return new Response(['status'=>  'Permissions updated'], 201);
        } */
        //some roles can't be updated

        if(Role::query()->where('name', $request->name)->where('name', '!=', $role->name)->count()) {
            return $this->withMessage('Role name is already taken.', 400);
        }

        if ($role->isSpecialRole() || in_array($request->name, Role::SPECIAL_ROLES)) {
            if ($role->name === Role::SYSADMIN) {
                $role->syncPermissions(Permission::all());
            }
            throw new StoreResourceFailedException('This role can\'t be updated');
        }
        $permissions = $request->get('permissions', []);
        /* $permisssions = $permission->pluck('name')->toArray();
        return $this->response->array(array_intersect($permissions, $permisssions)); */

        //verify permissions to make sure selected permissions are in db
        if (!Permission::areValidPermissions($permissions)) {
            throw new StoreResourceFailedException('We don\'t recognize some of the permissions you set');
        }
        //some role names cannot be changed
        if (!$role->canNotBeDeleted() && !in_array($request->name, Role::SPECIAL_ROLES)) {
            //save the modified role name
            $role->name = $request->name;
        }
        if ($role->save()) {
            $role = Role::findByName($role->name);
            //save the modified permissions for the role
            $role->syncPermissions($permissions);
            return $this->withJson(['message' => 'Roles & Permissions updated'], 201);
        }

        throw new StoreResourceFailedException('Role update failed');
    }

    /**
     * Display the specified role.
     *
     * @param  \App\Role $role
     * @param  string $name
     *
     * @return json|Symfony\Component\HttpKernel\Exception\NotFoundHttpException
     */
    public function show(Role $role, $name)
    {
        try {
            if ($role = $role->findByName($name)) {
                $permissions = $role->permissions()->pluck('name');

                //return $this->response->array(compact('role', 'permissions'));
                return response()->json(['role' => $role, 'permissions' => $permissions, 'all_permissions' => Permission::query()->pluck('name')]);
            }
        } catch (Exception $e) {
            throw new NotFoundHttpException("Role $name not found");
        }
    }

    /**
     * Remove the specified role from storage.
     *
     * @param Role $role
     * @param $role_name
     * @return Response
     * @throws Exception
     */
    public function destroy(Role $role, $role_name)
    {
        try {
            if (!$role = $role->findByName($role_name)) {
                return $this->withMessage("Role $role_name is not found", 404);
            }
        } catch (Exception $e) {
            return $this->withMessage("Role $role_name is not found", 404);
        }
        //some roles can't be deleted
        if ($role->canNotBeDeleted()) {
            return $this->withMessage("Role $role_name cannot be deleted.", 400);
        }
        //delete role
        if ($role->forceDelete()) {
            return $this->withMessage("Role $role_name deleted successfully", 201);
        }

        //Role not deleted
        throw new DeleteResourceFailedException('Delete request failed');
    }
}
