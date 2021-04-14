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
                'content'           => "Etiam at tortor arcu. Etiam maximus a mi ac pretium.",
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
                'content'           => "Donec eu ligula et erat elementum convallis sed vitae purus. Vivamus tincidunt neque ut felis pharetra ullamcorper. Maecenas efficitur nibh ac mollis imperdiet.",
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
                'content'           => "Integer molestie orci sit amet hendrerit ornare. Aenean suscipit nulla a tortor laoreet,",
                'thumbnail'         => "test.jpg",
                'src'               => "test.jpg",
                'status'            => "ended",
                'is_active'         => 1,
                'is_featured'       => 1,
                'upload_type_id'    => 2 // vlog
            ],
            [
                'user_id'           => 2,
                'name'              => "Test Vlog 2",
                'content'           => "Donec vulputate ipsum urna, vel laoreet nibh ornare quis",
                'thumbnail'         => "test.jpg",
                'src'               => "test.jpg",
                'status'            => "ended",
                'is_active'         => 1,
                'is_featured'       => 1,
                'upload_type_id'    => 2 // vlog
            ],
            [
                'user_id'           => 2,
                'name'              => "Test Vlog 3",
                'content'           => "Aliquam sed scelerisque nisl. Vivamus ipsum lacus, efficitur ut hendrerit ut, dignissim rutrum nibh.",
                'thumbnail'         => "test.jpg",
                'src'               => "test.jpg",
                'status'            => "ended",
                'is_active'         => 1,
                'is_featured'       => 1,
                'upload_type_id'    => 2 // vlog
            ],
            [
                'user_id'           => 2,
                'name'              => "Test Vlog 4",
                'content'           => "Donec et velit augue. Mauris dictum fringilla ex at pulvinar.",
                'thumbnail'         => "test.jpg",
                'src'               => "test.jpg",
                'status'            => "ended",
                'is_active'         => 1,
                'is_featured'       => 1,
                'upload_type_id'    => 2 // vlog
            ],
            [
                'user_id'           => 2,
                'name'              => "Test Stream/Live 4",
                'content'           => "Convallis sit amet rhoncus quis, euismod posuere lacus. Proin malesuada ullamcorper sem, eget ",
                'thumbnail'         => "test.jpg",
                'src'               => "test.jpg",
                'status'            => "streaming",
                'is_active'         => 1,
                'is_featured'       => 1,
                'upload_type_id'    => 1 // live
            ],
            [
                'user_id'           => 2,
                'name'              => "Test Stream/Live 5",
                'content'           => "sodales. Suspendisse et libero interdum, sagittis nisi vitae, aliquet ex",
                'thumbnail'         => "test.jpg",
                'src'               => "test.jpg",
                'status'            => "streaming",
                'is_active'         => 1,
                'is_featured'       => 1,
                'upload_type_id'    => 1 // live
            ],
        ];
        
        foreach ($datas as $data) {
            $upload = Upload::create($data);
        }
        
    }
}
