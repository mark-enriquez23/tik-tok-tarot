<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Viewer;

class ViewerController extends Controller
{
    public function startFromViewing(Request $request)
    {
        $authenticatedUser = auth()->user();

        try {
            // save data to list all viewers of vlog or video
            $data = [
                'user_id'   => $authenticatedUser->id,
                'upload_id' => $request->upload_id
            ];

            $viewer = Viewer::create($data);

            return response()->json([
                'success'   => true,
                'message'   => __('messages.user_leave_from_viewing'),
                'data'      => $viewer
            ]);

        } catch (\Throwable $th) {
            return $th;
        }
        
    }

    public function leaveFromViewing(Request $request)
    {
        $authenticatedUser = auth()->user();

        try {
            // fetch viewer data by upload_id and user_id
            $viewer = Viewer::where([['upload_id', $request->upload_id], ['user_id', $authenticatedUser->id]])->first();

            $viewer->is_viewing = 0;
            $viewer->save();

            return response()->json([
                'success'   => success,
                'message'   => __('messages.user_leave_from_viewing'),
                'data'      => $viewer
            ]);
        } catch (\Throwable $th) {
            return response()->json($th, 400);
        }
        
    }
}
