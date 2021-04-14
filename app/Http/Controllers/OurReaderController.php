<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\User;
use App\Upload;
use App\Role;
use App\Category;

class OurReaderController extends Controller
{
    public function search(Request $request)
    {
        $search = $request->search;

        try {
            $role = Role::where('name', 'reader')->first();

            $user = User::where('role_id', $role->id)
            ->where('username','LIKE','%'.$search.'%')
            ->orWhere('name','LIKE','%'.$search.'%')
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

    // public function search($search, $categoryKey = null)
    // {
    //     try {
    //         $category = Category::where('name','LIKE','%'.$categoryKey.'%')
    //         ->orWhere('name','LIKE','%'.$categoryKey.'%')
    //         ->first();
            
    //         $isSearchByCategory = isset($category) ? true : false;
            
    //         if ($isSearchByCategory) {
    //             // get reader role_id
    //             $role = Role::where('name', 'reader')->first();

    //             $user = User::where('category_id', $category->id)
    //             ->where('role_id', $role->id)
    //             ->where('username','LIKE','%'.$search.'%')
    //             ->orWhere('username','LIKE','%'.$search.'%')
    //             ->with(['uploads'])
    //             ->get();

    //             return response()->json([
    //                 'success'   => true,
    //                 'message'   => 'data found',
    //                 'data'      => $user
    //             ]);
    //         }

    //         return response()->json([
    //             'success'   => true,
    //             'message'   => 'no data found',
    //         ]);
    //     } catch (\Throwable $th) {
    //         return response()->json(['error'=>$th]);
    //     }
    // } 

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
}
