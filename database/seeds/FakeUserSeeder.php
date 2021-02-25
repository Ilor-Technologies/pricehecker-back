<?php

use App\Address;
use App\AllGoods;
use App\Good;
use App\InternalUser;
use App\Role;
use App\User;
use App\Vendor;
use App\Warehouse;
use Illuminate\Database\Seeder;

class FakeUserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        foreach (range(1, 20) as $index) {
            $user = factory(User::class)->create();
            $user->internalUser()->save(factory(InternalUser::class)->make(['user_id' => $user->id]));
            $user->assignRole(Role::INTERNAL_USER);
        }

        foreach (range(1, 50) as $index) {
            factory(AllGoods::class)->create();
        }
//
//        Eloquent::guard();
        foreach (range(1, 30) as $index) {
            $user = factory(User::class)->create();
            $user->is_vendor = true;
            $user->save();
            $user->assignRole(Role::VENDOR);

            $address = factory(Address::class)->create();
            $vendor = $user->vendor()->save(factory(Vendor::class)->make([
                'user_id' => $user->id,
                'address_id' => $address->id
            ]));

            $warehouse = factory(Warehouse::class)->create();
            $warehouse->vendor_id = $vendor->id;
            $warehouse->address_id = $address->id;
            $warehouse->save();

            foreach (range(1, 30) as $index) {
                $good = factory(Good::class)->create();
                $good->update([
                    'all_good_id' => AllGoods::query()->inRandomOrder()->first()->id,
                    'vendor_id' => $vendor->id,
                    'warehouse_id' => $warehouse->id
                ]);
            }
        }
    }
}
