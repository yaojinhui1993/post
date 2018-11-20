<?php

use App\User;
use Illuminate\Http\Request;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::resource('/post', 'PostController');

Route::get('/login', function () {
    // auth('api')->login($user = User::first());

    // return $user;
    // return auth()->user();
    // Remember forever?
    auth('api')->attempt(['email' => 'john@example.com', 'password' => 'password'], true);
});
Route::get('/logout', function () {
    auth('api')->logout();
});

Route::get('/isLogin', function (Request $request) {
    // return auth('api')->user();
    return auth('api')->user();
});


Route::middleware('auth:api')->get('/user', function (Request $request) {
    // return $request->user();
    return auth()->user();
});
