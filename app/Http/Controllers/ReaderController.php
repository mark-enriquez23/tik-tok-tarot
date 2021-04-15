<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\User;
use App\Upload;
use App\Role;
use App\Category;
use App\FeaturedUser;

class ReaderController extends Controller
{
    public function search(Request $request)
    {
        $search = $request->search;

        try {
            $role = Role::where('name', 'reader')->first();

            $user = User::where('role_id', $role->id)
            ->where('username','LIKE','%'.$search.'%')
            ->where('name','LIKE','%'.$search.'%')
            // ->orWhere('name','LIKE','%'.$search.'%')
            ->with(['uploads'])
            ->get();

            return response()->json([
                'success'   => isset($user) ? true : false,
                'message'   => isset($user) ? 'data found' : 'data not found',
                'data'      => $user
            ]);
        } catch (\Throwable $th) {
            return response()->json(['error'=>$th]);
        }
    } 

    // Fetch Upload with Reader Details
    public function uploadWithReaderDetail()
    {
        $uploads = Upload::with(['user'])->get();

        if (isset($uploads)) {
            return response()->json([
                'success'   => true,
                'message'   => 'data found',
                'data'      => $uploads
            ]);
        }else{
            return response()->json([
                'success'   => true,
                'message'   => 'no data found',
                'data'      => $uploads
            ]);
        }

    }

    // Search and Fetch upload with reader details
    public function searchUploadWithReaderDetail()
    {
        $uploads = Upload::with(['user'])->get();

        if (isset($uploads)) {
            return response()->json([
                'success'   => true,
                'message'   => 'data found',
                'data'      => $uploads
            ]);
        }else{
            return response()->json([
                'success'   => true,
                'message'   => 'no data found',
                'data'      => $uploads
            ]);
        }

    }

    // Will save detials or update
    public function fetchReaders()
    {
        $user = User::where([['role_id', '2'], ['visible', 1]])->get();

        return response()->json([
            "success" => $user ? true : false,
            "data" => $user
        ]);
    }

    public function fetchFeaturedReaders()
    {
        $user = FeaturedUser::with(['user'])->get();

        return response()->json([
            "success" => $user ? true : false,
            "data" => $user
        ]);
    }

    public function save(Request $request)
    {
        $user = User::where('id', $request->id)->first();
        
        $data = $request->all();    
        $user->update($data);

        return response()->json([
            "success" => $user ? true : false,
            "data" => $user
        ]);
    }

    public function changeReaderVisibility(Request $request)
    {
        $user = User::where('id', $request->user_id)->first();
    
        $user->visible = $request->status;
        $user->save();

        return response()->json([
            "success" => $user ? true : false,
            "message"   => 'user has visibility updated',
            "data" => $user
        ]);
    }

}
