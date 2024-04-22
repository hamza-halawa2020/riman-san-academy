<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Requests\StoreCourseVideoRequest;
use App\Http\Resources\CourseVideoResource;
use App\Models\CourseVideo;
use Exception;
use Illuminate\Http\Request;

class CourseVideoController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        try {
            $vidoes = CourseVideo::with('course')->get();
            return CourseVideoResource::collection($vidoes);
        } catch (Exception $e) {
            return response()->json(['error' => $e->getMessage()], 500);
        }
    }



    public function showVideosByCourseID($courseId)
    {
        try {
            $videos = CourseVideo::with('course')
                ->where('course_id', $courseId)
                ->get();

            return CourseVideoResource::collection($videos);
        } catch (Exception $e) {
            return response()->json(['error' => $e->getMessage()], 500);
        }
    }








    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreCourseVideoRequest $request)
    {
        try {
            $validatedData = $request->validated();
            if ($request->hasFile('video')) {
                $video = $request->file('video');
                $extension = $video->getClientOriginalExtension();
                $filename = time() . '_' . uniqid() . '.' . $extension;
                $folderPath = 'videos/courses/' . $validatedData['course_id'];

                $video->move(public_path($folderPath), $filename);
                $validatedData['video'] = $filename;
            }
            $video = CourseVideo::create($validatedData);
            return new CourseVideoResource($video);
        } catch (Exception $e) {
            return response()->json(['error' => $e->getMessage()], 500);
        }
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        //
    }
}
