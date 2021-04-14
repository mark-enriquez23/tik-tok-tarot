<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\User;
use App\Upload;
use App\UploadType;
use App\Role;

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

        $upload = Upload::where('upload_type_id', $uploadType->id)->with(['user'])->get();

        return response()->json([
            'success'   => true,
            'total'     => count($upload),
            'data'      => $upload
        ]);
    }

    public function liveSessions()
    {
        // get upload type live
        $uploadType = UploadType::where('name', 'live')->first();

        $upload = Upload::where([['upload_type_id', $uploadType->id], ['status', 'streaming']])->with(['user'])->get();
        
        return response()->json([
            'success'   => true,
            'total'     => count($upload),
            'data'      => $upload
        ]);
    }

    public function searchTool(Request $request)
    {
        $search = $request->search;
        // search on reader first
        try {
            $role = Role::where('name', 'reader')->first();

            $result = User::where('role_id', $role->id)
            ->where('username','LIKE','%'.$search.'%')
            ->orWhere('name','LIKE','%'.$search.'%')
            ->with(['uploads'])
            ->get();

            if (count($result) <= 0 ) {
                // search for uploads
                $result = Upload::where('name','LIKE','%'.$search.'%')->get();
                
                if (count($result) > 0) {
                    return response()->json([
                        'success'   => true,
                        'category'  => 'vlog',
                        'message'   => 'data found',
                        'data'      => $result
                    ]);
                }
            }

            return response()->json([
                'success'   => count($result) > 0 ? true : false,
                'category'  => 'reader',
                'message'   => count($result) > 0 ? 'data found' : 'data not found',
                'data'      => $result
            ]);
        } catch (\Throwable $th) {
            return response()->json(['error'=>$th]);
        }
    }
}
