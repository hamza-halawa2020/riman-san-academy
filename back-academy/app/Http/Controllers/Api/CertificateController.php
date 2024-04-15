<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Requests\StoreCertificateRequest;
use App\Http\Resources\CertificateResource;
use App\Models\Certificate;
use Illuminate\Http\Request;
use Exception;
use Illuminate\Support\Facades\DB;

class CertificateController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        try {
            $certificates = Certificate::paginate(10);
            return CertificateResource::collection($certificates);
        } catch (Exception $e) {
            return response()->json(['error' => $e->getMessage()], 500);

        }
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreCertificateRequest $request)
    {
        try {
            $validatedData = $request->validated();

            if ($request->hasFile('image')) {
                $image = $request->file('image');
                $extension = $image->getClientOriginalExtension();
                $filename = time() . '_' . uniqid() . '.' . $extension;
                $folderPath = 'images/certificates/';
                $image->move(public_path($folderPath), $filename);
                $validatedData['image'] = $filename;
            }
            $certificate = certificate::create($validatedData);
            return response()->json(['data' => new CertificateResource($certificate)], 201);
        } catch (Exception $e) {
            return response()->json(['error' => $e->getMessage()], 500);
        }
    }


public function showBySerialNumber(string $serialNumber)
{
    try {
        $certificate = Certificate::where('serial_number', $serialNumber)->first();
        
        if (!$certificate) {
            return response()->json(['error' => 'Certificate not found'], 404);
        }
        
        return new CertificateResource($certificate);
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
            $certificate = Certificate::findOrFail($id);

            $imagePath = public_path('images/certificates/' . $certificate->image);
            if (file_exists($imagePath)) {
                unlink($imagePath);
            }

            $certificate->delete();

            return response()->json(['data' => 'deleted'], 200);
        } catch (Exception $e) {
            return response()->json(['error' => $e->getMessage()], 500);
        }
    }
}
