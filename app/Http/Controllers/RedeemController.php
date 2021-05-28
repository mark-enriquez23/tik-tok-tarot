<?php

namespace App\Http\Controllers;

use App\Redeem;
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

    public function save()
    {
        $redeem = new Redeem;
    }


}
