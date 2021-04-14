<?php

use Illuminate\Database\Seeder;

use App\UploadReview;

class UploadReviewRatingSeeder extends Seeder
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
                'user_id'   => "3",
                'upload_id' => "1",
                'comment'   => "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam ac libero justo. Suspendisse",
                'rate'      => "3",
            ],
            [
                'user_id'   => "3",
                'upload_id' => "3",
                'comment'   => "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam ac libero justo. Suspendisse",
                'rate'      => "4",
            ],
            [
                'user_id'   => "3",
                'upload_id' => "7",
                'comment'   => "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam ac libero justo. Suspendisse",
                'rate'      => "5",
            ],
            [
                'user_id'   => "3",
                'upload_id' => "6",
                'comment'   => "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam ac libero justo. Suspendisse",
                'rate'      => "5",
            ],
            [
                'user_id'   => "3",
                'upload_id' => "6",
                'comment'   => "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam ac libero justo. Suspendisse",
                'rate'      => "4",
            ],
            [
                'user_id'   => "3",
                'upload_id' => "5",
                'comment'   => "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam ac libero justo. Suspendisse",
                'rate'      => "2",
            ],
            [
                'user_id'   => "3",
                'upload_id' => "4",
                'comment'   => "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam ac libero justo. Suspendisse",
                'rate'      => "4",
            ],
            [
                'user_id'   => "3",
                'upload_id' => "1",
                'comment'   => "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam ac libero justo. Suspendisse",
                'rate'      => "5",
            ],
            [
                'user_id'   => "3",
                'upload_id' => "2",
                'comment'   => "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam ac libero justo. Suspendisse",
                'rate'      => "3",
            ],
            [
                'user_id'   => "3",
                'upload_id' => "2",
                'comment'   => "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam ac libero justo. Suspendisse",
                'rate'      => "3",
            ],
            [
                'user_id'   => "3",
                'upload_id' => "4",
                'comment'   => "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam ac libero justo. Suspendisse",
                'rate'      => "5",
            ],
        ];
        foreach ($datas as $data) {
            $uploadReview = UploadReview::create($data);
        }
    }
}
