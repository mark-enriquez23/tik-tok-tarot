<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\User;
use App\Upload;
use App\UploadType;

class HomePageController extends Controller
{
    // count of current viewers at the moment
    public function currentViewer()
    {
        $user = User::where('status', 'online')->count();

        return response()->json([
            'success'   => true,
            'total'      => $user
        ]);
    }

    // Vlogs to view
    public function vlogs()
    {
        // get upload type
        $uploadType = UploadType::where('name', 'vlog')->first();

        $upload = Upload::where('upload_type_id', $uploadType->id)->with(['upload'])->count();

        return response()->json([
            'success'   => true,
            'total'      => $upload
        ]);
    }

    public function liveSessions()
    {
        // get upload type live
        $uploadType = UploadType::where('name', 'live')->first();

        $upload = Upload::where([['upload_type_id', $uploadType->id], ['status', 'streaming']])->with(['upload'])->count();
        
        return response()->json([
            'success'   => true,
            'total'      => $upload
        ]);
    }


}
