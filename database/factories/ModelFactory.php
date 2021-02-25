<?php

use App\SurveyReport;
use Illuminate\Support\Str;

/*
|--------------------------------------------------------------------------
| Model Factories
|--------------------------------------------------------------------------
|
| Here you may define all of your model factories. Model factories give
| you a convenient way to create models for testing and seeding your
| database. Just tell the factory how a default model should look.
|
*/


/** @var \Illuminate\Database\Eloquent\Factory $factory */
//users
$factory->define(App\User::class, function (Faker\Generator $faker) {
    $faker->addProvider(new Faker\Provider\en_NG\Person($faker));
    static $password;
    return [
        'username' => $faker->unique()->userName,
        'email' => $faker->unique()->safeEmail,        
        //'name' => str_after($faker->name, ' '),
        'password' => $password ?: $password = 'default123',
        'first_name' => $faker->firstName(),        
        'last_name' => $faker->lastName,        
        'phone' => $faker->unique()->phoneNumber,
    ];
});
//vendors
$factory->define(App\Vendor::class, function (Faker\Generator $faker) {
    return [
        'business_name'=> Str::title($faker->text(10)),
        'rc_number'=> rand(1000000, 9999999),
        'tax_identification_number'=> rand(1000000, 9999999),
        'business_description'=> $faker->text(20),
        'website' => $faker->domainName,
        'user_id' => '',
        'address_id' => ''
    ];
});
//internal_users
$factory->define(App\InternalUser::class, function (Faker\Generator $faker) {
    $institution = \App\Institution::query()->first();
    return [
        "institution_id" => $institution->id,
        "grade_id" => \App\Grade::query()->latest()->first()->id,
        "parastatal_id" => $institution->parastatals()->first()->id,
        "job_title" => $faker->jobTitle,
        "employed_date" => $faker->date('Y'),
        "user_id" => ''
    ];
});

//addresses
$factory->define(App\Address::class, function (Faker\Generator $faker) {
    $state = \App\State::query()->first();
    return [
        'state_id' => $state->id,
        'city_id' => $state->cities()->first()->id,
        'address_line_1' => $faker->streetAddress,
        'pobox_number' => mt_rand(1000, 9999)
    ];
});

//warehouses
$factory->define(App\Warehouse::class, function (Faker\Generator $faker) {
    return [
        'name' => $faker->text(20),
        'address_id' => '',
        'vendor_id' => ''
    ];
});

$factory->define(App\AllGoods::class, function (Faker\Generator $faker) {
    return [
        'name' => $faker->text(20),
        'short_description' => $faker->text(50),
        'category_id' => \App\Category::query()->inRandomOrder()->first()->id
    ];
});
//goods
$factory->define(App\Good::class, function (Faker\Generator $faker) {
    return [
        'all_good_id' => \App\AllGoods::query()->inRandomOrder()->first()->id,
        'full_description' => $faker->text(100),
        'vendor_id' => '',
        'price' => $faker->randomFloat(2, 0, 5000),
        'sku' => md5($faker->numberBetween(10000, 10000000)),
        'warehouse_id' => '',
    ];
});

//survey reports
$factory->define(App\SurveyReport::class, function (Faker\Generator $faker) {
    return [
        'name' => $faker->text(20),
        'short_description' => $faker->text(50),
        'full_description' => $faker->text(100),
        'vendor_id' => '',
        'price' => $faker->randomFloat(2, 0, 5000),
        'sku' => $faker->domainWord,
        'warehouse_id' => '',
        'weight' => $faker->randomFloat(2, 0, 20),
        'length' => $faker->randomFloat(2, 0, 20),
        'width' => $faker->randomFloat(2, 0, 20),
        'height' => $faker->randomFloat(2, 0, 20),
        'colour' => $faker->hexcolor
    ];
});
