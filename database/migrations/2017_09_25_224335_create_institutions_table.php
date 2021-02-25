<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateInstitutionsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('institutions', function (Blueprint $table) {
            $table->uuid( 'id' )->primary();
            $table->string('code')->nullable()->index();
            $table->string( 'name', 250 );
            $table->string( 'phone', 20 )->nullable();
            $table->string( 'email', 50 )->nullable();
            $table->string('address_id')->nullable();

            $table->string('created_by')->nullable();
            $table->string('updated_by')->nullable();
            $table->string('deleted_by')->nullable();
            $table->timestamps();
            $table->softDeletes();
        });

        //create institutions address table
        Schema::create('address_institution', function (Blueprint $table) {
            $table->string('institution_id')->index();
            $table->string('address_id')->index();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('address_institution');
        Schema::dropIfExists('institutions');
    }
}
