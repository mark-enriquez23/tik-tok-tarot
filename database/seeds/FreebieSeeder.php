<?php

use Illuminate\Database\Seeder;
use App\Freebie;

class FreebieSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $freebies = [
            [
                'freebie_name'      => 'Bird',
                'photo'             =>  '1620364222.jpg',
                'description'       =>  'This bird is claimable',
                'points'            =>  100,
                'is_active'         =>  0,
            ],
            [
                'freebie_name'      => 'Parrot',
                'photo'             =>  '1620364222.jpg',
                'description'       =>  'This parrot is claimable',
                'points'            =>  300,
                'is_active'         =>  1,
            ],

        ];

        foreach ($freebies as $freebie) {
            Freebie::create($freebie);
        }

    }
}
