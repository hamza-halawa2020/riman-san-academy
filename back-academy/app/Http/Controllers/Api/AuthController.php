<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Requests\LoginRequest;
use App\Http\Requests\StoreUserRequest;
use App\Http\Resources\UserResource;
use App\Models\User;
use Exception;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class AuthController extends Controller
{
    function __construct()
    {
        $this->middleware("limitReq");
        $this->middleware("auth:sanctum")->only('logout');
    }

    public function login(LoginRequest $request)
    {
        try {
            $login = $request->validated();
            if (!Auth::attempt($login)) {
                if (!User::where('email', $login['email'])->exists()) {
                    return response(['message' => 'invalid email'], 401);
                } else if (!User::where('password', $login['password'])->exists()) {
                    return response(['message' => 'invalid password'], 401);
                } else {
                    return response(['message' => 'invalid login'], 401);
                }
            }
            $user = Auth::user();
            $token = $user->createToken($user->phone);

            return response([
                'id' => $user->id,
                'email' => $user->email,
                'role' => $user->role,
                'token' => $token->plainTextToken

            ]);
        } catch (Exception $e) {
            return response()->json(['error' => $e->getMessage()], 500);
        }
    }

    public function adminLogin(LoginRequest $request)
    {
        try {
            $login = $request->validated();
            if (!Auth::attempt($login)) {
                if (!User::where('email', $login['email'])->exists()) {
                    return response(['message' => 'invalid email'], 401);
                } else if (!User::where('password', $login['password'])->exists()) {
                    return response(['message' => 'invalid password'], 401);
                } else {
                    return response(['message' => 'invalid login'], 401);
                }
            }

            $user = Auth::user();
            if ($user->role !== 'admin') {
                return response(['message' => 'You are not authorized to access this resource'], 403);
            }

            $user = Auth::user();
            $token = $user->createToken($user->phone);

            return response([
                'id' => $user->id,
                'email' => $user->email,
                'role' => $user->role,
                'token' => $token->plainTextToken

            ]);
        } catch (Exception $e) {
            return response()->json(['error' => $e->getMessage()], 500);
        }
    }

    public function register(StoreUserRequest $request)
    {
        try {
            $validatedData = $request->validated();
            $user = User::create($validatedData);
            return response()->json(['data' => new UserResource($user)], 201);
        } catch (Exception $e) {
            return response()->json(['error' => $e->getMessage()], 500);
        }

    }


    public function logout()
    {
        try {

            return response()->json(['message' => 'Logged out successfully'], 200);
        } catch (Exception $e) {
            return response()->json(['error' => $e->getMessage()], 500);
        }
    }
}