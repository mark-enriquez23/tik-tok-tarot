<?php

use Illuminate\Database\Seeder;
use App\UserHistory;

class UserHistorySeeder extends Seeder
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
                'user_id'           => 4,
                'video_id'          => 1,
            ],
            [
                'user_id'           => 4,
                'video_id'          => 2,
            ],
        ];

        foreach($data as $d){
            $history = UserHistory::create($d);
        }
    }
}
