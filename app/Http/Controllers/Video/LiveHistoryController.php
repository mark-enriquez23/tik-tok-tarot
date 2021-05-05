<?php

namespace App\Http\Controllers\Video;

use App\Http\Controllers\Controller;
use App\LiveHistory;
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
        $data = $request->validate([
            'room_name' => 'required',
            'room_sid' => 'required',
            'room_status' => 'required',
        ]);

        $History = new LiveHistory;

        $History->room_name     = $data['room_name'];
        $History->room_sid      = $data['room_sid'];
        $History->room_status   = $data['room_status'];
        $History->save();

        return response()->json([
            'success' => true,
            'data' => $data
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
        $History = LiveHistory::where('room_name', $room)->firstOrFail();

        return response()->json([
            'success' => true,
            'data' => $History
        ]);
    }
}
