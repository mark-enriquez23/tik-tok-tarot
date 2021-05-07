<?php

namespace App\Http\Controllers;

use App\User;
use App\UserDetail;
use Illuminate\Http\Request;

class UserDetailController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {

    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $data = $request->validate([
            'user_id' => 'required',
            'reader_bio' => 'required',
            'address1' => 'required',
            'state' => 'required',
            'zip' => 'required',
            'country' => 'required',
            'birthdate' => 'required',
            'profile_photo' => 'required|image|mimes:jpeg,png,jpg|max:2048'
        ]);

        $imageName = time().'.'.$request->profile_photo->extension();

        $request->profile_photo->move(public_path('images'), $imageName);

        $details = UserDetail::make($data);

        if(!null === $request->address2){
            $details->address2 = $request->address2;
        }

        $details->expertise     = serialize($request->expertise);
        $details->user_id       = $data["user_id"];
        $details->reader_bio    = $data["reader_bio"];
        $details->address1      = $data["address1"];
        $details->state         = $data["state"];
        $details->zip           = $data["zip"];
        $details->country       = $data["country"];
        $details->birthdate     = $data["birthdate"];
        $details->profile_photo = $imageName;
        $details->save();

        return response()->json([
            'success' => true,
            'data' => $details
        ]);

    }

    /**
     * Display the specified resource.
     *
     * @param  \App\UserDetail  $userDetail
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $user = UserDetail::getUserByID($id);

        if(!$user){
            return response()->json([
                'success' => false,
                'message' => 'user is not found'
            ], 404);
        }

        return response()->json([
            'success' => true,
            'data' => $user
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\UserDetail  $userDetail
     * @return \Illuminate\Http\Response
     */
    public function edit(UserDetail $userDetail)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\UserDetail  $userDetail
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request)
    {
        $details = UserDetail::where('user_id', $request->user_id)->first();

        if($request->profile_photo){
            $imageName = time().'.'.$request->profile_photo->extension();
            $request->profile_photo->move(public_path('images'), $imageName);
            $details->profile_photo = $imageName;
            $details->save();

        }

        if($request->expertise){
            $details->expertise = serialize($request->expertise);
            $details->save();
        }

        $data = $request->except(['profile_photo','expertise']);
        $details->update($data);

        return response()->json([
            'success' => $details ? true : false,
            'data' => $details
        ]);

    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\UserDetail  $userDetail
     * @return \Illuminate\Http\Response
     */
    public function destroy(UserDetail $userDetail)
    {
        //
    }
}
