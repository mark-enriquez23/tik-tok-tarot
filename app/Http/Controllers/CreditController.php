<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Credit;

class CreditController extends Controller
{
    # save or update
    public function save(Request $request){
        $credit = Credit::where('id', $request->id)->first();

        if (isset($credit)) {
            // update credit
            $credit->user_id = $request->user_id;
            $credit->goal_points = $request->goal_points;
            $credit->earned_points = $request->earned_points;
            $credit->save();

            return response()->json([
                'success'   => true,
                'message'   => __('messages.credit_updated')
            ]);
        }else{
            

            // save
            $credit = new Credit;
            $credit->user_id = $request->user_id;
            $credit->goal_points = $request->goal_points;
            $credit->earned_points = $request->earned_points;
            $credit->save();

            return response()->json([
                'success'   => true,
                'message'   => __('messages.credit_saved')
            ]);
        }
    }
}
