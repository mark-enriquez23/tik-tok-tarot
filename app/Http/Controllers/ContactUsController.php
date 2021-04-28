<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\ContactUs;

class ContactUsController extends Controller
{
    /**
     * Fetch all the first contactus order by desc
     * @return json
     */
    public function fetchContactUs()
    {
        $contactUs = ContactUs::orderBy('created_at', 'DESC')->first();

        return response()->json([
            'success' => true,
            'data' => $contactUs
        ]);
    }

     /**
     * Save Contact us details
     *
     * @param  \Illuminate\Http\Request  $request
     * @return json
    * @return \Illuminate\Http\RedirectResponse
     */
    public function save(Request $request)
    {
        $contactUs = ContactUs::where('id', $request->id)->first();
        $data = $request->all();
        $message = null;

        if ( isset( $contactUs ) ) {
            $contactUs->update($data);
            $message = __('messages.updated_contact_us');
        }else{
            $contactUs = ContactUs::create($data);
            $message = __('messages.saved_contact_us');
        }

        return response()->json([
            'success' => $contactUs ? true : false,
            'message' => $message,
            'data' => $contactUs
        ]);
    }
}
