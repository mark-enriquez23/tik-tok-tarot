<?php

use Illuminate\Database\Seeder;
use App\Video;

class VideoSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $data = [
                'user_id'       => '2',
                'title'         =>  'Sample Video Title',
                'description'   =>  'Sample Video Description',
                'file_name'     =>  'VLOG_20210514022339.mp4',
         ];

         $Videos = Video::create($data);
    }
}
