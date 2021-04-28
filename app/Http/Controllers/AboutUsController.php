<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\AboutUs;

class AboutUsController extends Controller
{
    /**
     * Get request to fetch about us content ordered by DESC.
     *
     * @return void
     */
    public function fetchAboutUs()
    {
        $aboutUs = AboutUs::orderBy('created_at', 'DESC')->first();

        return response()->json([
            'success' => true,
            'data' => $aboutUs
        ]);
    }

    /**
     * Save About us details
     *
     * @param  \Illuminate\Http\Request  $request
     * @return json
    * @return \Illuminate\Http\RedirectResponse
     */
    public function save(Request $request)
    {
        $aboutUs = AboutUs::where('id', $request->id)->first();
        $data = $request->all();
        $message = null;

        if ( isset( $aboutUs ) ) {
            $aboutUs->update($data);
            $message = __('messages.updated_about_us');
        }else{
            $aboutUs = AboutUs::create($data);
            $message = __('messages.saved_about_us');
        }

        return response()->json([
            'success' => $aboutUs ? true : false,
            'message' => $message,
            'data' => $aboutUs
        ]);
    }
}
