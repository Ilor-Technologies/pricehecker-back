<?php

use App\User;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class UsersTableSeeder extends Seeder {
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run() {
        DB::table('users')->update(['is_active' => true]);
//
//        $users = User::query()->get();
//        foreach ($users as $user) {
//            error_log($user->username);
//            $user->update(['password' => 'welcome']);
//        }
    }
}
