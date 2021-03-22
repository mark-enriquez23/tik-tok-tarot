<?php

use Illuminate\Database\Seeder;
use App\TermAndCondition;

class TermsAndConditionSeeder extends Seeder
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
            'content'    =>  'ultrices lobortis. Nulla consequat dui ut 
                mi bibendum eleifend. Vestibulum ornare nunc eget ullamcor'
         ];
 
         $termAndCondition = TermAndCondition::create($data);
    }
}
