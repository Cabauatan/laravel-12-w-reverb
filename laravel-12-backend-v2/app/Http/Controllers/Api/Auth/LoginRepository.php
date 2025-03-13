<?php

namespace App\Http\Controllers\Api\Auth;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;

class LoginRepository
{
    public function login($input)
    {

        if (Auth::attempt(['email' => $input['email'], 'password' => $input['password']])) {
            $user = Auth::user();

            // $firstLogin = count(DB::select('EXEC checkFirstLogIn @id = ?',[$user->id])) <= 0;

            // if($firstLogin)
            // {

            // }

            return [
                'name' =>  $user->name,
                'email' =>  $user->email,
                'token' => $user->createToken('ApiToken')->plainTextToken,
                'roles' => $user->roles->pluck('name')->toArray(),
                'permission' => $user->getAllPermissions()->pluck('name')->toArray(),
                // 'history' => DB::select('SET NOCOUNT ON; EXEC authLogin @id = ?',[$user->id])
            ];
        }

        
        // return DB::connection('sqlsrv2') ->select('SET NOCOUNT ON; EXEC selectUser'); /// ANOTHER DB CONNECTION

        // return DB::select('SET NOCOUNT ON; EXEC selectUser');

        // return User::get();
    }
}
