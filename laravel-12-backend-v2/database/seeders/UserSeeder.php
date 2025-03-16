<?php

namespace Database\Seeders;

use App\Models\User;
use Carbon\Carbon;
use Illuminate\Database\Seeder;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $user = User::factory()->create([
            'name' => 'Marcel Jay M. Cabauatan',
            'account_number' => 'C-625',
            'account_created' => Carbon::now()->timezone('Asia/Manila'),
            'email' => 'marcel.cabauatan@afab.gov.ph',
            'password' => 'password',
        ]);
        $user->assignRole('SuperAdmin');

        $user = User::factory()->create([
            'name' => 'Laurence Radasa',
            'account_number' => 'C-626',
            'account_created' => Carbon::now()->timezone('Asia/Manila'),
            'email' => 'laurence.radasa@afab.gov.ph',
            'password' => 'password',
        ]);
        $user->assignRole('SuperAdmin');
    }
}
