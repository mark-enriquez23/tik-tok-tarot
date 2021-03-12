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
            ['question' => "What Is Father's middle name?"],
            ['question' => "What is your favorite author?"],
            ['question' => "What is your favorite fruit?"],
            ['question' => "What is your mother’s maiden name?"],
            ['question' => "What was the name of your first pet?"],
            ['question' => "What was the first company that you worked for?"],
            ['question' => "What is the name of your favorite actor?"],
            ['question' => "How old is your oldest sibling?"],
        ];

        foreach ($defaultQuestions as $question) {
            SecurityQuestion::create($question);
        }
    }
}
