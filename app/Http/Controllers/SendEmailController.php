<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Mail\SendEmail;
use App\User;
use Mail;

class SendEmailController extends Controller
{
    
    public function sendEmail(Request $request)
    {

        // get the security question using email
        $user = User::where('email', $request->data['email'])->with(['userSecurityQuestions.security_question'])->first();

        // get security_question
        foreach ($user->userSecurityQuestions as $key => $userSecurityQuestion) {
            $user->userSecurityQuestions[$key]['_security_question'] = $userSecurityQuestion->security_question->question;
        }

        // Define data that will send to Mailer
        $data = [
            'fullName' => $request->data['fullName'], 
            'userName' => $request->data['userName'],
            'email' => $request->data['email'],
            'phone_number' => $user->phone_number,
            'securityQuestions' => $user->userSecurityQuestions
        ];  

        Mail::to($request->email)->send(new SendEmail($data)); // Send an Email

        // return response
        return response()->json([
            "success" => true,
            "message" => __('succuess'),
            "data" => $data
        ]);
    }

}
