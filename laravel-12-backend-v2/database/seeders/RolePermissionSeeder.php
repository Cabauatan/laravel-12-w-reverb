<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Spatie\Permission\Models\Role;
use Spatie\Permission\Models\Permission;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;

class RolePermissionSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $adminp = [
            'view','update','create','delete',
        ];
        foreach ($adminp as $admin) {
            Permission::create(['name' => $admin]);
        }
        $ticketSadminrole = Role::create(['name' => 'SuperAdmin']);
        $ticketSuserrole = Role::create(['name' => 'User']);
        $ticketSadminrole->syncPermissions($adminp);
        $ticketSuserrole->syncPermissions($adminp);
    }
}
