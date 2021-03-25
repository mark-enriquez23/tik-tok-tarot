<?php

use Illuminate\Database\Seeder;
use App\Faq;

class FaqSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {

        $data = [
            'subtitle'      => 'Magnam dolores commodi suscipit uisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.',
            'categories' => [
                [
                    'type' => 'reader',
                    'title' => 'Reader',
                    'icon' => 'book',
                    'items' => [
                            [
                                'question' => 'Lorem ipsum dolor sit amet?',
                                'answer' => 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
                            ],
                            [
                                'question' => 'Duis aute irure dolor in ?',
                                'answer' => 'Duis aute irure dolor in reprehenderit Asperiores dolores sed et. Tenetur quia eos. Autem tempore quibusdam vel necessitatibus optio ad corporis.',
                            ],
                            [
                                'question' => 'Consequuntur sunt aut?',
                                'answer' => 'Consequuntur sunt aut quasi enim aliquam quae harum pariatur laboris nisi ut aliquip',
                            ],
                            [
                                'question' => 'Tenetur quia eos?',
                                'answer' => 'Duis aute irure dolor in reprehenderit Asperiores dolores sed et. Tenetur quia eos. Autem tempore quibusdam vel necessitatibus optio ad corporis.',
                            ],
                            [
                                'question' => 'Corporis voluptates sit?',
                                'answer' => 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
                            ],
                        ]
                    ],
                    [
                        'type' => 'account',
                        'title' => 'Account',
                        'icon' => 'user',
                        'items' => [
                            [
                                'question' => 'Lorem ipsum dolor sit amet?',
                                'answer' => 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
                            ],
                            [
                                'question' => 'Duis aute irure dolor in ?',
                                'answer' => 'Duis aute irure dolor in reprehenderit Asperiores dolores sed et. Tenetur quia eos. Autem tempore quibusdam vel necessitatibus optio ad corporis.',
                            ],
                            [
                                'question' => 'Consequuntur sunt aut?',
                                'answer' => 'Consequuntur sunt aut quasi enim aliquam quae harum pariatur laboris nisi ut aliquip',
                            ],
                        ]
                    ],
                    [
                        'type' => 'client',
                        'title' => 'Client',
                        'icon' => 'user-tie',
                        'items' => [
                            [
                                'question' => 'Lorem ipsum dolor sit amet?',
                                'answer' => 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
                            ],
                            [
                                'question' => 'Duis aute irure dolor in ?',
                                'answer' => 'Duis aute irure dolor in reprehenderit Asperiores dolores sed et. Tenetur quia eos. Autem tempore quibusdam vel necessitatibus optio ad corporis.',
                            ],
                            [
                                'question' => 'Consequuntur sunt aut?',
                                'answer' => 'Consequuntur sunt aut quasi enim aliquam quae harum pariatur laboris nisi ut aliquip',
                            ],
                            [
                                'question' => 'Corporis voluptates sit?',
                                'answer' => 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
                            ],
                        ]
                    ]
            ]
         ];

         $howto = Faq::create($data);
    }
}
