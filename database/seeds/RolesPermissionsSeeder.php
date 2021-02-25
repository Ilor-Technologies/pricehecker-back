<?php

use App\Address;
use Illuminate\Database\Seeder;
use App\Role;
use App\Permission;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Str;

class RolesPermissionsSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run(Role $role, Permission $permission)
    {
//        DB::table('users')->truncate();
//        DB::table('internal_users')->truncate();
//        DB::table('vendors')->truncate();

        // Seed the default permissions
        $allPermissions = $permission->defaultPermissions();


        foreach ($allPermissions as $perms) {
//            error_log($perms . ': "' . $perms . '",');
            Permission::query()->firstOrCreate(['name' => $perms]);
        }
//        if (true) {
//            return;
//        }
        $this->command->info('Default Permissions added.');

        //super admin
        $role = Role::query()->firstOrCreate(['name' => Role::SYSADMIN]);
        $role->syncPermissions($permission->all());
        $this->command->info('Super Admin role created and granted all permissions' . "\n");
        $this->createUser($role);
        $this->command->info('Super Admin User created');

        //admin
        $role = Role::query()->firstOrCreate(['name' => Role::ADMIN]);
        $allPermissions = $permission->getAdminPermissions();
        $admin_permissions = $permission->whereIn('name', $allPermissions)->pluck('name');
        $role->syncPermissions($admin_permissions);
        $this->command->info('Admin User role created successfully.');
        $this->createUser($role);
        $this->command->info('Admin User created');

        //internal user
        $role = Role::query()->firstOrCreate(['name' => Role::INTERNAL_USER]);
        $allPermissions = $permission->getInternalUserPermissions();
        $internal_user_permissions = $permission->whereIn('name', $allPermissions)->pluck('name');
        $role->syncPermissions($internal_user_permissions);
        $this->command->info('Internal user role created successfully.');

        //vendors
        $role = Role::query()->firstOrCreate(['name' => Role::VENDOR]);
        $allPermissions = $permission->getVendorPermissions();
        $vendor_permissions = $permission->whereIn('name', $allPermissions)->pluck('name');
        $role->syncPermissions($vendor_permissions);
        $this->createUser($role);

        $this->command->info('Default roles created successfully.');
        $this->command->warn('All done :)');
    }

    /**
     * Create a user with given role
     *
     * @param $role
     */
    private function createUser($role)
    {
        $name = $role->name;
        $isVendor = $role->name === Role::VENDOR;
        $username = strtolower(Str::slug($name, '_'));
        $user = factory(App\User::class)
            ->create([
                'username' => $username,
                'email' => Str::slug($name , '_'). '@example.com',
                'first_name' => $name,
                'last_name' => '',
                'is_vendor' => $isVendor,
                'is_active' => true
            ]);
        if (!$isVendor ) {
            $user->internalUser()
                ->save(factory(App\InternalUser::class)
                    ->make(['user_id' => $user->id]));
        } else {
            $address = Address::createDefaultAddress();
            $user->vendor()
                ->save(factory(App\Vendor::class)
                    ->make(['user_id' => $user->id,
                        'business_name' => 'Vendor',
                        'rc_number' => '',
                        'tax_identification_number' => '',
                        'address_id' => $address->id,
                        'email' => '-',
                        'business_description' => '-',
                        'website' => '',
                        'is_default' => true
                    ]));
        }
        $user->assignRole($name);

        if ($name == Role::SYSADMIN) {
            $this->command->info('Here is the super admin details to login:');
            $this->command->warn('Super Admin Username: \'' . $name . '@example.com\'');
            $this->command->warn('Password: \'default123\'' . "\n");
        }
    }
}
