<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('user_attachement', function (Blueprint $table) {
            $table->id();
            $table->string('business_reg')->nullable();
            $table->string('dti_reg')->nullable();
            $table->string('sec_reg')->nullable();
            $table->string('cda_reg')->nullable();
            $table->string('mayors_permit')->nullable();
            $table->string('contract')->nullable();
            $table->unsignedBigInteger('user_id');
            $table->foreign('user_id')->references('id')->on('users');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('user_attachement');
    }
};
