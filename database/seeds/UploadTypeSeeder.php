<?php

use Illuminate\Database\Seeder;
use App\UploadType;

class UploadTypeSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $data = [
            [
                'name'      => 'live',
            ],
            [
                'name'      => 'vlog',
            ]
        ];
 
        $uploadType = UploadType::create($data);
    }
}
