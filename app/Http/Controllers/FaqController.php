<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Faq;

class FaqController extends Controller
{
    public function fetchFaq()
    {
        $faqs = Faq::orderBy('created_at', 'DESC')->first();

        return response()->json([
            'success' => true,
            'data' => $faqs
        ]);
    }

    public function save(Request $request)
    {
        $faq = Faq::where('id', $request->id)->first();
        $data = $request->all();
        $message = null;

        if ( isset( $faq ) ) {
            $faq->update($data);
            $message = __('messages.updated_faq');
        }else{
            $faq = faq::create($data);
            $message = __('messages.saved_faq');
        }

        return response()->json([
            'success' => $faq ? true : false,
            'message' => $message,
            'data' => $faq
        ]);
    }

}
