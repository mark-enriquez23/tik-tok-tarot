<?php

use Illuminate\Database\Seeder;
use App\AboutUs;

class AboutUsSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $data = [
            'title'      => 'Who are we?',
            'banner_image' => 'ttk-banner.jpg',
            'sub_title'    =>  'Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                                quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
            'content'    =>  [
                "team" => [
                    'title' => 'Meet our team',
                    'subtitle' => 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
                    'items' => [
                        [
                            'type' => 'management',
                            "data" => [
                                [
                                    'name' => "John Doe",
                                    'image' => 'testimonials-1.jpg',
                                    'position' => 'CEO - FOUNDER'
                                ],
                                [
                                    'name' => "John Doe",
                                    'image' => 'testimonials-2.jpg',
                                    'position' => 'CEO - FOUNDER'
                                ],
                                [
                                    'name' => "John Doe",
                                    'image' => 'testimonials-3.jpg',
                                    'position' => 'CEO - FOUNDER'
                                ],
                                [
                                    'name' => "John Doe",
                                    'image' => 'testimonials-4.jpg',
                                    'position' => 'CEO - FOUNDER'
                                ],
                            ]
                        ],
                        [
                            'type' => 'developers',
                            "data" => [
                                [
                                    'name' => "John Doe",
                                    'image' => 'testimonials-4.jpg',
                                    'position' => 'Frontend Developer'
                                ],
                                [
                                    'name' => "John Doe",
                                    'image' => 'testimonials-2.jpg',
                                    'position' => 'Backend Developer'
                                ],
                                [
                                    'name' => "John Doe",
                                    'image' => 'testimonials-3.jpg',
                                    'position' => 'Lead Developer'
                                ],
                            ]
                        ],
                        [
                            'type' => 'marketing',
                            "data" => [
                                [
                                    'name' => "John Doe",
                                    'image' => 'testimonials-1.jpg',
                                    'position' => 'Marketing 1'
                                ],
                                [
                                    'name' => "John Doe",
                                    'image' => 'testimonials-3.jpg',
                                    'position' => 'Marketing 1'
                                ],
                            ]
                        ],
                    ]

                ],
                'additional_data' => [
                    [
                        'title' => 'Lorem ipsum dolor sit amet',
                        'icon' => 'chart-bar',
                        'image' => 'tttk-image1.jpg',
                        'description' => 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. '
                    ],
                    [
                        'title' => 'Lorem ipsum dolor sit amet',
                        'icon' => 'leaf',
                        'image' => 'tttk-image2.jpg',
                        'description' => 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. '
                    ],
                    [
                        'title' => 'Lorem ipsum dolor sit amet',
                        'icon' => 'house-user',
                        'image' => 'tttk-image3.jpg',
                        'description' => 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. '
                    ]
                ]
            ]
        ];

        $aboutus = AboutUs::create($data);
    }
}
