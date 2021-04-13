<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\User;
use App\FeaturedUser;

class UserController extends Controller
{
    /**
     * Get authenticated user.
     *
     * @param  \Illuminate\Http\Request $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function current(Request $request)
    {
        return response()->json($request->user());
    }

    /**
     * Validate username.
     *
     * @param  \Illuminate\Http\Request $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function validateUserName(Request $request)
    {
        $user = User::where('username', $request->username)->first();

        return response()->json([
            "success" => $user ? true : false,
            "message" => $user ? 
                __('messages.username_validated') : 
                __('messages.username_not_validated'),
            "data" => $user
        ]);
    }

    /**
     * Validate the requested email.
     *
     * @param  \Illuminate\Http\Request $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function validateEmail(Request $request)
    {
        $user = User::where('email', $request->email)->first();

        return response()->json([
            "success" => $user ? true : false,
            "message" => $user ? 
                __('messages.email_found') : 
                __('messages.email_not_found'),
            "data" => $user
        ]);

    }

    public function fetchReaders(){
        $user = User::where('role_id', '2')->get();

        return response()->json([
            "success" => $user ? true : false,
            "data" => $user
        ]);
    }

    public function fetchFeaturedReaders(){
        $user = FeaturedUser::with(['user'])->get();

        return response()->json([
            "success" => $user ? true : false,
            "data" => $user
        ]);
    }
}
