<?php

use Illuminate\Database\Seeder;
use App\User;
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
                'is_verified'   => 1,
            ],
            [
                'username'  => 'reader',
                'name'      => 'Reader',
                'email'     => 'reader@tiktok_tarot.com',
                'password'  => bcrypt('reader2021'),
                'role_id'   => 2,
                'is_verified'   => 1,
            ],
            [
                'username'  => 'client',
                'name'      => 'Client',
                'email'     => 'client@tiktok_tarot.com',
                'password'  => bcrypt('client2021'),
                'role_id'   => 3,
                'is_verified'   => 1,
            ]
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

            // saved user security questions
            foreach ($questionData as $qd) {
                $qd['user_id'] = $registeredUser->id;

                $userSecurity = UserSecurityQuestion::create($qd);
            }
        }
    }
}