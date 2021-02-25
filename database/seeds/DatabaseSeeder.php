<?php

use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $this->call(EventEnumsTableSeeder::class);
        $this->call(StateCityTablesSeeder::class);
        $this->call(InstitutionsTableSeeder::class);
        $this->call(CategoriesTableSeeder::class);
        $this->call(GradeSeeder::class);
        $this->call(RolesPermissionsSeeder::class);
        $this->call(UsersTableSeeder::class);
        $this->call(SettingsTableSeeder::class);
        $this->call(GoodsTableSeeder::class);
        $this->call(FaqsTableSeeder::class);
        $this->call(DocumentFormatsTableSeeder::class);
        $this->call(DocumentTypesTableSeeder::class);
//        $this->call(FakeUserSeeder::class);
    }
}
