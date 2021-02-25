<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateCategoriesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('categories', function (Blueprint $table) {
            $table->uuid( 'id' )->primary();
            $table->string("name", 1000);
            $table->text("description")->nullable();
            $table->string("meta_keyword", 450)->nullable();
            $table->text("meta_description")->nullable();
            $table->string("parent_id")->nullable();
            $table->string("picture_id")->nullable();
            $table->tinyInteger("is_published")->default(1);
            $table->tinyInteger("is_deleted")->default(0);
            $table->unsignedInteger("display_order")->default(1);
            $table->longText('property')->nullable();

            $table->string('created_by')->nullable();
            $table->string('updated_by')->nullable();
            $table->string('deleted_by')->nullable();
            $table->timestamps();
            $table->softDeletes();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('categories');
    }
}
