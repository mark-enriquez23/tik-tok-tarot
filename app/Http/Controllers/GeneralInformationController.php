<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\GeneralInformation;

class GeneralInformationController extends Controller
{
     /**
     * Fetch general Information
     *
     * @return json
     */
    public function fetchGeneralInformation()
    {
        $generalInfo = GeneralInformation::orderBy('created_at', 'DESC')->first();

        return response()->json([
            'success' => true,
            'data' => $generalInfo
        ]);
    }

     /**
     * Save General Information details
     *
     * @param  \Illuminate\Http\Request  $request
     * @return json
    * @return \Illuminate\Http\RedirectResponse
     */
    public function save(Request $request)
    {
        $generalInfo = GeneralInformation::where('id', $request->id)->first();
        $data = $request->all();
        $message = null;

        if ( isset( $generalInfo ) ) {
            $generalInfo->update($data);
            $message = __('messages.updated_general_info');
        }else{
            $generalInfo = GeneralInformation::create($data);
            $message = __('messages.saved_general_info');
        }

        return response()->json([
            'success' => $generalInfo ? true : false,
            'message' => $message,
            'data' => $generalInfo
        ]);
    }
}
