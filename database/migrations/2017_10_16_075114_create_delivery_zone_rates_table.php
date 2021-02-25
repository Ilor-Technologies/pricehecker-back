<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateDeliveryZoneRatesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        //create pivot table for delivery zone rates
        Schema::create('delivery_zone_rates', function (Blueprint $table) {
            $table->uuid( 'id' )->primary();
            $table->string('good_id')->nullable();
            $table->string('zone_id')->nullable();
            $table->decimal('rate', 18, 2);

            $table->string('created_by')->nullable();
            $table->string('updated_by')->nullable();
            $table->string('deleted_by')->nullable();
            $table->timestamps();
            $table->softDeletes();

            //keys
//            $table->foreign('good_id')->references('id')->on('goods');
//            $table->foreign('zone_id')->references('id')->on('delivery_zones');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('delivery_zone_rates');
    }
}
