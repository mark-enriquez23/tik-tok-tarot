<?php

namespace App\Http\Controllers;

use App\Redeem;
use App\Credit;
use App\Freebie;
use Illuminate\Http\Request;

class RedeemController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $redeem = Redeem::all();

        return response()->json([
            'success'   => true,
            'data'      => $redeem
        ]);
    }

    public function fetchByUserID($userID)
    {
        $redeem = Redeem::where("user_id", $userID)->get();

        return response()->json([
            'success'   => true,
            'data'      => $redeem
        ]);
    }

    public function fetchByFreebieID($freebieID)
    {
        $redeem = Redeem::where("redeem", $freebieID)->get();

        return response()->json([
            'success'   => true,
            'data'      => $redeem
        ]);
    }

    public function save(Request $request)
    {
        $data = $request->validate([
            'freebie_id'    => 'required',
        ]);

        $credit         = Credit::where("user_id", $request->user()->id)->first();
        $freebie        = Freebie::findOrFail($data['freebie_id']);
        $user_points    = $credit->earned_points;
        $price          = $freebie->points;
        $redeem         = new Redeem;

        if($user_points >= $price){
            $credit->earned_points = $credit->earned_points - $price;
            $credit->save();

            $redeem->freebie_id = $data['freebie_id'];
            $redeem->user_id    = $request->user()->id;
            $redeem->save();

            return response()->json([
                'success'   => true,
                'data'      => $redeem
            ]);
        }else{
            return response()->json([
                'success'   => false,
                'message'   => 'You do not have enough points'
            ], 422);
        }
    }


}
