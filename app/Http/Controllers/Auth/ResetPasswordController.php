<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use Illuminate\Foundation\Auth\ResetsPasswords;
use Illuminate\Http\Request;
use App\PasswordReset;
use App\User;

class ResetPasswordController extends Controller
{
    use ResetsPasswords;

    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
        $this->middleware('guest');
    }

    /**
     * Get the response for a successful password reset.
     *
     * @param  \Illuminate\Http\Request $request
     * @param  string  $response
     * @return \Illuminate\Http\RedirectResponse
     */
    protected function sendResetResponse(Request $request, $response)
    {
        return ['status' => trans($response)];
    }

    /**
     * Get the response for a failed password reset.
     *
     * @param  \Illuminate\Http\Request $request
     * @param  string  $response
     * @return \Illuminate\Http\RedirectResponse
     */
    protected function sendResetFailedResponse(Request $request, $response)
    {
        return response()->json(['email' => trans($response)], 400);
    }

    public function customResetPassword(Request $request){

        $data = $request->all();

        // check if the two password match
        if ($data['password'] !== $data['password_confirmation']) {
            return response()->json([
                "success" => false,
                "message" => __("reset_password.password_not_match")
            ]);
        }

        $passwordReset = PasswordReset::where('email', $data['email'])->orderBy('created_at', 'desc')->first();

        // check token
        if ($passwordReset->token === $data['token']) {
            $user = User::where('email', $data['email'])->first();
            $user->password = bcrypt($data['password']);
            $user->save();

            return response()->json($user);
        }

        return response()->json([
            "success" => true,
            "message" => __("reset_password.password_has_been_changed")
        ]);

    }
}
