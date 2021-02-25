<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateInternalUsersTable extends Migration {
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up() {
        Schema::create('internal_users', function (Blueprint $table) {
            $table->uuid( 'id' )->primary();
            $table->string('user_id');
//            $table->foreign('user_id')
//                ->references('id')->on('users')
//                ->onUpdate('no action')
//                ->onDelete('no action');
            $table->string('institution_id');
            $table->string('grade_id');
            $table->string('parastatal_id');
            $table->string('job_title')->nullable();
            $table->string('employed_date')->nullable();
            $table->tinyInteger('is_locked')->default(0);


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
    public function down() {
        Schema::dropIfExists('internal_users');
    }
}
