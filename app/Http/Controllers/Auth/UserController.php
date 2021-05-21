<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\User;
use App\FeaturedUser;
use App\Credit;

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
        $user = $request->user();

        $result = User::getUserWithDetails($user->id);

        return response()->json($result);
    }

    public function getAllNotifications(Request $request){
        $user = $request->user()->notifications;

        return response()->json([
            'success'       => true,
            'notifications' => $user,
            'total_count'   => $user->count()
        ]);
    }

    public function getUnreadNotifications(Request $request){
        $user = $request->user()->unreadNotifications;

        return response()->json([
            'success'       => true,
            'notifications' => $user,
            'unread_count'  => $user->count()
        ]);
    }

    public function markAsReadNotifications(Request $request){
        $user = $request->user()->unreadNotifications->markAsRead();

        return response()->json([
            'success'       => true,
        ]);
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
                __('messages.invalid_username') :
                __('messages.valid_username'),
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
                __('messages.invalid_email') :
                __('messages.valid_email'),
            "data" => $user
        ]);

    }

    public function validatePassword(Request $request)
    {
        // dd($request->password);
        $validatorCustomMessage = array(
            'password.regex' => "Password must contain the following: lowercase letter, capital (uppercase) letter, number, minimum 6 characters"
        );

        $this->validate($request, [
	    	'password' => 'required|min:6|confirmed|regex:/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/',
        ],  $validatorCustomMessage);

        return response()->json([
            'success'   => true
        ]);
    }

    public function userCredit()
    {
        $credits = User::where('role_id', '<>', '1')->with(['credit'])->get();

        return response()->json([
            'success'   => true,
            'data'      => $credits
        ]);
    }

    public function userCreditById($id)
    {
        $credit = Credit::where('id', $id)->with(['user'])->first();

        return response()->json([
            'success'   => true,
            'data'      => $credit
        ]);
    }

    public function refreshInvitationCode($id)
    {
        $user = User::findOrFail($id);

        $user->referral_code = \Str::random(6);
        $user->save;

        return response()->json([
            'success'   => true,
            'data'      => $user
        ]);
    }
}
