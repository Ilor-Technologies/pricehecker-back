<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreatePriceChangesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up() {
        Schema::create('price_changes', function (Blueprint $table) {
            $table->uuid( 'id' )->primary();
            $table->string('all_good_id');
            $table->string('vendor_id');
            $table->double('price', 20, 2);

            $table->string('created_by')->nullable();
            $table->string('updated_by')->nullable();
            $table->string('deleted_by')->nullable();
            $table->timestamps();
            $table->softDeletes();
            
//            $table->foreign('all_good_id')->references('id')
//                ->on('all_goods')->onDelete('no action')->onUpdate('no action');
//            $table->foreign('vendor_id')->references('id')
//                ->on('vendors')->onDelete('no action')->onUpdate('no action');
        });
    }
    
    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down() {
        Schema::dropIfExists('price_changes');
    }
}
