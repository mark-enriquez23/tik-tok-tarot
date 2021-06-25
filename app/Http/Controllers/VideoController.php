<?php

namespace App\Http\Controllers;

use App\Notifications\NewVlog;
use App\User;
use App\Video;
use App\UserHistory;
use Illuminate\Http\Request;
use VideoThumbnail;
use FFMpeg\FFMpeg;


class VideoController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $data = Video::with('user')->get();

        return response()->json([
            'success'   => true,
            'total'     => $data->count(),
            'data'      => $data,
        ]);
    }

    public function showByID($id){

        $data = Video::where('id', $id)->with('user')->first();

        return response()->json([
            'success'   => true,
            'data'      => $data,
        ]);
    }

    public function showByUser($uid){

        $data = Video::where('user_id', $uid)->with('user')->get();

        return response()->json([
            'success'   => true,
            'total'     => $data->count(),
            'data'      => $data,
        ]);
    }

    /**
     * Display a listing by STATUS
     */
    public function fetchbyUserStatus($uid, $status){
        $data = Video::where('user_id', $uid)->where('is_approved', $status)->with('user', 'user.userDetails')->get();

        return response()->json([
            'success'   => true,
            'data'      => $data,
        ]);
    }

    /**
     * Display a listing by STATUS
     */
    public function fetchByStatus($status, $featured = null){
        $data = Video::GetAllVideos($status, $featured)->paginate(12);

        return response()->json([
            $data
        ]);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create(Request $request)
    {

        // Validations
        $data = $request->validate([
            'title' => 'required',
            'description' => 'required',
            'file' => 'required|mimes:mp4,mov,ogg,qt'
            ]);

        // Init models
        $user   = $request->user()->id;
        $time = \Carbon\Carbon::now();
        $video  = new Video;

        // Upload file
        $original_file  = $data['file'];
        $basePath       = "/uploads/vlog/";
        $thumbnails     = "/uploads/vlog/thumbnails/";
        // $file           = FileRequest::file('file');

        // final file path
        $fileName = 'VLOG_' . $time->timestamp . '.' . $original_file->getClientOriginalExtension();
        $thumbnailName = 'thumbnail_' . $time->timestamp . '.jpg';

        // Check if dir exists
        if(!file_exists(public_path() . $basePath)) {
            mkdir(public_path() . $basePath, 0777, true);
        }

        if(!file_exists(public_path() . $thumbnails)) {
            mkdir(public_path() . $thumbnails, 0777, true);
        }

        // Save to db first
        $video->user_id         = $user;
        $video->title           = $data['title'];
        $video->description     = $data['description'];
        $video->file_name       = $fileName;
        $video->thumbnail       = $thumbnailName;


        // If details was save
        if($video->save()){
            $users = User::where('role_id', 3)->where('is_active', 1)->get();

            $original_file->move(public_path().$basePath, $fileName);

            VideoThumbnail::createThumbnail(public_path($basePath . $fileName) , public_path($thumbnails), $thumbnailName, 2);

            foreach($users as $user){
                $user->notify(new NewVlog($request->user(), $video));
             }
        }else{
            //return 500 error if did not save
            return response()->json([
                'success' => false,
                'message' => 'Something is wrong with the server...'
            ],500);
        }

        return response()->json([
            'success' => true,
            'data'    => $video
        ]);

    }

    /**
     * Update the specified resource in storage.
     *
     */
    public function update(Request $request)
    {

        // Validations
        $data = $request->validate([
            'id' => 'required',
        ]);
        // Init
        $videoID    = $data['id'];
        $video      = Video::where('id', $videoID)->first();

        // Getting all forms
        $form = $request->except(['file_name']);

        // Fire update
        if($video->update($form)){
            return response()->json([
                'success'   => true,
                'data'      => $video
            ]);
        }else{
            return response()->json([
                'success'   => false,
                'message'   => "something is wrong with the server..."
            ],500);

        }


    }

    /**
     * Remove the specified resource from storage.
     *
     */
    public function destroy($id)
    {
        $video = Video::find($id);

        if($video->delete()){

            $userhistory = UserHistory::where('video_id', $id)->delete();

            return response()->json([
                'success'   => true,
                'message'   => "ID " . $id . " has been deleted."
            ]);
        }else{
            return response()->json([
                'success'   => false,
                'message'   => "something is wrong with the server"
            ], 500);
        }
    }
}
