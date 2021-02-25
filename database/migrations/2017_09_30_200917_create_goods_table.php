<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateGoodsTable extends Migration {
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up() {
        Schema::create('goods', function (Blueprint $table) {
            $table->uuid( 'id' )->primary();
            $table->string('all_good_id');
            $table->text('full_description')->nullable();
            $table->string('vendor_id')->nullable();
            $table->decimal('price', 18, 2)->nullable();
            $table->string('sku', 450)->nullable();
            $table->string('warehouse_id')->nullable();
            $table->longText('property')->nullable();
            $table->text('details')->nullable();
            $table->text('price_change')->nullable();
            $table->string('created_by')->nullable();
            $table->string('updated_by')->nullable();
            $table->bigInteger('times_in_search')->default(0);//search_count
            $table->bigInteger('times_in_survey')->default(0);//view_count
            $table->timestamps();
            $table->softDeletes();
        });

        //create pivot table for pictures
        Schema::create('good_picture', function (Blueprint $table) {
            $table->string('good_id');
            $table->string('picture_id');

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
        Schema::dropIfExists('good_picture');
        Schema::dropIfExists('goods');
    }
}
