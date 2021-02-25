<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateMessageTemplateTables extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('message_templates', function (Blueprint $table) {
            $table->uuid( 'id' )->primary();
            $table->string('slug');
            $table->string('description');
            $table->string('subject');
            $table->text('template');

            $table->string('created_by')->nullable();
            $table->string('updated_by')->nullable();
            $table->string('deleted_by')->nullable();
            $table->timestamps();
            $table->softDeletes();
        });

        Schema::create(
            'variables', function (Blueprint $table) {
            $table->uuid( 'id' )->primary();
            $table->string('name');
            $table->string('description');

            $table->string('created_by')->nullable();
            $table->string('updated_by')->nullable();
            $table->string('deleted_by')->nullable();
            $table->timestamps();
            $table->softDeletes();
        });

        Schema::create('message_template_variable', function (Blueprint $table) {
            $table->string('message_template_id');
            $table->string('variable_id');
//
//            $table->foreign('message_template_id')
//                ->references('id')
//                ->on('message_templates')
//                ->onUpdate('no action')
//                ->onDelete('no action');

//            $table->foreign('variable_id')
//                ->references('id')
//                ->on('variables')
//                ->onUpdate('no action')
//                ->onDelete('no action');

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
        Schema::drop('message_template_variable');
        Schema::drop('message_templates');
        Schema::drop('variables');
    }
}
