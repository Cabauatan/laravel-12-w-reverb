<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;


Route::post('/login',[App\Http\Controllers\Api\Auth\LoginController::class, 'login']);
Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:sanctum');
