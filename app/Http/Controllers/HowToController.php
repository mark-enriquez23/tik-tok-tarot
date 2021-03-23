<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\HowTo;

class HowToController extends Controller
{
    public function fetchHowTo()
    {
        $howTo = HowTo::orderBy('created_at', 'DESC')->first();

        return response()->json([
            'success' => $howTo ? true : false,
            'data' => $howTo ? $howTo : []
        ]);
    }

    public function save(Request $request)
    {
        $howTo = HowTo::where('id', $request->id)->first();
        $data = $request->all();
        $message = null;

        if ( isset( $howTo ) ) {
            $howTo->update($data);
            $message = __('messages.updated_how_to');
        }else{
            $howto = HowTo::create($data);
            $message = __('messages.saved_how_to');
        }

        return response()->json([
            'success' => $howTo ? true : false,
            'message' => $message,
            'data' => $howTo
        ]);
    }
}
