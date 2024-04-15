<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Requests\StoreServiceRequest;
use App\Http\Resources\ServiceResource;
use App\Models\Service;
use Illuminate\Http\Request;
use Exception;
use Illuminate\Support\Facades\DB;

class ServiceContoller extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        try {
            $services = Service::paginate(10);
            return ServiceResource::collection($services);
        } catch (Exception $e) {
            return response()->json(['error' => $e->getMessage()], 500);
        }
    }

    public function randomShow()
    {
        try {
            $services = DB::table('services')->inRandomOrder()->limit(6)->get();
            return response()->json(['data' => $services], 200);
        } catch (Exception $e) {
            return response()->json(['error' => $e->getMessage()], 500);
        }
    }


    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreServiceRequest $request)
    {
        try {
            $validatedData = $request->validated();

            if ($request->hasFile('image')) {
                $image = $request->file('image');
                $extension = $image->getClientOriginalExtension();
                $filename = time() . '_' . uniqid() . '.' . $extension;
                $folderPath = 'images/services/';
                $image->move(public_path($folderPath), $filename);
                $validatedData['image'] = $filename;
            }

            $service = Service::create($validatedData);

            return response()->json(['data' => new ServiceResource($service)], 201);
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
            $service = Service::findOrFail($id);

            $imagePath = public_path('images/services/' . $service->image);
            if (file_exists($imagePath)) {
                unlink($imagePath);
            }

            $service->delete();

            return response()->json(['data' => 'deleted'], 200);
        } catch (Exception $e) {
            return response()->json(['error' => $e->getMessage()], 500);
        }
    }

}
