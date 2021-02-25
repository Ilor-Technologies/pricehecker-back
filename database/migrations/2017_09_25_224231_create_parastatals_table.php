<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateParastatalsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('parastatals', function (Blueprint $table) {
            $table->uuid( 'id' )->primary();
            $table->string('code')->nullable()->index();
            $table->string( 'name', 150 );
            $table->string( 'phone', 20 )->nullable();
            $table->string( 'email', 50 )->nullable();
            $table->string('institution_id')->default(0);
            $table->string('address_id')->default(0);

            $table->string('created_by')->nullable();
            $table->string('updated_by')->nullable();
            $table->string('deleted_by')->nullable();
            $table->timestamps();
            $table->softDeletes();
        });

        //create parastatals address table
        Schema::create('address_parastatal', function (Blueprint $table) {
            $table->string('parastatal_id')->index();
            $table->unsignedInteger('address_id')->index();
            $table->timestamp('created_at')->nullable();
            $table->timestamp('updated_at')->nullable();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('address_parastatal');
        Schema::dropIfExists('parastatals');
    }
}
