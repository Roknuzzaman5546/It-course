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
        Schema::create('teacherreqs', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->string('email', 191)->nullable();
            $table->string('phone')->nullable();
            $table->string('photo')->nullable();
            $table->string('experience')->nullable();
            $table->string('title')->nullable();
            $table->string('category')->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('teacherreqs');
    }
};
