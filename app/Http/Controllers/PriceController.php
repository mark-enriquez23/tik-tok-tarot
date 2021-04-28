<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Price;

class PriceController extends Controller
{
    /**
     * Fetch Prices
     *
     * @return json
     */
    public function fetchPrice()
    {
        $price = Price::orderBy('created_at', 'DESC')->get();

        return response()->json([
            'success' => $price ? true : false,
            'data' => $price ? $price : []
        ]);
    }

    /**
     * Save Prices content
     *
     * @param  \Illuminate\Http\Request  $request
     * @return json
    * @return \Illuminate\Http\RedirectResponse
     */
    public function save(Request $request)
    {
        $price = Price::where('id', $request->id)->first();
        $data = $request->all();
        $message = null;

        if ( isset( $price ) ) {
            $price->update($data);
            $message = __('messages.updated_price');
        }else{
            $price = Price::create($data);
            $message = __('messages.saved_price');
        }

        return response()->json([
            'success' => $price ? true : false,
            'message' => $message,
            'data' => $price
        ]);
    }
}
