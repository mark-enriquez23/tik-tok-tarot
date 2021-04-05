<?php

use Illuminate\Database\Seeder;
use App\Price;

class PriceSeeder extends Seeder
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
                'sign'      => '$',
                'currency'    =>  '99',
                'cent'    =>  '.50',
                'type'    =>  'Month',
                'feature' => [
                    [
                        'total_card' => '7',
                        'account' => '12',
                        'reading' => '7' ,
                        'support' => '24/7'
                    ]
                ]
            ],
            [
                'sign'      => '$',
                'currency'    =>  '99',
                'cent'    =>  '.50',
                'type'    =>  'Unlimited',
                'feature' => [
                    [
                        'total_card' => '7',
                        'account' => '12',
                        'reading' => '7' ,
                        'support' => '24/7'
                    ]
                ]
            ],
            [
                'sign'      => '$',
                'currency'    =>  '99',
                'cent'    =>  '.50',
                'type'    =>  'Free',
                'feature' => [
                    [
                        'total_card' => '7',
                        'account' => '12',
                        'reading' => '7' ,
                        'support' => '24/7'
                    ]
                ]
            ]

         ];

         foreach ($data as $d) {
            $d['feature'] = json_encode($d['feature']);
            $price = Price::create($d);
         }
         
    }
}
