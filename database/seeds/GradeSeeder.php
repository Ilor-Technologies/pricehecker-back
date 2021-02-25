<?php

use App\Grade;
use Illuminate\Database\Seeder;

class GradeSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        foreach (range(1, 14) as $grade) {
            Grade::query()->create([
                'level' => 'Level ' . $grade,
                'description' => 'Level ' . $grade,
            ]);
        }
    }
}
