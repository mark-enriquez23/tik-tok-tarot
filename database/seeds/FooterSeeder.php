<?php

use Illuminate\Database\Seeder;
use App\Footer;

class FooterSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $data = [
            'social_media_links'      => ['facebook.com', 'twitter.com'],
            'terms_and_condition_id'    =>  1,
            'refund_policy_id'    =>  1,
            'copyright_id'    =>  1,
            'contact_support'    =>  'test@support.test',
            'accredited_icons'    =>  ['fa-eye', 'fa-trash'],
            'additional_footer_detail_id'    =>  1,
            'purchased_readings'    =>  ['testOne', 'testTwo'],
        ];
 
        $refund = Footer::create($data);
    }
}
