<?php

use Illuminate\Database\Seeder;
use Maatwebsite\Excel\Facades\Excel;
use App\Category;

class CategoriesTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $path = storage_path('app/setup/categories.json');
        $json = (array)json_decode(file_get_contents($path), true);
        foreach ($json as $data) {
            if (array_key_exists('id', $data)) unset($data['id']);
            Category::query()->firstOrCreate($data);
        }
    }
}
