<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Testimonial;

class TestimonialController extends Controller
{
    public function index() 
    {
        $testimonials = Testimonial::with(['user'])->get();

        return response()->json([
            'success'   => true,
            'data'      => $testimonials
        ]);
    }

    public function save(Request $request)
    {
        $testimonial = Testimonial::where('id', $request->id)->first();
        $data = $request->all();

        if ( isset($testimonial) ) {
            $testimonial->update($data);
        } else {
            $testimonial = Testimonial::create($data);
        }

        return response()->json([
            'success'   => true,
            'data'      => $testimonial,
            'message'   => __('messages.testimonial_save_successfully')
        ]);
    }

    public function delete(Request $request)
    {
        $unableToDelete = 0;
        $deletedIds = [];

        foreach ($request->testimonialIds as $testimonialId) {
            $testimonial = Testimonial::where('id', $testimonialId)->first();

            if ( isset($testimonial) ) {
                $deletedIds[] = $testimonial->id;
                $testimonial->delete();
            }
        }

        return response()->json([
            'success'   => true,
            'data'      => $deletedIds,
            'message'   => 
                $unableToDelete 
                ? __('messages.testimonial_partially_delete_successfully') 
                : __('messages.testimonial_delete_successfully')
        ]);
    }
}
