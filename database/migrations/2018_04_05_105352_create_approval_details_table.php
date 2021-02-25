<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateApprovalDetailsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('approval_details', function (Blueprint $table) {
            $table->uuid( 'id' )->primary();
            $table->string('approval_id')->nullable();
            $table->string('approving_officer_id')->nullable();
            $table->string('status')->default('pending');            
            $table->text('reason')->nullable();            
            $table->integer('approval_order')->nullable();
            $table->text('structure')->nullable();
            
            $table->integer('original')->default(0);

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
        Schema::dropIfExists('approval_details');                                        
    }
}
