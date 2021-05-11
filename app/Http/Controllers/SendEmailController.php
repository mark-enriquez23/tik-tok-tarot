<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\PhoneVerification;
use App\Mail\SendEmail;
use App\User;
use Mail;

class SendEmailController extends Controller
{
    /**
     * Send Email
     *
     * @param  \Illuminate\Http\Request  $request
     * @return json
    * @return \Illuminate\Http\RedirectResponse
     */
    public function sendEmail(Request $request)
    {

        // Generate Random Code
        $uniqid = uniqid();
        $randStart = rand(1,5);
        $generatedCode = substr($uniqid,$randStart,6);

        $phoneVerificationData = [
            "user_id" => $user->id,
            "code" => $generatedCode
        ];

        PhoneVerification::create($phoneVerificationData);

        // Define data that will send to Mailer
        $data = [
            'fullName' => $request->data['firstName'] + ' ' + $request->data['lastName'],
            'userName' => $request->data['userName'],
            'email' => $request->data['email'],
            'phone_number' => $request->phone_number,
            'verification_code' => $generatedCode
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
