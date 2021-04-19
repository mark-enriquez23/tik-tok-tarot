<?php

use Illuminate\Database\Seeder;
use App\User;
use App\FeaturedUser;
use App\UserSecurityQuestion;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $users = [
            [
                'username'  => 'admin',
                'name'      => 'Admin',
                'email'     => 'admin@tiktok_tarot.com',
                'password'  => bcrypt('admin2021'),
                'role_id'   => 1,
                'status'   => 'offline',
                'is_verified'   => 1,
            ],
            [
                'username'  => 'reader',
                'name'      => 'Reader',
                'email'     => 'reader@tiktok_tarot.com',
                'password'  => bcrypt('reader2021'),
                'role_id'   => 2,
                'status'   => 'online',
                'is_verified'   => 1,
            ],
            [
                'username'  => 'reader_two',
                'name'      => 'Reader Two',
                'email'     => 'reader_two@tiktok_tarot.com',
                'password'  => bcrypt('reader2021'),
                'role_id'   => 2,
                'status'   => 'online',
                'is_verified'   => 1,
            ],
            [
                'username'  => 'reader_three',
                'name'      => 'Reader Three',
                'email'     => 'reader_three@tiktok_tarot.com',
                'password'  => bcrypt('reader2021'),
                'role_id'   => 2,
                'status'   => 'online',
                'is_verified'   => 1,
            ],
            [
                'username'  => 'reader_four',
                'name'      => 'Reader Four',
                'email'     => 'reader_four@tiktok_tarot.com',
                'password'  => bcrypt('reader2021'),
                'role_id'   => 2,
                'status'   => 'online',
                'is_verified'   => 1,
            ],
            [
                'username'  => 'client',
                'name'      => 'Client',
                'email'     => 'client@tiktok_tarot.com',
                'password'  => bcrypt('client2021'),
                'role_id'   => 3,
                'status'   => 'online',
                'is_verified'   => 1,
            ],
            [
                'username'  => 'reader_two',
                'name'      => 'Reader Two',
                'email'     => 'reader_two@tiktok_tarot.com',
                'password'  => bcrypt('reader2021'),
                'role_id'   => 2,
                'status'   => 'online',
                'is_verified'   => 1,
            ],
            [
                'username'  => 'reader_three',
                'name'      => 'Reader Three',
                'email'     => 'reader_three@tiktok_tarot.com',
                'password'  => bcrypt('reader2021'),
                'role_id'   => 2,
                'status'   => 'online',
                'is_verified'   => 1,
            ],
            [
                'username'  => 'reader_four',
                'name'      => 'Reader Four',
                'email'     => 'reader_four@tiktok_tarot.com',
                'password'  => bcrypt('reader2021'),
                'role_id'   => 2,
                'status'   => 'online',
                'is_verified'   => 1,
            ],
        ];

        // Note role index is only an identifier on loop
        $questionData = [
            [
                "question_id"   => 1,
                "answer"        => 'test',
            ],
            [
                "question_id"   => 2,
                "answer"        => 'test',
            ],
            [
                "question_id"   => 3,
                "answer"        => 'test',
            ]
        ];

        // save
        foreach ($users as $user) {
            $registeredUser = User::create($user);

            // save reader as featured
            if ($registeredUser->role_id === 2) {
                $featureData = [
                    'id'        => '',
                    'user_id'   => $registeredUser->id
                ];

                $featuredReader = new FeaturedUser;
                $featuredReader->user_id = $registeredUser->id;
                $featuredReader->save();
            }

            // saved user security questions
            foreach ($questionData as $qd) {
                $qd['user_id'] = $registeredUser->id;

                $userSecurity = UserSecurityQuestion::create($qd);
            }
        }
    }
}
