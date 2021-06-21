<?php

namespace App\Http\Controllers;

use App\Review;
use Illuminate\Http\Request;

class ReviewController extends Controller
{
    public function index() {
        $reviews = Review::where( 'vlog_id', 1 )->orderBy( 'created_at', 'DESC' )->paginate( 5 );

        return response()->json( [
            'reviews' => $reviews
        ] );
    }

    public function store( Request $request ) {
        if ( auth()->user() ) {
            $request->request->add( ['name' => auth()->user()->username] );
            $request->request->add( ['email' => auth()->user()->email] );
        }

        $this->validate( $request, [
            'stars' => 'required',
            'name' => 'required',
            'email' => 'required|email',
            'message' => 'required|min:100'
        ] );

        $tempAvatars = [
            'testimonials-1.jpg',
            'testimonials-2.jpg',
            'testimonials-3.jpg',
            'testimonials-4.jpg',
            'testimonials-5.jpg',
        ];

        $temp_avatar = $tempAvatars[ array_rand( $tempAvatars ) ];

        $review = new Review;
        $review->vlog_id = 1;
        $review->stars = $request->stars;
        $review->name = $request->name;
        $review->email = $request->email;
        $review->message = $request->message;
        $review->avatar = $temp_avatar;
        $review->status = 'APPROVED';
        $review->save();

        return response()->json([
            'success' => true,
            'review' => $review
        ]);
    }
}
