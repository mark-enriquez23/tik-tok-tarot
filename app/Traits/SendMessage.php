<?php

namespace App\Traits;

use Twilio\Rest\Client;
use App\PhoneVerification;
use App\User;

trait SendMessage {

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
    public function sendCustomMessage($userId, $recipient)
    {
        // Generate Random Code
        $uniqid = uniqid();
        $randStart = rand(1,5);
        $generatedCode = substr($uniqid,$randStart,6);

        // define custom message
        $message = "Your Verification code is " . strtoupper($generatedCode);
        $this->sendMessage($message, $recipient);

        // Save User Code to database
        $phoneVerificationData = [
            "user_id" => $userId,
            "code" => $generatedCode
        ];

        // save data to database
        PhoneVerification::create($phoneVerificationData);

        $response = [
            "success" => true,
            "message" => __("Verification Code sent."),
            "sent_message" => $message
        ];

        // return a response
        return $response;
    }

    public function sendInvitation($recipient)
    {
        // For Reference code
        $uniqid = uniqid();
        $randStart = rand(1,5);
        $generatedCode = substr($uniqid,$randStart,6);

        // Save reference code for user credit
        

        // define custom message
        $message = "Your Verification code is " . strtoupper($generatedCode);
        $this->sendMessage($message, $recipient);

        $response = [
            "success" => true,
            "message" => __("Invitation sent."),
            "sent_message" => $message
        ];

        // return a response
        return $response;
    }
}
