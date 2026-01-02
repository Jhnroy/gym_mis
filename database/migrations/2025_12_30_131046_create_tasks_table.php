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
        Schema::create('tasks', function (Blueprint $table) {
            $table->id(); // primary key
            $table->string('title', 255); // title ng task
            $table->text('description')->nullable(); // optional description
            $table->unsignedBigInteger('staff_id'); // foreign key reference sa users table
            $table->enum('status', ['pending', 'in_progress', 'completed'])->default('pending'); // task status
            $table->date('due_date')->nullable(); // optional due date
            $table->timestamps(); // created_at, updated_at

            // Foreign key constraint
            $table->foreign('staff_id')
                  ->references('id')
                  ->on('users')
                  ->onDelete('cascade')
                  ->onUpdate('cascade'); // auto update foreign key if user id changes
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('tasks');
    }
};
