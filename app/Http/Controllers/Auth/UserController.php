<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\User;

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
            "success" => true,
            "message" => $user ? 
                __('messages.username_validated') : 
                __('messages.username_not_validated'),
            "data" => $user
        ]);
    }
}
