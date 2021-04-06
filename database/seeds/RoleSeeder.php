<?php

use Illuminate\Database\Seeder;
use App\Role;

class RoleSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $data = [
            [
                'name'      => 'admin',
                'description'    =>  'Admin',
            ],
            [
                'name'      => 'reader',
                'description'    =>  'Reader',
            ],
            [
                'name'      => 'client',
                'description'    =>  'Client',
            ],
         ];

         foreach ($data as $d) {
            $role = Role::create($d);
         }
    }
}
