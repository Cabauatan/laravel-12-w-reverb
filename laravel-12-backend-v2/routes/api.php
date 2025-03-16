<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;


Route::post('/login',[App\Http\Controllers\Api\Auth\LoginController::class, 'login']);
Route::get('/logout',[App\Http\Controllers\Api\Auth\LoginController::class, 'logout']);
Route::middleware('auth:sanctum')->group(function () {
    Route::group(['prefix' => '/maintenance'], function () {
        // Route::post('/store', [App\Http\Controllers\Api\Maintenance\Group\GroupController::class, 'store']);
        Route::get('/list', [App\Http\Controllers\Api\Maintenance\DepartmentController::class, 'index']);
    });
    // Route::post('/logout', [App\Http\Controllers\Api\Auth\Login\LoginController::class, 'logout']);
});
