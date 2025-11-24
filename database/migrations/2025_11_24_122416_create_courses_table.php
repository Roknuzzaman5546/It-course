<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration {
    /**
     * Run the migrations.
     */
    public function up()
    {
        Schema::create('courses', function (Blueprint $table) {
            $table->id();
            $table->foreignId('teacher_id')->constrained('users')->onDelete('cascade');
            $table->string('title');
            $table->string('slug')->unique();
            $table->text('description')->nullable();
            $table->decimal('price', 10, 2)->default(0);
            $table->string('currency', 10)->default('BDT');
            $table->enum('status', ['draft', 'published', 'blocked'])->default('draft');
            $table->foreignId('category_id')->nullable()->constrained()->nullOnDelete();
            $table->string('thumbnail')->nullable();
            $table->string('level')->nullable(); // Beginner, Intermediate, Advanced
            $table->string('duration')->nullable(); // 5h 30m etc
            $table->string('totalEnrolment')->nullable(); // 5h 30m etc
            $table->timestamps();
        });
    }
    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('courses');
    }
};
