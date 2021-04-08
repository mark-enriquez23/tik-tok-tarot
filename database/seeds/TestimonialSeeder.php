<?php

use Illuminate\Database\Seeder;
use App\Testimonial;

class TestimonialSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $datas = [
            [
                "user_id"=> "2",
                "body"=> "lorem ipsum update",
                "rate"=> "5"
            ],
            [
                "user_id"=> "2",
                "body"=> "lorem ipsum update",
                "rate"=> "2"
            ],
            [
                "user_id"=> "3",
                "body"=> "lorem ipsum update",
                "rate"=> "3"
            ],
            [
                "user_id"=> "3",
                "body"=> "lorem ipsum update",
                "rate"=> "10"
            ],
        ];

        foreach ($datas as $data) {
            $testimonial = Testimonial::create($data);
        }
        
    }
}
