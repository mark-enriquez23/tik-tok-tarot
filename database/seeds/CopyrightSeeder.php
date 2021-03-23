<?php

use Illuminate\Database\Seeder;
use App\Copyright;

class CopyrightSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $data = [
           'title'      => 'Test',
           'content'    =>  't amet, consectetur adipiscing elit. 
                Vivamus magna risus, bibendum tempor erat a, 
                aliquet pharetra leo. Duis risus massa,
                posuere vel ex '
        ];

        $copyright = Copyright::create($data);
    }
}
