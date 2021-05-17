<?php

namespace App\Http\Controllers\Video;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\LiveHistory;

class fetchChannelsController extends Controller
{
    public function index($status){
        $History = LiveHistory::where('room_status', $status)->get();

        return response()->json([
            'success' => true,
            'data' => $History
        ]);

    }
}
