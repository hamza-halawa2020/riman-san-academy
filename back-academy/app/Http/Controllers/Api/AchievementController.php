<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Requests\StoreAchievementRequest;
use App\Http\Resources\AchievementResource;
use App\Models\Achievement;
use Illuminate\Http\Request;
use Exception;

class AchievementController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        try {
            $achievements = Achievement::paginate(10);
            return AchievementResource::collection($achievements);
        } catch (Exception $e) {
            return response()->json(['error' => $e->getMessage()], 500);

        }
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreAchievementRequest $request)
    {
        try {
            $validatedData = $request->validated();
            $achievement = Achievement::create($validatedData);
            return response()->json(['data' => new AchievementResource($achievement)], 201);
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
            $achievement = Achievement::findOrFail($id);
            $achievement->delete();
            return response()->json(['data' => 'deleted'], 200);
        } catch (Exception $e) {
            return response()->json(['error' => $e->getMessage()], 500);
        }
    }
}

