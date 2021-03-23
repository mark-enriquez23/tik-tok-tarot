<?php

use Illuminate\Database\Seeder;
use App\AdditionalFooterDetail;

class AdditionalFooterDetailSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $data = [
            'title'         => 'Test',
            'phone_number'  =>  '+639xxxxxxxxx',
            'address'       =>  'Test',
         ];
 
         $copyright = AdditionalFooterDetail::create($data);
    }
}
