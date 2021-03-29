<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateFaqsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        // Schema::create('faqs', function (Blueprint $table) {
        //     $table->id();
        //     $table->string('question');
        //     $table->text('answer');
        //     $table->tinyInteger('status')->default(1);
        //     $table->json('metadata')->nullable();
        //     $table->timestamps();
        // });
        Schema::create('faqs', function (Blueprint $table) {
            $table->id();
            $table->string('subtitle');
            $table->longText('categories');
            $table->tinyInteger('status')->default(1);
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
        Schema::dropIfExists('faqs');
    }
}
