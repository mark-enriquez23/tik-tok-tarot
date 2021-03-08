<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Mail\SendEmail;
use Mail;

class SendEmailController extends Controller
{
    
    public function sendEmail(Request $request) {

        // Define data that will send to Mailer
        $data = [
            'fullName' => $request->data['fullName'], 
            'userName' => $request->data['userName'],
            'email' => $request->data['email']
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
