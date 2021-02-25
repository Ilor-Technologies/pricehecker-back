<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateWarehousesTable extends Migration {
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up() {
        Schema::create('warehouses', function (Blueprint $table) {
            $table->uuid( 'id' )->primary();
            $table->string('name', 250);
            $table->string('address_id')->nullable();
            $table->string('vendor_id')->nullable();

            $table->string('created_by')->nullable();
            $table->string('updated_by')->nullable();
            $table->string('deleted_by')->nullable();
            $table->timestamps();
            $table->softDeletes();

//            //keys
//            $table->index('address_id');
//
//            //$table->foreign('vendor_id')->references('id')->on('users')
//            $table->foreign('vendor_id')->references('id')->on('vendors')
//                ->onDelete('no action')->onUpdate('no action');
//            $table->foreign('address_id')->references('id')->on('addresses')
//                ->onDelete('no action')->onUpdate('no action');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down() {
        Schema::dropIfExists('warehouses');
    }
}
