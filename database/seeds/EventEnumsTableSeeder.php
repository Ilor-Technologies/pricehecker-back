<?php

use App\EventEnum;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class EventEnumsTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('event_enums')->delete();
        foreach ([['id' => '1', 'name' => 'debug'], ['id' => '2', 'name' => 'info'], ['id' => '3', 'name' => 'notice'],
                     ['id' => '4', 'name' => 'warning'], ['id' => '5', 'name' => 'error'], ['id' => '6', 'name' => 'critical'
            ], ['id' => '7', 'name' => 'alert'], ['id' => '8', 'name' => 'emergency']] as $data) {
            if (array_key_exists('id', $data)) {
                $data['type_id'] = $data['id'];
                unset($data['id']);
            }
            EventEnum::query()->updateOrCreate($data);
        }
    }
}
