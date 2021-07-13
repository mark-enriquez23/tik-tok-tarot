<?php

use Illuminate\Database\Seeder;
use App\HowTo;

class HowToSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {

        $data = [
            'title'      => 'How to use TikTok-Tarot',
            'content'    =>  'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Duis aute irure dolor in reprehenderit Asperiores dolores sed et. Tenetur quia eos.
            Autem tempore quibusdam vel necessitatibus optio ad corporis.',
            'additional_data' => [
                [
                    'type' => 'step',
                    'icon' => 'receipt',
                    'title' => 'First Step' ,
                    'content' => 'Consequuntur sunt aut quasi enim aliquam quae harum pariatur laboris nisi ut aliquip'
                ],
                [
                    'type' => 'step',
                    'icon' => 'images',
                    'title' => 'Second Step' ,
                    'content' => 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt'
                ],
                [
                    'type' => 'step',
                    'icon' => 'camera-reels-fill',
                    'title' => 'Third Step' ,
                    'content' => 'Aut suscipit aut cum nemo deleniti aut omnis. Doloribus ut maiores omnis facere'
                ],
            ]
         ];

         $howto = HowTo::create($data);
    }
}
