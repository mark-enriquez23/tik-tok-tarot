<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\User;
use App\Upload;
use App\Role;
use App\Category;

class OurReaderController extends Controller
{
    /**
     * Our Readers Search
     *
     * @param  \Illuminate\Http\Request  $request
     * @return json
    * @return \Illuminate\Http\RedirectResponse
     */
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

    /**
     * Fetch uploads with reader details
     *
     * @return json
     */
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

    /**
     * Search uploads with reader details
     *
     * @param  \Illuminate\Http\Request  $request
     * @return json
    * @return \Illuminate\Http\RedirectResponse
     */
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
