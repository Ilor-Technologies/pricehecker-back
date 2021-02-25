<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateUsersTable extends Migration {
	/**
	 * Run the migrations.
	 *
	 * @return void
	 */
	public function up() {
		Schema::create( 'users', function ( Blueprint $table ) {
			$table->uuid( 'id' )->primary();
			$table->string( 'username' )->unique();
			$table->string( 'email' )->unique();
			$table->string( 'password' );
			/* $table->integer('role_id')->unsigned()->default(3);
			$table->foreign('role_id')->references('id')->on('roles')
				->onDelete('no action')->onUpdate('no action'); */
			$table->string( 'first_name' );
			$table->string( 'last_name' );
            $table->string( 'middle_name' )->nullable()->default('');
			$table->string( 'phone' );
			$table->tinyInteger( 'is_active' )->default( 0 );
			$table->tinyInteger( 'is_online' )->default( 0 );
			$table->tinyInteger( 'is_vendor' )->default( 0 );

			//            added this column to existing columns
			$table->string( 'picture_id' )->nullable();

            $table->string('created_by')->nullable();
            $table->string('updated_by')->nullable();
            $table->string('deleted_by')->nullable();
            $table->timestamps();
            $table->softDeletes();

		} );
	}

	/**
	 * Reverse the migrations.
	 *
	 * @return void
	 */
	public function down() {
		/* Schema::table('users', function (Blueprint $table) {
			$table->dropForeign(['role_id']);
		}); */
		Schema::dropIfExists( 'users' );
	}
}
