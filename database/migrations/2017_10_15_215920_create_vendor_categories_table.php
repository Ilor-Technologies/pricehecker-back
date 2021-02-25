<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateVendorCategoriesTable extends Migration {
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up() {
        Schema::create('vendor_categories', function (Blueprint $table) {
            $table->uuid( 'id' )->primary();
            $table->string('vendor_id');
//            $table->foreign('vendor_id')
//                ->references('id')->on('vendors')
//                ->onUpdate('no action')
//                ->onDelete('no action');
            $table->string('category_id');
//            $table->foreign('category_id')
//                ->references('id')->on('categories')
//                ->onUpdate('no action')
//                ->onDelete('no action');

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
    public function down() {
        Schema::dropIfExists('vendor_categories');
    }
}
