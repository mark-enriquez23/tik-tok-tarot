<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Twilio\Rest\Client;
use App\UserVerification;

class VerificationCodeController extends Controller
{
    /**
     * Sends sms to user using Twilio's programmable sms client
     * @param String $message Body of sms
     * @param Number $recipients string or array of phone number of recepient
     */
    private function sendMessage($message, $recipients)
    {
        $account_sid = getenv("TWILIO_SID"); // Twilio Secret ID from .env
        $auth_token = getenv("TWILIO_AUTH_TOKEN"); // Twilio Auth Token from .env
        $twilio_number = getenv("TWILIO_NUMBER"); // Twilio Number from .env
        $client = new Client($account_sid, $auth_token);
        $client->messages->create($recipients, 
                ['from' => $twilio_number, 'body' => $message] ); // Send SMS
    }

    /**
     * Send message to a selected users
     */
    public function sendCustomMessage(Request $request)
    {

        // Request fields user_id, recipient
        $validatedData = $request->validate([
            'recipient' => 'required',
        ]);
        
        // Define user_id and recipient from Request
        $userId = $request->userId;
        $recipient = $validatedData["recipient"];

        // Generate Random Code
        $uniqid = uniqid();
        $randStart = rand(1,5);
        $generatedCode = substr($uniqid,$randStart,6);

        // define custom message
        $message = "Your Verification code is " . strtoupper($generatedCode);
        $this->sendMessage($message, $recipient);

        // Save User Code to database
        $userVerificationData = [
            "user_id" => $userId,
            "code" => $generatedCode
        ];

        // save data to database
        UserVerification::create($userVerificationData);

        // return a response
        return response()->json([
            "success" => true,
            "message" => __("Verification Code sent."),
            "sent_message" => $message
        ]);
    }
}
