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
        $datas = [
            [
                'name'      => 'live',
            ],
            [
                'name'      => 'vlog',
            ]
        ];

        foreach ($datas as $data) {
            $uploadType = UploadType::create($data);
        }
    }
}
