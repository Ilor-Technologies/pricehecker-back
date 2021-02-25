<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateDocumentFormatsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('document_formats', function (Blueprint $table) {
            $table->uuid( 'id' )->primary();
            $table->string("extension")->unique()->nullable();
            $table->string("mime_type")->unique()->nullable();
            $table->string("description")->nullable();
            $table->smallInteger("allowed")->default(0);


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
        Schema::dropIfExists('document_formats');        
        
    }
}
