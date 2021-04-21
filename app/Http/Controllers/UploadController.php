<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Request as FileRequest;
use App\User;
use App\Upload;
use App\UploadApproval;
use App\UploadType;
use App\UploadReview;

class UploadController extends Controller
{
    // fetch featured uploads
    public function fetchFeaturedVlogs()
    {
        // get upload type
        $uploadType = UploadType::where('name', 'vlog')->first();

        $featuredUpload = Upload::where([['upload_type_id', $uploadType->id], ['is_featured', 1]])->get();

        foreach ($featuredUpload as $key => $lu) {
            // get upload/vlog review
            // dd($lu);
            $review = UploadReview::where('upload_id', $lu->id)->get();
            
            if (count($review) > 0) {
                $totalRate = 0;

                foreach ($review as $r) {
                    $totalRate = $totalRate + $r->rate;
                }

                $totalAverage = $totalRate / count($review);

                $featuredUpload[$key]['review'] = $review;
                $featuredUpload[$key]['rate'] = floor($totalAverage);
            }else{
                $featuredUpload[$key]['review'] = $review;
                $featuredUpload[$key]['rate'] = 1;
            }
            
            
        }

        return response()->json([
            'success' => true,
            'data' => $featuredUpload
        ]);
    }

    // fetch latest uploads/vlogs/live
    public function fetchLatestVlog()
    {
        // get upload type
        $uploadType = UploadType::where('name', 'vlog')->first();

        $latestUpload = Upload::where('upload_type_id', $uploadType->id)
            ->orderBy('id', 'desc')
            ->limit(7)  
            ->get();

        return response()->json([
            'success' => true,
            'data' => $latestUpload
        ]);
    }

    // fetch all uploads/vlogs with ratings
    public function fetchAllVlogs()
    {
        // get upload type
        $uploadType = UploadType::where('name', 'vlog')->first();

        $latestUpload = Upload::where('upload_type_id', $uploadType->id)
            ->orderBy('id', 'desc')
            ->get();

        foreach ($latestUpload as $key => $lu) {
            // get upload/vlog review
            $review = UploadReview::where('upload_id', $lu->id)->get();
            
            if (count($review) > 0) {
                $totalRate = 0;

                foreach ($review as $r) {
                    $totalRate = $totalRate + $r->rate;
                }

                $totalAverage = $totalRate / count($review);
                $latestUpload[$key]['review'] = $review;
                $latestUpload[$key]['rate'] = floor($totalAverage);
            }else{
                $latestUpload[$key]['review'] = $review;
                $latestUpload[$key]['rate'] = 1;
            }
            
            
        }

        return response()->json([
            'success' => true,
            'data' => $latestUpload
        ]);
    }

    // approval tool
    public function approveUpload($id)
    {
        // check if upload is already approved
        $uploadApproval = UploadApproval::where('id', $id)->first();
        $message = null;
        $success = false;

        if ($uploadApproval) {
            // disapproved the upload
            $uploadApproval->is_approved = 1;
            $uploadApproval->is_pending = 1;
            $uploadApproval->save();

            $success = true;
            $message = __('messages.upload_approved');
        }else{
            $success = false;
            $message = __('messages.upload_not_found');
        }

        return response()->json([
            'success' => $success,
            'message' => $message,
            'data' => $uploadApproval
        ]);
    }

    // disapproved tool
    public function disApproveUpload($id)
    {
        // check if upload is already approved
        $uploadApproval = UploadApproval::where('id', $id)->first();
        $message = null;
        $success = false;

        if ($uploadApproval) {
            // disapproved the upload
            $uploadApproval->is_approved = 0;
            $uploadApproval->is_pending = 1;
            $uploadApproval->save();

            $success = true;
            $message = __('messages.upload_disapproved');
        }else{
            $success = false;
            $message = __('messages.upload_not_found');
        }

        return response()->json([
            'success' => $success,
            'message' => $message,
            'data' => $uploadApproval
        ]);
    }

    public function fetchPendingUploads()
    {
        $uploads = UploadApproval::with(['upload', 'user'])->get();

        return response()->json([
            'success'   => isset($uploads) ? true : false,
            'data'      => $uploads
        ]);
    }

    public function fetchPendingUploadById($id)
    {
        $upload = UploadApproval::where('id', $id)->with(['upload', 'user'])->first();

        return response()->json([
            'success'   => isset($upload) ? true : false,
            'data'      => $upload
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
                'id'                => $request->id,
                'user_id'           => $request->user_id,
                'content'           => $request->content,
                'thumbnail'         => $request->thumbnail,
                'src'               => $request->src,
            ];

            $upload->update($data);

            $success = true;
            $message = __('messages.upload_updated');
        }else{
            $data = [
                'id'                => $request->id,
                'user_id'           => $request->user_id,
                'name'              => $request->name,
                'content'           => $request->content,
                'thumbnail'         => $request->thumbnail,
                'src'               => $request->src,
                'status'            => $request->status,
                'is_active'         => $request->is_active,
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

    public function saveReview(Request $request)
    {
        // dd('hey');
        // return response()->json('asd');
        // check if request is update
        $uploadReview = UploadReview::find($request->id);
        $data = $request->all();

        if (isset($uploadReview)) { // update review
            $uploadReview->update($data);

            return response()->json([
                'success'   => true,
                'message'   => __('message.review_updated'),
                'data'      => $uploadReview
            ]);
        }else{ // save review
            $uploadReview = UploadReview::create($data);

            return response()->json([
                'success'   => true,
                'message'   => __('message.review_submitted')
            ]);
        }
    }

    public function uploadReview($uploadId)
    {
        $uploadReview = UploadReview::where('upload_id', $uploadId)->with(['upload'])->get();

        if (isset($uploadReview)) {
            return response()->json([
                'success'   => true,
                'data'      => $uploadReview
            ]);
        }
    }
}
