<?php

namespace App\Http\Controllers;

use App\Freebie;
use Illuminate\Http\Request;

class FreebieController extends Controller
{
    //FETCH ALL
    public function index()
    {
        $freebies = Freebie::all();

        return response()->json([
            'success' => true,
            'data' => $freebies
        ]);
    }

    //FETCH BY STATUS
    public function getByStatus(string $status)
    {
        $freebies = Freebie::where('is_active', $status)->get();

        return response()->json([
            'success' => true,
            'data' => $freebies
        ]);
    }

    public function getByID(int $id){
        $freebie = Freebie::find($id);

        return response()->json([
            'success' => true,
            'data' => $freebie
        ]);
    }

    //CREATE
    public function create(Request $request){

        $data = $request->validate([
            'freebie_name' => 'required',
            'description' => 'required',
            'points' => 'required',
            'photo' => 'required|image|mimes:jpeg,png,jpg|max:2048'
        ]);

         if(!file_exists(public_path('images/freebies'))) {
             mkdir(public_path('images/freebies'), 0777, true);
         }

        $imageName = time().'.'.$data['photo']->extension();

        $data['photo']->move(public_path('images/freebies'), $imageName);

        $freebie = Freebie::make($data);

        $freebie->freebie_name  = $data["freebie_name"];
        $freebie->description   = $data["description"];
        $freebie->points        = $data["points"];
        $freebie->photo         = $imageName;

        if($freebie->save()){
            return response()->json([
                'success' => true,
                'data' => $freebie
            ]);
        }else{
            return response()->json([
                'success' => false,
                'message' => 'something is wrong with the server..'
            ], 500);
        }
    }

    //UPDATE
    public function update(Request $request)
    {
        $data = $request->validate([
            'id' => 'required|int',
        ]);

        $freebie = Freebie::where('id', $request->id)->first();

        if($request->photo){
            if(!file_exists(public_path('images/freebies'))) {
                mkdir(public_path('images/freebies'), 0777, true);
            }

            $imageName = time().'.'.$request->photo->extension();
            $request->photo->move(public_path('images'), $imageName);
            $freebie->photo = $imageName;
            $freebie->save();

        }

        $data = $request->except(['photo']);
        $freebie->update($data);

        return response()->json([
            'success' => $freebie ? true : false,
            'data' => $freebie
        ]);

    }

    //DELETE
    public function destroy($id)
    {
        $freebie = Freebie::find($id);

        if($freebie->delete()){
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
