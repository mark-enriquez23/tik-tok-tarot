<?php

namespace App\Http\Controllers\Video;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Twilio\Rest\Client;
use Twilio\Jwt\AccessToken;
use Twilio\Jwt\Grants\VideoGrant;
use Twilio\Jwt\Grants\ChatGrant;

class AccessTokenController extends Controller
{
    public function generate_token($room)
    {
        // return response()->json([
        //     'success' => true,
        //     'message' => $room
        // ]);
        // Substitute your Twilio Account SID and API Key details
        $accountSid = getenv('TWILIO_ACCOUNT_SID');
        $apiKeySid = getenv('TWILIO_API_KEY_SID');
        $apiKeySecret = getenv('TWILIO_API_KEY_SECRET');

        $identity = uniqid();

        // Create an Access Token
        $token = new AccessToken(
            $accountSid,
            $apiKeySid,
            $apiKeySecret,
            3600,
            $identity
        );

        // Grant access to Video
        $grant = new VideoGrant();
        $grant->setRoom($room);
        $token->addGrant($grant);

        // Serialize the token as a JWT
        echo $token->toJWT();
    }

    public function chat_token(Request $request)
    {
        $identity = $request->identity;

        // Substitute your Twilio Account SID and API Key details
        $accountSid = getenv('TWILIO_ACCOUNT_SID');
        $apiKeySid = getenv('TWILIO_API_KEY_SID');
        $apiKeySecret = getenv('TWILIO_API_KEY_SECRET');
        $apiChatService = getenv('TWILIO_CHAT_SERVICE_SECRET');

        // Create an Access Token
        $token = new AccessToken(
            $accountSid,
            $apiKeySid,
            $apiKeySecret,
            3600,
            $identity
        );

        // Grant access to Chat
        $grant = new ChatGrant();
        $grant->setServiceSid($apiChatService);

        $token->addGrant($grant);

        // Serialize the token as a JWT
        echo $token->toJWT();
    }

    public function streamingDone($roomSid){

        $sid = getenv("TWILIO_ACCOUNT_SID");
        $token = getenv("TWILIO_AUTH_TOKEN");
        $twilio = new Client($sid, $token);

        $room = $twilio->video->v1->rooms($roomSid)
                          ->update("completed");

        print($room->uniqueName);

    }

    public function getParticipants($room){

        $sid = getenv("TWILIO_ACCOUNT_SID");
        $token = getenv("TWILIO_AUTH_TOKEN");
        $client = new Client($sid, $token);

        $participants = $client->video->rooms($room)
                ->participants->read(array("status" => "connected"));

        return response()->json([
            'status'    => true,
            'data'      => count($participants) - 1
        ]);
    }
}
