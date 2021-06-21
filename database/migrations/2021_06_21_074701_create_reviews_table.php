<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateReviewsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('reviews', function (Blueprint $table) {
            $table->id();
            $table->integer( 'user_id' )->nullable();
            $table->integer( 'vlog_id' );
            $table->integer( 'stars' );
            $table->string( 'name' );
            $table->string( 'email' );
            $table->text( 'message' );
            $table->text( 'avatar' )->nullable();
            $table->json( 'metadata' )->nullable();
            $table->string( 'status' );
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
        Schema::dropIfExists('reviews');
    }
}
