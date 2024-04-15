<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Requests\StoreCarouselRequest;
use App\Http\Resources\CarouselResource;
use App\Models\Carousel;
use Illuminate\Http\Request;
use Exception;

class CarouselController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        try {
            $carousels = Carousel::paginate(10);
            return CarouselResource::collection($carousels);
        } catch (Exception $e) {
            return response()->json(['error' => $e->getMessage()], 500);
        }
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreCarouselRequest $request)
    {
        try {
            $validatedData = $request->validated();

            if ($request->hasFile('image')) {
                $image = $request->file('image');
                $extension = $image->getClientOriginalExtension();
                $filename = time() . '_' . uniqid() . '.' . $extension;
                $folderPath = 'images/carousels/';
                $image->move(public_path($folderPath), $filename);
                $validatedData['image'] = $filename;
            }

            $carousel = Carousel::create($validatedData);

            return response()->json(['data' => new CarouselResource($carousel)], 201);
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
            $carousel = Carousel::findOrFail($id);

            $imagePath = public_path('images/carousels/' . $carousel->image);
            if (file_exists($imagePath)) {
                unlink($imagePath);
            }

            $carousel->delete();

            return response()->json(['data' => 'deleted'], 200);
        } catch (Exception $e) {
            return response()->json(['error' => $e->getMessage()], 500);
        }
    }
}
