<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateAllGoodsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up() {
        Schema::create('all_goods', function (Blueprint $table) {
            $table->uuid( 'id' )->primary();
            $table->string('category_id');
            $table->string('name', 450);
            $table->string('short_description', 600)->nullable();
            $table->longText('property_template')->nullable();
            $table->boolean('approval_status')->default(true);
            $table->string('approved_by')->nullable();

            $table->string('created_by')->nullable();
            $table->string('updated_by')->nullable();
            $table->string('deleted_by')->nullable();
            $table->timestamps();
            $table->softDeletes();
    
//            $table->foreign('category_id')->references('id')->on('categories')
//                ->onDelete('no action')->onUpdate('no action');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('all_goods');
    }
}
