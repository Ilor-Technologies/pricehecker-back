<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class AddUuidColumnsToChatTables extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('chat_messages', function (Blueprint $table) {
            $table->uuid('signature');
            $table->string('read_list')->default('');
        });

        Schema::table('chat_groups', function (Blueprint $table) {
            $table->uuid('signature');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('chat_messages', function (Blueprint $table) {
            $table->dropColumn('signature');
            $table->dropColumn('read_list');
        });

        Schema::table('chat_groups', function (Blueprint $table) {
            $table->dropColumn('signature');
        });
    }
}
