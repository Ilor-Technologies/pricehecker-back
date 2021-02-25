<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('reset_password/{token}', ['as' => 'password.reset', function($token) {
    // implement your reset password route here!
}]);

Route::get('image/{pictureUrl}', '\App\Api\Controllers\PictureController@show')->where('pictureUrl', '(.*)')->name('picture.path');
Route::view('/{any}', 'welcome')->where('any', '.*');
