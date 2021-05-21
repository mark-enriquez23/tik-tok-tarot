<?php

namespace App\Http\Controllers\Video;

use App\Http\Controllers\Controller;
use App\LiveHistory;
use App\Notifications\GoLive;
use App\User;
use Illuminate\Http\Request;

class LiveHistoryController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {

        $users = User::where('role_id', 3)->where('is_active', 1)->get();
        $data = $request->validate([
            'room_name' => 'required',
            'room_sid' => 'required',
            'room_status' => 'required',
        ]);

        $History = LiveHistory::updateOrCreate(
            ['room_name' => $data["room_name"]],
            [
                'room_sid' => $data["room_sid"],
                'room_status' => $data["room_status"]
            ],
        );

        if($data['room_status'] === 'ON_GOING'){
            foreach($users as $user){
               $user->notify(new GoLive($request->user()));
            }
        }


        return response()->json([
            'success' => true,
            'data' => $History
        ]);
    }

    public function update(Request $request)
    {
        $data = $request->validate([
            'room_name' => 'required',
            'room_status' => 'required',
        ]);

        $History = LiveHistory::where("room_name", $data['room_name'])->get();

        $History->room_status   = $data['room_status'];
        $History->save();

        return response()->json([
            'success' => true,
            'data' => $History
        ]);
    }

    public function searchByRoomName($room)
    {

        if(null === $room)
        {
            return response()->json([
                'success' => false,
                'message' => 'missing parameters'
            ]);
        }
        $History = LiveHistory::where('room_name', $room)->where('room_status', 'ON_GOING')->first();
        if(!$History){
            return response()->json([
                'success' => false,
                'message' => 'room not in progress'
            ]);
        }

        return response()->json([
            'success' => true,
            'data' => $History
        ]);
    }
}
