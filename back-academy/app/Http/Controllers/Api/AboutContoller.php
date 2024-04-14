<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Requests\StoreAboutRequest;
use App\Http\Resources\AboutResource;
use App\Models\About;
use Illuminate\Http\Request;
use Exception;
use Illuminate\Support\Facades\DB;

class AboutContoller extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        try {
            $abouts = About::paginate(10);
            return AboutResource::collection($abouts);
        } catch (Exception $e) {
            return response()->json(['error' => $e->getMessage()], 500);

        }
    }

    public function randomShow()
    {
        try {
            // Retrieve 2 random rows from the 'abouts' table
            $abouts = DB::table('abouts')->inRandomOrder()->limit(2)->get()->map(function ($about) {
                return (array) $about;
            });
            
            // Return the result as a collection of arrays
            return response()->json(['data' => $abouts], 200);
        } catch (Exception $e) {
            return response()->json(['error' => $e->getMessage()], 500);
        }
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreAboutRequest $request)
    {
        try {
            $validatedData = $request->validated();
            $about = About::create($validatedData);
            return response()->json(['data' => new AboutResource($about)], 201);
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
        try {
            $about = About::findOrFail($id);
            $about->delete();
            return response()->json(['data' => 'deleted'], 200);
        } catch (Exception $e) {
            return response()->json(['error' => $e->getMessage()], 500);
        }
    }
}
