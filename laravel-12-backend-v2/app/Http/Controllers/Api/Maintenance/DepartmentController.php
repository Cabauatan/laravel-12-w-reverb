<?php

namespace App\Http\Controllers\Api\Maintenance;

use App\Events\SampleReverbEvent;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use App\Http\Controllers\BaseController;

class DepartmentController extends BaseController
{
    /**
     * Display a listing of the resource.
     */
    public function index(Request $request)
    {
        $userquery = DB::table('getUserRole')->where('roles','=','User')->first();
        broadcast(new SampleReverbEvent($userquery->user_id));
        return $this->sendResponse($userquery->user_id, 'Wrong email and password');

    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        //
    }
}
