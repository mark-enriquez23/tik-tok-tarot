<?php

namespace App\Traits;

use Illuminate\Support\Facades\Request as FileRequest;
use App\Upload;

trait UploadVideoTrait
{
    /**
     * this will upload or store the file
     * @param String $filenameIdentifier and folderBasePath example of identifier: "VLOG_" and folderPath: "/uploads/vlog/"
     * @param Request $request required field "upload_id"
     */
    public function upload($request, $uploadId, $filenameIdentifier, $folderBasePath)
    {
        try {
            # Upload file
            $original_file = $request->file('file');
            $basePath = $folderBasePath;
            $file = FileRequest::file('file');
    
            # final file path
            # example nameIdentifier = "VLOG_"
            $fileName = $filenameIdentifier . strtotime("now") . '.' . $original_file->getClientOriginalExtension();
    
            # Check if dir exists
            if(!\file_exists(public_path() . $basePath)) {
                \mkdir(public_path() . $basePath);
            }
    
            # Save file
            $file->move(public_path().$basePath, $fileName);
    
            // update upload base on uploaded id
            // fetch uploaded details
            $upload = Upload::where('id', $uploadId)->first();
    
            if ($upload) {
                // update field src
                $upload->src = url($basePath.$fileName);
                $upload->save();
            }

            $data = [
                'success' => true,
                'message' =>  __('messages.file_uploaded'),
                'src' => url($basePath.$fileName)
            ];

            return $data;

        } catch (\Throwable $th) {
            return $th->getMessage();
        }
    }
}
