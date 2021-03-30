<?php

use Illuminate\Database\Seeder;
use App\GeneralInformation;

class GeneralInformationSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {

        $data = [
            'title'      => 'LOREM IPSUM DOLOR SIT AMET',
            'banner_image' => 'ttk-banner.jpg',
            'sub_title'    =>  'Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
            'content'    =>  [
                'description' => 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
                'features' => [
                    'Consectetur adipiscing elit, sed do eiusmod tempor incididunt',
                    'Duis aute irure dolor in reprehenderit in voluptate velit',
                    'Ullamco laboris nisi ut aliquip ex ea commodo consequat.'
                ],
                'additional_data' => 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
            ]
        ];

        $genInfo = GeneralInformation::create($data);
    }
}
