<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class UserDetails extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('user_details', function (Blueprint $table) {
            $table->id();
            $table->smallInteger('user_id');
            $table->string('reader_bio');
            $table->string('expertise');
            $table->string('address1');
            $table->string('address2')->nullable();
            $table->string('state');
            $table->string('zip');
            $table->string('country');
            $table->string('birthdate');
            $table->string('profile_photo');
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
        Schema::dropIfExists('user_details');
    }
}
