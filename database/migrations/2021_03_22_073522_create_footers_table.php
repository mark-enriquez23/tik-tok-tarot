<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateFootersTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('footers', function (Blueprint $table) {
            $table->id();
            $table->longText('social_media_links')->nullable();
            $table->bigInteger('terms_and_condition_id')->default(0);
            $table->bigInteger('refund_policy_id')->default(0);
            $table->bigInteger('copyright_id')->default(0);
            $table->string('contact_support')->nullable();
            $table->longText('accredited_icons')->nullable();
            $table->bigInteger('additional_footer_detail_id')->default(0);
            $table->longText('purchased_readings')->nullable();
            $table->longText('metadata')->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('footers');
    }
}
