<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Rating;
use App\Credit;

class RatingController extends Controller
{
    /**
     * Save Ratings of uploads
     *
     * @param  \Illuminate\Http\Request  $request
     * @return json
     * @return \Illuminate\Http\RedirectResponse
     */
    public function save(Request $request)
    {
        // scenario when the client rate the readers, client will earn points from rating the readers
        // id = id of rating
        // user_id = id of client the submitted ratings to readers
        // CATEGORY ACCEPTS ONLY VIDEO / LIVE
        $user = $request->user()->id;
        $credit = Credit::where('user_id', $user)->first();

        $data = $request->validate([
            'reference_id' => 'required',
            'category' => 'required',
            'rate' => 'required',
        ]);

        $data['user_id'] = $user;


        // fetch credits of client

        try {
            $rating = Rating::where('user_id', $user)->where('reference_id', $data['reference_id'])->first();
            // temporary points to be earned by reader
            $error = array();

            if ($rating) {
                // update existing rate
                $rating->update($data);


                //CREDIT WILL NOT EARN POINTS WHEN ITS ALREADY RATED
                // if ($credit) {
                //     $credit->earned_points = (int)$credit->earned_points + $points;
                //     $credit->save();
                // }else{
                //     // credit not found
                //     $error[] = [
                //         'message'   => 'credit not found'
                //     ];
                // }

                return response()->json([
                    'success'   => true,
                    'message'   => __('messages.rate_updated'),
                    'data'      => $rating,
                    'error'     => $error
                ]);
            }else{
                // Create Rating
                $rating = Rating::create($data);
                // temporary points to be earned by reader
                $points = 1;

                if ($credit) {
                    $credit->earned_points = (int)$credit->earned_points + $points;
                    $credit->save();
                }else{
                    // credit not found
                    $error[] = [
                        'message'   => 'credit not found'
                    ];
                }

                return response()->json([
                    'success'   => true,
                    'message'   => __('messages.rate_submited'),
                    'data'      => $rating,
                    'error'     => $error
                ]);
            }
        } catch (\Throwable $th) {
            return response()->json([
                'success'   => false,
                'message'   => __('messages.has_error'),
                'errors'      => $th
            ]);
        }
    }

    public function getById(int $id, string $category)
    {
        $rating = Rating::where('user_id', $id)->where('category', $category)->get();

         //IF RATING IS NOT EXISTING RETURN 404
         if($rating->isEmpty()){
            return response()->json([
                'success'   => false,
                'data'      => []
            ],404);
        }

        //CALCULATIONS
        $numberOfRate    = $rating->count();
        $totalRate       = 0;

        //SUM OF RATES
        foreach($rating as $rates){
            $totalRate += $rates->rate;
        }

        //TOTAL
        (float)$total = $totalRate / $numberOfRate;

        return response()->json([
            'success'       => true,
            'data'          => $rating,
            'totalRatings'  => $total
        ]);
    }

}
