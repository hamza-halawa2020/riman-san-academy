<?php

use App\Http\Controllers\Api\AboutContoller;
use App\Http\Controllers\Api\AchievementController;
use App\Http\Controllers\Api\AuthController;
use App\Http\Controllers\Api\CarouselController;
use App\Http\Controllers\Api\CertificateController;
use App\Http\Controllers\Api\ContactController;
use App\Http\Controllers\Api\CourseController;
use App\Http\Controllers\Api\CourseVideoController;
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
Route::apiResource('achievements', AchievementController::class);
Route::apiResource('contacts', ContactController::class);
Route::apiResource('courses', CourseController::class);

Route::apiResource('videos', CourseVideoController::class);
Route::get('courses/{course_id}/videos', [CourseVideoController::class, 'showVideosByCourseID']);
http://localhost:8000/api/courses/{course_id}/videos

Route::apiResource('carousels', CarouselController::class);
Route::get('randomShowCarousel', [CarouselController::class, 'randomShow']);

Route::apiResource('certificates', CertificateController::class);
Route::get('certificates-serial/{serialNumber}', [CertificateController::class, 'showBySerialNumber']);
Route::get('certificates-downloadFile/{id}', [CertificateController::class, 'downloadFile']);

Route::apiResource('abouts', AboutContoller::class);
Route::get('randomShowAbout', [AboutContoller::class, 'randomShow']);

Route::apiResource('services', ServiceContoller::class);
Route::get('randomShowService', [ServiceContoller::class, 'randomShow']);

Route::post('login', [AuthController::class, 'login']);
Route::post('register', [AuthController::class, 'register']);