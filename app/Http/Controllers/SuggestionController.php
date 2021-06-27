<?php

namespace App\Http\Controllers;

use App\Suggestion;
use App\User;
use App\Video;
use Illuminate\Http\Request;
use \Illuminate\Pagination\LengthAwarePaginator;

class SuggestionController extends Controller
{
    /**
    * Display a listing of the resource.
    *
    */
    public function index()
    {
        $suggestion = Suggestion::all();

        return response()->json([
            'success' => true,
            'data' => $suggestion
        ]);
    }

    /**
     * Display a listing of the resource by ID.
     *
     */
    public function showByID($id)
    {
        $suggestion = Suggestion::where('id', $id)->with('video', 'video.user')->get();

        return response()->json([
            'success' => true,
            'data' => $suggestion
        ]);
    }

    /**
     * Display a listing of the resource by Video ID.
     *
     */
    public function showByVideoID($id)
    {
        $suggestion = Suggestion::where('video_id', $id)->with('video', 'video.user')->get();

        return response()->json([
            'success' => true,
            'data' => $suggestion
        ]);
    }

    /**
     * Display a listing of the resource by User ID.
     *
     */
    public function showByUserID(Request $request, $id)
    {
        $suggestions = Suggestion::with(array('video' => function($query) use ($id) {
            return $query->where('user_id', $id)->with('user')->get();
        }))->get();

        $data = array();

        foreach($suggestions as $suggestion){
            if($suggestion->video !== null){
                array_push($data, $suggestion);
            }
        }

        $paginate = 15;

        $page = $request->page;

        $offSet = ($page * $paginate) - $paginate;

        $itemsForCurrentPage = array_slice($data, $offSet, $paginate, true);

        $result = new LengthAwarePaginator ( $itemsForCurrentPage, count($data), $paginate, LengthAwarePaginator::resolveCurrentPage(),array('path' => LengthAwarePaginator::resolveCurrentPath()));

        return response()->json([
            $result
        ]);
    }

    // public function showByUserID($id){
    //     $suggestions = Video::where('user_id', $id)->with('suggestions')->paginate(5);


    //     return response()->json([
    //         $suggestions,
    //     ]);
    // }


    /**
    * creating resource.
    *
    */
    public function create(Request $request){

        $data = $request->validate([
            'video_id'  => 'required',
            'message'   => 'required'
        ]);

        $suggestion = new Suggestion;

        $suggestion->video_id   = $data['video_id'];
        $suggestion->message    = $data['message'];

        if($suggestion->save()){
            return response()->json([
                'success' => true,
                'message' => 'data has been saved'
            ]);
        }else{
            return response()->json([
                'success' => false,
                'message' => 'error saving data'
            ]);
        }
    }

    /**
    * updating resource.
    *
    */
    public function update(Request $request){

        $data = $request->validate([
            'video_id'  => 'required',
            'message'   => 'required'
        ]);

        $suggestion = Suggestion::where('video_id', $data['video_id'])->first();

        $suggestion->message    = $data['message'];

        if($suggestion->save()){
            return response()->json([
                'success' => true,
                'message' => 'update has been saved'
            ]);
        }else{
            return response()->json([
                'success' => false,
                'message' => 'error updating data'
            ]);
        }
    }

    /**
    * deleting resource.
    *
    */
    public function delete($id){

        $suggestion = Suggestion::where('id', $id)->first();

        if(!$suggestion){
            return response()->json([
                'success' => false,
                'message' => 'something is wrong'
            ],500);
        }

        if($suggestion->delete()){
            return response()->json([
                'success' => true,
                'message' => 'item deleted'
            ]);
        }else{
            return response()->json([
                'success' => false,
                'message' => 'error deleting data'
            ]);
        }
    }


}

