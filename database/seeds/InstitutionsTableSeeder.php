<?php

use App\Api\Traits\HandlesUniqueUids;
use Illuminate\Database\Seeder;
use App\Parastatal;
use App\Institution;
use Illuminate\Support\Facades\DB;

class InstitutionsTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('institutions')->truncate();
        DB::table('parastatals')->truncate();
        $path = storage_path('app/setup/institutions.json');
        $json = (array)json_decode(file_get_contents($path), true);
        $institutions = [''];
        foreach ($json as $data) {
            unset($data['created_at']);
            unset($data['updated_at']);
            $model = new Institution();
            $data['code'] = $model->generateUniqueUid($data['name']);
            $institution = Institution::query()->firstOrCreate($data);
            $institutions[] = $institution;
            \Illuminate\Support\Facades\Log::alert($institution);
        }

        $path = storage_path('app/setup/parastatals.json');
        $json = (array)json_decode(file_get_contents($path), true);
        foreach ($json as $data) {
            unset($data['created_at']);
            unset($data['updated_at']);
            $model = new Parastatal();
            $data['code'] = $model->generateUniqueUid($data['name']);
            $iId = $data['institution_id'];
            $data['institution_id'] = $institutions[$iId]->id;
//            error_log("{$iId} {$data['institution_id']}");
            $parastatal = Parastatal::query()->firstOrCreate($data);
//            error_log($parastatal->id);
        }
    }
}
