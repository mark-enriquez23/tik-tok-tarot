<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use Illuminate\Foundation\Auth\SendsPasswordResetEmails;
use Illuminate\Http\Request;
use App\UserSecurityQuestion;
use App\User;

class ForgotPasswordController extends Controller
{
    use SendsPasswordResetEmails;

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
     * Get the response for a successful password reset link.
     *
     * @param  \Illuminate\Http\Request $request
     * @param  string  $response
     * @return \Illuminate\Http\RedirectResponse
     */
    protected function sendResetLinkResponse(Request $request, $response)
    {
        return ['status' => trans($response)];
    }

    /**
     * Get the response for a failed password reset link.
     *
     * @param  \Illuminate\Http\Request $request
     * @param  string  $response
     * @return \Illuminate\Http\RedirectResponse
     */
    protected function sendResetLinkFailedResponse(Request $request, $response)
    {
        return response()->json(['email' => trans($response)], 400);
    }

    /**
     * Get the security questions by email
     *
     * @param  \Illuminate\Http\Request $request
     * @param  string  $response
     * @return Object
     */
    public function getUserSecurityQuestion(Request $request){

        $securityQuestion = User::where('email', $request->email)->with(['security_questions'])->first();

        return response()->json([
            "success" => true,
            "data" => $securityQuestion
        ]);

    }

    /**
     * Check the User security question by email and answer
     *
     * @param  \Illuminate\Http\Request $request
     * @param  string  $response
     * @return Object
     */
    public function checkUserSecurityQuestion(Request $request){

        // $questionId = $request->question_id;
        // $answer = $request->answer;

        // $securityQuestion = UserSecurityQuestion::where('id', $questionId)->first();

        // $status = 'not validated';

        // if ($securityQuestion->question === $answer) {
        //     $status = 'alidated';
        // }

        return response()->json([
            "success" => true,
            // "status" => $status
        ]);

    }
}
