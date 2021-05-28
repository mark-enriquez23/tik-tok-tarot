<?php

namespace App\Http\Controllers;

use App\UserHistory;
use Illuminate\Http\Request;

class UserHistoryController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $userhistory = UserHistory::orderby('user_id')->with('user')->with('video')->get();

        return response()->json([
            'success'   => true,
            'data'      => $userhistory
        ]);
    }

    public function getByID($id)
    {
        $userhistory = UserHistory::where('user_id', $id)->orderby('created_at', 'asc')->with('user')->with('video')->get();

        return response()->json([
            'success'   => true,
            'data'      => $userhistory
        ]);
    }

    public function getByCurrent(Request $request)
    {
        $userhistory = UserHistory::where('user_id', $request->user()->id)->orderby('created_at', 'asc')->with('user')->with('video')->get();

        return response()->json([
            'success'   => true,
            'data'      => $userhistory
        ]);
    }

    public function create(Request $request){

        $data = $request->validate([
            'video_id' => 'required',
        ]);

        $userID                 = $request->user()->id;
        $userhistory            = new UserHistory;
        $userhistory->user_id   = $userID;
        $userhistory->video_id  = $data['video_id'];

        if($userhistory->save()){
            return response()->json([
                'success' => true,
            ]);
        }else{
            return response()->json([
                'success' => false,
            ]);
        }
    }

    public function delete($id){

        $userhistory = UserHistory::find($id);

        if($userhistory->delete()){
            return response()->json([
                'success' => true,
            ]);
        }else{
            return response()->json([
                'success' => false,
            ]);
        }
    }

    public function deleteAllByUser($id){

        $userhistory = UserHistory::where('user_id', $id)->delete();

        if($userhistory){
            return response()->json([
                'success' => true,
            ]);
        }else{
            return response()->json([
                'success' => false,
            ]);
        }
    }

}
