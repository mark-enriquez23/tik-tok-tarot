<?php

use Illuminate\Database\Seeder;
use App\SecurityQuestion;

class SecurityQuestionSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $defaultQuestions = [
            ['question' => "What Is your favorite book?"],
            ['question' => "What is the name of the road you grew up on?"],
            ['question' => "What is your mother’s maiden name?"],
            ['question' => "What was the name of your first/current/favorite pet?"],
            ['question' => "What was the first company that you worked for?"],
            ['question' => "Where did you meet your spouse?"],
            ['question' => "Where did you go to high school/college?"],
            ['question' => "What is your favorite food?"],
            ['question' => "What city were you born in?"],
            ['question' => "Where is your favorite place to vacation?"],
        ];

        foreach ($defaultQuestions as $question) {
            SecurityQuestion::create($question);
        }
    }
}
