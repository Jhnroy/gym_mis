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
        Schema::create('payments', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('member_id'); // FK to members
            $table->decimal('amount', 10, 2); // Halaga ng payment
            $table->enum('payment_method', ['cash', 'card', 'gcash', 'bank_transfer'])->default('cash');
            $table->date('payment_date');
            $table->string('reference')->nullable(); // Optional transaction reference
            $table->timestamps();

            // Foreign key constraint
            $table->foreign('member_id')
                  ->references('id')
                  ->on('members')
                  ->onDelete('cascade');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('payments');
    }
};
