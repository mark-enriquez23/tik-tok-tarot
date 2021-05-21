<?php

use Illuminate\Database\Seeder;
use App\User;
use App\UserDetail;
use App\FeaturedUser;
use App\UserSecurityQuestion;
use App\Credit;

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
                'firstName' => 'Admin',
                'lastName'  => 'tarot',
                'gender'    => 0,
                'email'     => 'admin@tiktok_tarot.com',
                'password'  => bcrypt('admin2021'),
                'role_id'   => 1,
                'referral_code' => Str::random(6),
                'is_approved' => 'APPROVED',
                'status'   => 'offline',
                'is_verified'   => 1,
            ],
            [
                'username'  => 'reader',
                'firstName' => 'Reader',
                'lastName'  => '1',
                'gender'    => 0,
                'email'     => 'reader@tiktok_tarot.com',
                'password'  => bcrypt('reader2021'),
                'role_id'   => 2,
                'referral_code' => Str::random(6),
                'is_approved' => 'APPROVED',
                'status'   => 'online',
                'is_verified'   => 1,
                'is_hired'   => 1,
            ],
            [
                'username'  => 'reader_two',
                'firstName' => 'Reader',
                'lastName'  => '2',
                'gender'    => 0,
                'email'     => 'reader_two@tiktok_tarot.com',
                'password'  => bcrypt('reader2021'),
                'role_id'   => 2,
                'referral_code' => Str::random(6),
                'is_approved' => 'APPROVED',
                'status'   => 'online',
                'is_verified'   => 1,
                'is_hired'   => 1,
            ],
            [
                'username'  => 'reader_three',
                'firstName' => 'Reader',
                'lastName'  => '3',
                'gender'    => 0,
                'email'     => 'reader_three@tiktok_tarot.com',
                'password'  => bcrypt('reader2021'),
                'role_id'   => 2,
                'referral_code' => Str::random(6),
                'is_approved' => 'PENDING',
                'status'   => 'online',
                'is_verified'   => 1,
                'is_hired'   => 0,
            ],
            [
                'username'  => 'reader_four',
                'firstName' => 'Reader',
                'lastName'  => '4',
                'gender'    => 1,
                'email'     => 'reader_four@tiktok_tarot.com',
                'password'  => bcrypt('reader2021'),
                'role_id'   => 2,
                'referral_code' => Str::random(6),
                'is_approved' => 'PENDING',
                'status'   => 'online',
                'is_verified'   => 1,
                'is_hired'   => 1,
            ],
            [
                'username'  => 'client',
                'firstName' => 'Client',
                'lastName'  => '1',
                'gender'    => 1,
                'email'     => 'client@tiktok_tarot.com',
                'password'  => bcrypt('client2021'),
                'is_approved' => 'APPROVED',
                'role_id'   => 3,
                'status'   => 'online',
                'is_verified'   => 1,
            ],
            [
                'username'  => 'client_twp',
                'firstName' => 'Client',
                'lastName'  => '2',
                'gender'    => 1,
                'email'     => 'client2@tiktok_tarot.com',
                'password'  => bcrypt('client2021'),
                'is_approved' => 'APPROVED',
                'role_id'   => 3,
                'status'   => 'online',
                'is_verified'   => 1,
            ],
            [
                'username'  => 'client_three',
                'firstName' => 'Client',
                'lastName'  => '3',
                'gender'    => 1,
                'email'     => 'client3@tiktok_tarot.com',
                'password'  => bcrypt('client2021'),
                'is_approved' => 'APPROVED',
                'role_id'   => 3,
                'status'   => 'online',
                'is_verified'   => 1,
            ],
            [
                'username'  => 'client_four',
                'firstName' => 'Client',
                'lastName'  => '4',
                'gender'    => 1,
                'email'     => 'client4@tiktok_tarot.com',
                'password'  => bcrypt('client2021'),
                'is_approved' => 'APPROVED',
                'role_id'   => 3,
                'status'   => 'online',
                'is_verified'   => 1,
            ],
            [
                'username'  => 'client_five',
                'firstName' => 'Client',
                'lastName'  => '5',
                'gender'    => 1,
                'email'     => 'client5@tiktok_tarot.com',
                'password'  => bcrypt('client2021'),
                'is_approved' => 'APPROVED',
                'role_id'   => 3,
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

            $userDetail = new UserDetail;
            $userDetail->user_id = $registeredUser->id;
            $userDetail->reader_bio = "Example Bio";
            $userDetail->expertise = "love life";
            $userDetail->address1 = "Sample Address1";
            $userDetail->address2 = "Sample Address2";
            $userDetail->state = "State";
            $userDetail->zip = "country";
            $userDetail->country = "UK";
            $userDetail->birthdate = "12/16/1994";
            $userDetail->profile_photo = "1620364222.jpg";
            $userDetail->save();

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

            // Create Initial Credit
            $credit = Credit::create([
                'user_id'   => $registeredUser->id,
            ]);
        }
    }
}
