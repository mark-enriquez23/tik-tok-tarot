<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Twilio\Rest\Client;
use App\PhoneVerification;
use App\User;

class PhoneVerificationController extends Controller
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
     * Send a message to a selected user
     *
     * @param  \Illuminate\Http\Request  $request
     * @return json
    * @return \Illuminate\Http\RedirectResponse
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
        $phoneVerificationData = [
            "user_id" => $userId,
            "code" => $generatedCode
        ];

        // save data to database
        PhoneVerification::create($phoneVerificationData);

        // return a response
        return response()->json([
            "success" => true,
            "message" => __("Verification Code sent."),
            "sent_message" => $message
        ]);
    }

    /**
     * Verify User 
     *
     * @param  \Illuminate\Http\Request  $request
     * @return json
    * @return \Illuminate\Http\RedirectResponse
     */
    public function verifyUser(Request $request){

        $input = $request->all();
        $fieldType = filter_var($request->email, FILTER_VALIDATE_EMAIL) ? 'email' : 'username';
        $user = User::where([[$fieldType, $input['email']], ['is_verified', '0']])->first();
        $isSuccess = false;
        $message = null;

        if ($user) {
            // not yet verified
            // continue to verify code
            $phoneVerification = PhoneVerification::where([['code', $input['code']],['user_id',$user->id]])->first();
            if ($phoneVerification) {
                // valid code
                // upda user is_verified column to 1
                $user->is_verified = 1;
                $user->save();

                $isSuccess = true;
                $message = __('messages.user_verified');
            }else{
                // invalid code
                $isSuccess = false;
                $message = __('messages.given_code_invalid');
            }
        }else{
            // already verified
            $isSuccess = false;
            $message = __('messages.user_already_verified');
        }

        return response()->json([
            "success" => $isSuccess,
            "message" => $message
        ]);

    }
}
