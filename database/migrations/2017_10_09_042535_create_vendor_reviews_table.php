<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateVendorReviewsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('vendor_reviews', function (Blueprint $table) {
            $table->uuid( 'id' )->primary();

            $table->string('user_id');
//            $table->foreign('user_id')->references('id')->on('users')
//                ->onDelete('no action')->onUpdate('no action');
            $table->string('vendor_id');
            /* $table->foreign('vendor_id')->references('id')->on('vendors')
                ->onDelete('no action')->onUpdate('no action'); */

            $table->tinyInteger('is_approved')->default(0);
            $table->string('title', 350)->nullable();
            $table->text('review_text')->nullable();
            $table->integer('rating');
            $table->integer('helpful_yes_total')->nullable();
            $table->integer('helpful_no_total')->nullable();
            $table->text('reply_text')->nullable();

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
        Schema::dropIfExists('vendor_reviews');
    }
}
