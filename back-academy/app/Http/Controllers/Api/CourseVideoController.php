<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Requests\StoreCourseVideoRequest;
use App\Http\Resources\CourseVideoResource;
use App\Models\AccessVideosToUser;
use App\Models\CourseVideo;
use App\Models\Video;
use Exception;
use Illuminate\Http\Request;
use Carbon\Carbon;
use Illuminate\Support\Facades\Auth;

class CourseVideoController extends Controller
{
    /**
     * Display a listing of the resource.
     */

    function __construct()
    {
        $this->middleware("auth:sanctum");
    }
    public function index()
    {
        try {
            $vidoes = CourseVideo::with('course')->with('videos')->get();
            return CourseVideoResource::collection($vidoes);
        } catch (Exception $e) {
            return response()->json(['error' => $e->getMessage()], 500);
        }
    }



    public function showVideosByCourseID($courseId)
    {
        try {
            $userId = Auth::id();

            if ($userId) {
                $videoIds = AccessVideosToUser::where('user_id', $userId)
                    ->pluck('video_id')
                    ->toArray();
                $videos = CourseVideo::with('course')
                    ->with('videos')
                    ->where('course_id', $courseId)
                    ->get();
                return CourseVideoResource::collection($videos);
            } else {
                $videos = CourseVideo::with('course')
                    ->where('course_id', $courseId)
                    ->get();
                return response()->json($videos);
            }
        } catch (Exception $e) {
            return response()->json(['error' => $e->getMessage()], 500);
        }
    }




    // public function store(StoreCourseVideoRequest $request)
    // {
    //     try {
    //         $validatedData = $request->validated();

    //         if ($request->hasFile('video')) {
    //             $video = $request->file('video');

    //             $extension = $video->getClientOriginalExtension();
    //             $filename = time() . '_' . uniqid() . '.' . $extension;

    //             $folderPath = 'videos/courses/' . $validatedData['course_id'];

    //             $video->move(public_path($folderPath), $filename);

    //             $validatedData['video'] = $filename;
    //         }
    //         $data = Video::create(['video' => $filename, 'course_video_id' => 19]);

    //         $video = CourseVideo::create($validatedData);

    //         return new CourseVideoResource(['video' => $video, 'data' => $data]);
    //     } catch (Exception $e) {
    //         return response()->json(['error' => $e->getMessage()], 500);
    //     }
    // }






    public function store(StoreCourseVideoRequest $request)
    {
        try {
            $validatedData = $request->validated();

            if ($request->hasFile('video')) {
                $videoFile = $request->file('video');
                $extension = $videoFile->getClientOriginalExtension();
                $filename = time() . '_' . uniqid() . '.' . $extension;
                $folderPath = 'videos/courses/' . $validatedData['course_id'];

                $videoFile->move(public_path($folderPath), $filename);
                $validatedData['video'] = $filename;
            }

            $courseVideo = CourseVideo::create($validatedData);
            $video = Video::create([
                'video' => $filename,
                'course_video_id' => $courseVideo->id,
            ]);

            $courseVideo->load('videos');

            return new CourseVideoResource($courseVideo);
        } catch (Exception $e) {
            return response()->json(['error' => $e->getMessage()], 500);
        }
    }




    //     public function store(Request $request)
//     {   
//         $validator = \Validator::make($request->all(), [

    //             'title' => 'required',
//             'video' => 'required',
//             'course_id' => 'required',  
//         ]);

    //         if ($validator->fails()) {
//             return response()->json(['status' => false, 'message' => $validator->errors()->first()]);
//         }

    //         $receiver = new FileReceiver('video', $request, HandlerFactory::classFromRequest($request));
//         if ($receiver->isUploaded() === false) {
//             throw new UploadMissingFileException();
//         }
//         $save = $receiver->receive();
//         if ($save->isFinished()) {
//             $response =  $this->saveFile($save->getFile());

    //             File::deleteDirectory(storage_path('app/chunks/'));

    //             //your data insert code

    //             return response()->json([
//                 'status' => true,
//                 'link' => url($response['link']),
//                 'message' => 'File successfully uploaded.'
//             ]);
//         }
//         $handler = $save->handler();
//     }






    // protected function saveFile(UploadedFile $file)
// {
//     $fileName = $this->createFilename($file);
//     $mime = str_replace('/', '-', $file->getMimeType());
//     $filePath = "public/uploads/chunk_uploads/";
//     $file->move(base_path($filePath), $fileName);

    //     return [
//         'link' => $filePath . $fileName,
//         'mime_type' => $mime
//     ];
// }


    // protected function createFilename(UploadedFile $file)
// {
//     $extension = $file->getClientOriginalExtension();
//     $filename =  rand() . time() . "." . $extension;
//     return $filename;
// }





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
