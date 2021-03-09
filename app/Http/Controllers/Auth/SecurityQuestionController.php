<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\SecurityQuestion;

class SecurityQuestionController extends Controller
{

    public function index() {
        $securityQuestions = SecurityQuestion::all(); // fetch all Security questions from database

        // return response
        return response()->json([
            'success' => true,
            'data' => $securityQuestions
        ]);
    }

    public function save(Request $request) {

        // fetch security question by id
        $securityQuestion = SecurityQuestion::where('id', $request->id)->first(); 

        $data = $request->all(); // get all request fields

        if ( isset($securityQuestion) ) { // check if security question has found data
            $securityQuestion->update($data);
        } else {
            $securityQuestion = SecurityQuestion::create($data);
        }

        return response()->json([
            'success' => true,
            'data' => $securityQuestion,
            'message' => isset($securityQuestion) ?
                __('messages.securityQuestion_updated_successfully'):
                __('messages.securityQuestion_save_successfully')
        ]);
    }

    public function delete(Request $request) {

        $unableToDelete = 0;
        $deletedIds = [];

        // Iterate request IDs and delete each
        foreach ($request->securityQuestionIds as $securityQuestionId) {

            $securityQuestion = SecurityQuestion::where('id', $securityQuestionId)->first();

            if ( isset($securityQuestion) ) {
                $securityQuestion->delete();
            }

        }

        return response()->json([
            'success' => true,
            'data' => $deletedIds,
            'message' => 
                $unableToDelete 
                ? __('messages.securityQuestion_partially_delete_successfully') 
                : __('messages.securityQuestion_delete_successfully')
        ]);

    }
}
