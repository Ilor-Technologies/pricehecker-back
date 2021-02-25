<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateVendorsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('vendors', function (Blueprint $table) {
            $table->uuid( 'id' )->primary();
            $table->string('user_id');
//            $table->foreign('user_id')
//                ->references('id')->on('users')->onUpdate('no action')->onDelete('no action');
            $table->string('bpp_id')->nullable();
            $table->string('business_name', 350);
            $table->string('rc_number', 20)->unique();
            $table->string('address_id');
            $table->string('tax_identification_number')->unique();
            $table->string( 'email' )->nullable();
            $table->string('website', 250)->nullable();
            $table->text('business_description');

//	        default picture_id for all vendors == 1
            $table->string('picture_id')->nullable();

//	        $table->integer('vendorstatus_id')->unsigned()->default(0);

            $table->text('admin_comment')->nullable();
            $table->string('comment_by')->nullable();
            $table->tinyInteger( 'is_locked' )->default( 0 );


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
        Schema::dropIfExists('vendors');
    }
}
