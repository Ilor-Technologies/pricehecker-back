<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateGoodWarehouseInventoriesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('good_warehouse_inventories', function (Blueprint $table) {
            $table->uuid( 'id' )->primary();
            $table->string('good_id');
//            $table->foreign('good_id')->references('id')->on('goods')
//                ->onDelete('no action')->onUpdate('no action');

            //warehouse_id
            $table->integer('stock_quantity');
            $table->integer('reserved_quantity');

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
        Schema::dropIfExists('good_warehouse_inventories');
    }
}
