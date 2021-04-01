<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Request as FileRequest;
use App\User;
use App\Upload;
use App\UploadApproval;
use App\UploadType;

class UploadController extends Controller
{
    // fetch featured uploads
    public function fetchFeaturedUpload($typeName)
    {
        // get upload type
        // $uploadType = UploadType::where('name', $typeName)->first();

        $featuredUpload = Upload::where([['upload_type_id', $uploadType->id], ['is_featured', 1]])->get();

        return response()->json([
            'success' => true,
            'data' => $featuredUpload
        ]);
    }
    // approval tool
    public function approveUpload(Request $request)
    {
        // check if upload is already approved
        $uploadApproval = UploadApproval::where('upload_id', $request->id)->first();

        $message = null;
        $success = false;

        if ($uploadApproval->is_approved) {
            $message = __('messages.upload_already_approved');
        }else{
            // approved the upload
            $uploadApproval->is_approved = 1;
            $uploadApproval->save();

            $success = true;
            $message = __('messages.upload_approved');
        }

        return response()->json([
            'success' => true,
            'message' => $message,
            'data' => $uploadApproval
        ]);
    }

    // save and update upload
    public function save(Request $request)
    {
        
        // url
        $upload = Upload::where('id', $request->id)->first();

        $success = false;
        $message = true;

        if (isset( $upload )) {
            $data = [
                'id'        => $request->id, 
                'src'       => $request->src,
                'thumbnail' => $request->thumbnail,
                'status'    => $request->status
            ];

            $upload->update($data);

            $success = true;
            $message = __('messages.upload_updated');
        }else{
            $data = [
                'id'                => $request->id,
                'user_id'           => $request->user_id,
                'thumbnail'         => $request->thumbnail,
                'src'               => $request->src,
                'upload_type_id'    => $request->upload_type_id
            ];

            $upload = Upload::create($data);

            // create upload_approval data
            $approvelData = [
                'user_id' => $request->user_id,
                'upload_id' => $upload->id,
            ];

            $uploadApproval = UploadApproval::create($approvelData);

            $success = true;
            $message = __('messages.upload_created');
        }

        return response()->json([
            'success'   => $success,
            'message'   => $message,
            'data'      => $upload
        ]);
    }

    public function uploadVideo(Request $request){
        
        if($request->hasFile('file')){

            $user = User::find(auth()->user()->id);

            # Upload file
            $original_file = $request->file('file');
            $basePath = "/uploads/vlog/";
            $file = FileRequest::file('file');

            # final file path
            $fileName = 'VLOG_' . date_format($user->created_at, 'Ymdhis') . '.' . $original_file->getClientOriginalExtension();

            # Check if dir exists
            if(!\file_exists(public_path() . $basePath)) {
                \mkdir(public_path() . $basePath);
            }

            # Save file
            $file->move(public_path().$basePath, $fileName);

            $data = [
                'success' => true,
                'message' =>  __('messages.file_uploaded'),
                'src' => url($basePath.$fileName)
            ];


            return $data;
        }

        return response()->json([
            'success' => false,
            'message' =>  __('messages.no_file')
        ]);
    }

}
