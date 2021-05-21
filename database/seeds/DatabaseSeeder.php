<?php

use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        // $this->call(UsersTableSeeder::class);
        $this->call(SecurityQuestionSeeder::class);
        $this->call(AdditionalFooterDetailSeeder::class);
        $this->call(CopyrightSeeder::class);
        $this->call(RefundPolicySeeder::class);
        $this->call(TermsAndConditionSeeder::class);
        $this->call(FooterSeeder::class);
        $this->call(HowToSeeder::class);
        $this->call(FaqSeeder::class);
        $this->call(AboutUsSeeder::class);
        $this->call(ContactUsSeeder::class);
        $this->call(GeneralInformationSeeder::class);
        $this->call(PriceSeeder::class);
        $this->call(RoleSeeder::class);
        $this->call(UserSeeder::class);
        $this->call(VideoSeeder::class);
        $this->call(TestimonialSeeder::class);
        $this->call(FreebieSeeder::class);
        $this->call(UserHistorySeeder::class);
    }
}
