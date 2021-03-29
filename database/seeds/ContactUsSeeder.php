<?php

use Illuminate\Database\Seeder;
use App\ContactUs;

use function PHPSTORM_META\map;

class ContactUsSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {

        $data = [
            'sub_title'    =>  'Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                                quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
            'email'      => 'test@test.app',
            'phone_number' => '+123456789',
            'location'    =>  [
                'embeded_maps' => 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3506.2233913121413!2d77.4051603706222!3d28.50292593193056!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce626851f7009%3A0x621185133cfd1ad1!2sGeeksforGeeks!5e0!3m2!1sen!2sin!4v1585040658255!5m2!1sen!2sin',
                'address' => [
                    'street' => 'A108 Adam Street',
                    'city' => 'New York',
                    'state' => 'NY',
                    'zip_code' => '535022'
                ]
            ]
        ];

        $contact = ContactUs::create($data);
    }
}
