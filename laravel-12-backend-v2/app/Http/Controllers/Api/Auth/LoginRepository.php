<?php

namespace App\Http\Controllers\Api\Auth;

use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Cache;
use Laravel\Sanctum\PersonalAccessToken;

class LoginRepository
{
    public function login($input)
    {
        $account = Auth::attempt(['email' => $input['email'], 'password' => $input['password']])|| Auth::attempt(['account_number' => $input['email'], 'password' => $input['password']]);
        if ($account) {
            $user = Auth::user();
            Cache::forever('user_account', $user->account_number);
            Cache::forever('user_id', $user->id);

            $user->tokens()->where('name',$user->account_number)->delete();
            DB::statement('EXEC checkFirstLogIn @id = ?',[(int)$user->id]);
            Auth::logoutOtherDevices($input['password']);
            return [
                'name' =>  $user->name,
                'email' =>  $user->email,
                'token' => $user->createToken($user->account_number)->plainTextToken,
                'roles' => $user->roles->pluck('name')->toArray(),
                'permission' => $user->getAllPermissions()->pluck('name')->toArray(),
                // 'history' => DB::select('SET NOCOUNT ON; EXEC authLogin @id = ?',[$user->id])
            ];
        }
    }

    public function logout()
    {
        DB::statement('EXEC logoutUser @id = ?',[(int)Cache::get('user_id')]);
        PersonalAccessToken::where('name',Cache::get('user_account'))->delete();
        Cache::flush();

        return env('SESSION_LIFETIME');
    }
}
