<?php

use Illuminate\Foundation\Inspiring;
use Illuminate\Support\Facades\Artisan;
use Illuminate\Support\Facades\Schedule;
use Illuminate\Foundation\Console\ClosureCommand;

Artisan::command('inspire', function () {
    /** @var ClosureCommand $this */
    $this->comment(Inspiring::quote());
})->purpose('Display an inspiring quote');


Schedule::call('App\Http\Controllers\Api\Auth\LoginController@logout')->dailyAt('07:00')->timezone('Asia/Manila');
Schedule::call('App\Http\Controllers\Api\Auth\LoginController@logout')->dailyAt('19:00')->timezone('Asia/Manila');
// Schedule::call('App\Http\Controllers\Api\Auth\LoginController@logout')->dailyAt('07:00')->timezone('Asia/Manila');

