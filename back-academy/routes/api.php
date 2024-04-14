<?php

use App\Http\Controllers\Api\AboutContoller;
use App\Http\Controllers\Api\AuthController;
use App\Http\Controllers\Api\ServiceContoller;
use App\Http\Controllers\Api\UserController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::apiResource('users', UserController::class);
Route::apiResource('abouts', AboutContoller::class);
Route::get('randomShowAbout', [AboutContoller::class, 'randomShow']);

Route::apiResource('services', ServiceContoller::class);
Route::get('randomShowService', [ServiceContoller::class, 'randomShow']);

Route::post('login', [AuthController::class, 'login']);
Route::post('register', [AuthController::class, 'register']);