<?php

use Illuminate\Database\Seeder;
use App\Upload;

class UploadSeeder extends Seeder
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
                'user_id'           => 2,
                'name'              => "Test Stream/Live 1",
                'content'           => "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam ac libero justo. Suspendisse",
                'thumbnail'         => "test.jpg",
                'src'               => "test.jpg",
                'status'            => "streaming",
                'is_active'         => 1,
                'is_featured'       => 1,
                'upload_type_id'    => 1 // live
            ],
            [
                'user_id'           => 2,
                'name'              => "Test Stream/Live 2",
                'content'           => "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam ac libero justo. Suspendisse",
                'thumbnail'         => "test.jpg",
                'src'               => "test.jpg",
                'status'            => "streaming",
                'is_active'         => 1,
                'is_featured'       => 1,
                'upload_type_id'    => 1 // live
            ],
            [
                'user_id'           => 2,
                'name'              => "Test Stream/Live 3",
                'content'           => "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam ac libero justo. Suspendisse",
                'thumbnail'         => "test.jpg",
                'src'               => "test.jpg",
                'status'            => "streaming",
                'is_active'         => 1,
                'is_featured'       => 1,
                'upload_type_id'    => 1 // live
            ],
            [
                'user_id'           => 2,
                'name'              => "Test Vlog 1",
                'content'           => "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam ac libero justo. Suspendisse",
                'thumbnail'         => "test.jpg",
                'src'               => "test.jpg",
                'status'            => "ended",
                'is_active'         => 1,
                'is_featured'       => 1,
                'upload_type_id'    => 2 // live
            ],
            [
                'user_id'           => 2,
                'name'              => "Test Vlog 2",
                'content'           => "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam ac libero justo. Suspendisse",
                'thumbnail'         => "test.jpg",
                'src'               => "test.jpg",
                'status'            => "ended",
                'is_active'         => 1,
                'is_featured'       => 1,
                'upload_type_id'    => 2 // live
            ],
        ];
        foreach ($datas as $data) {
            $upload = Upload::create($data);
        }
        
    }
}
