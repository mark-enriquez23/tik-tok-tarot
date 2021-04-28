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

        try {
            $rating = Rating::where('id', $request->id)->first();
            $data = $request->all();
            // temporary points to be earned by reader
            $points = 1;
            $error = array();

            if ($rating) {
                // update existing rate
                $rating->update($data);

                // fetch credits of client
                $credit = Credit::where('user_id', $rating->user_id)->first();

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
                    'message'   => __('messages.rate_updated'),
                    'data'      => $rating,
                    'error'     => $error
                ]);
            }else{
                // Create Rating
                $rating = Rating::create($data);

                // fetch credits of client
                $credit = Credit::where('user_id', $rating->user_id)->first();

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
}
