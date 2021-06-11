<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateFreebieTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('freebies', function (Blueprint $table) {
            $table->id();
            $table->string('freebie_name')->unique();
            $table->string('photo');
            $table->longText('description');
            $table->integer('points');
            $table->string('is_active')->default('false');
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
        Schema::dropIfExists('freebies');
    }
}
