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
    use Plupload;

    public function store(StoreCourseVideoRequest $request)
    {
        try {
            // Validate the incoming request
            $validatedData = $request->validated();
            
            if ($request->hasFile('video')) {
                // Get the uploaded file
                $video = $request->file('video');
                
                // Generate a unique filename
                $extension = $video->getClientOriginalExtension();
                $filename = time() . '_' . uniqid() . '.' . $extension;
                
                // Define the folder path
                $folderPath = 'videos/courses/' . $validatedData['course_id'];
                
                // Move the uploaded file to the desired location
                $video->move(public_path($folderPath), $filename);
                
                // Update the validated data with the filename
                $validatedData['video'] = $filename;
            }
            
            // Create a new course video record
            $video = CourseVideo::create($validatedData);
            
            // Return a JSON response with the newly created video resource
            return new CourseVideoResource($video);
        } catch (\Exception $e) {
            // Handle exceptions
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
