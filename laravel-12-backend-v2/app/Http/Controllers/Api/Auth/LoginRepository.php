<?php

namespace App\Http\Controllers\Api\Auth;

use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Auth;

class LoginRepository
{
    public function login($input)
    {

        if (Auth::attempt(['email' => $input['email'], 'password' => $input['password']])) {
            $user = Auth::user();
            DB::statement('EXEC checkFirstLogIn @id = ?',[(int)$user->id]);
            Auth::logoutOtherDevices($input['password']);
            return [
                'name' =>  $user->name,
                'email' =>  $user->email,
                'token' => $user->createToken('ApiToken')->plainTextToken,
                'roles' => $user->roles->pluck('name')->toArray(),
                'permission' => $user->getAllPermissions()->pluck('name')->toArray(),
                // 'history' => DB::select('SET NOCOUNT ON; EXEC authLogin @id = ?',[$user->id])
            ];
        }
    }
}
