<?php

use Illuminate\Database\Seeder;
use App\City;
use App\State;
use Illuminate\Support\Arr;

class StateCityTablesSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $path = storage_path('app/setup/state_city.json');
        $json = (array)json_decode(file_get_contents($path), true);
        $states_cities = Arr::sortRecursive($json);
        foreach ($states_cities as $state => $cities) {
            $state = State::firstOrCreate(['name' => $state]);
            $cities = array_map(function ($value) {
                return trim($value);
            }, explode(', ', $cities));
            foreach ($cities as $city) {
                City::firstOrCreate(['name' => $city, 'state_id' => $state->id]);
            }
        }
    }
}
