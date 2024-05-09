<?php

namespace Database\Seeders;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;

use App\Models\About;
use App\Models\Achievement;
use App\Models\Course;
use App\Models\Service;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        // \App\Models\User::factory(10)->create();

        \App\Models\User::factory()->create([
            'name' => 'hamza',
            'email' => 'hamza@hamza.com',
            'phone' => '01149447078',
            'profile_img' => 'test',
            'gender' => 'male',
            'password' => '123456',
            'role' => 'admin',
        ]);
        About::factory(5)->create();
        Service::factory(5)->create();
        Achievement::factory(5)->create();
        Course::factory(5)->create();
    }
}
