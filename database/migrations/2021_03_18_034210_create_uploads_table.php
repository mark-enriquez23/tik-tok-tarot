<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateUploadsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('uploads', function (Blueprint $table) {
            $table->id();
            $table->bigInteger('user_id');
            $table->string('thumbnail')->nullable();
            $table->string('src')->nullable();
            $table->bigInteger('upload_type_id');
            $table->longText('content');
            $table->tinyInteger('is_active')->default(0);
            $table->enum('status', ['streaming', 'ended'])->nullable();
            $table->tinyInteger('is_featured')->default(0);
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
        Schema::dropIfExists('uploads');
    }
}
