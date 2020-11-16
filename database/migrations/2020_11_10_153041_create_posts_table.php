<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreatePostsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('posts', function (Blueprint $table) {
            $table->id();
            $table->timestamps();
            $table->text('uploaded_photo_path')->nullable();
            $table->foreignId('locations_id')->nullable();//dont get in form but add to post.
            $table->foreignId('service_categories_id') ;
            $table->boolean('volunteer')->default(0);//question
            $table->string('cost' , 20 );
            $table->boolean('status_of_post')->default('1');
            $table->text('description', 300);
            $table->foreignId('user_id');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('posts');
    }
}
