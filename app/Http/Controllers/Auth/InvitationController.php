<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Invites;
use App\Credit;
use App\User;

class InvitationController extends Controller
{
    // public function __construct()
    // {
    //     $this->middleware('guest');
    // }

    public function index($code)
    {
        if(null === $code)
        {
            return response()->json([
                        'success' => false,
                        'message'    => 'params is missing: code',
                    ],404);
        }

        $getUser = Invites::getByReferralCode($code);
        return $getUser ?
        response()->json([
            'success' => true,
            'data'    => $getUser
        ]) :
        response()->json([
            'success' => false,
            'message'    => 'code is not existing',
        ],404);
    }

    public function store(Request $request)
    {
        //validations
        $data = $request->validate([
            'user_id' => 'required',
            'referral_code' => 'required'
        ]);

        //Variables
        $User = new User();
        $getUser = $User->getUserByReferralCode($data['referral_code']);
        $userId = $getUser['id'];

        //validation if user exist in db
        if(null === $getUser)
        {
            response()->json([
                'success' => false,
                'message' => 'missing user information',
            ], 404);
        }

        $credit = Credit::where('user_id', $userId)->first();

        //validation if credit of user exist in db
        if(null === $credit)
        {
            response()->json([
                'success' => false,
                'message' => 'missing credit information',
            ], 404);
        }

        $credit->goal_points = $credit->goal_points + 5;
        $credit->earned_points = $credit->earned_points + 5;
        $credit->save();


        //make data to insert
        $invite = Invites::make($data);
        $invite->referred_by = $userId;
        $invite->save();

        return response()->json([
            'success' => true,
            'data' => $invite,
        ]);
    }

}
