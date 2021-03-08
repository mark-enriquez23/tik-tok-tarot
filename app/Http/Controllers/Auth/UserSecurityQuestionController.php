<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\UserSecurityQuestion;

class UserSecurityQuestionController extends Controller
{
    public function index() {
        $userSecurityQuestions = UserSecurityQuestion::all();

        return response()->json([
            'success' => true,
            'data' => $userSecurityQuestions
        ]);
    }

    public function save(Request $request) {
        $userSecurityQuestion = UserSecurityQuestion::where('id', $request->id)->first();
        $data = $request->all();

        if ( isset($userSecurityQuestion) ) {
            $userSecurityQuestion->update($data);
        } else {
            $userSecurityQuestion = UserSecurityQuestion::create($data);
        }

        return response()->json([
            'success' => true,
            'data' => $userSecurityQuestion,
            'message' => isset($userSecurityQuestion) ?
                __('messages.userSecurityQuestion_updated_successfully'):
                __('messages.userSecurityQuestion_save_successfully')
        ]);
    }

    public function delete(Request $request) {

        $unableToDelete = 0;
        $deletedIds = [];

        foreach ($request->userSecurityQuestionIds as $userSecurityQuestionId) {
            $userSecurityQuestion = UserSecurityQuestion::where('id', $userSecurityQuestionId)->first();

            if ( isset($userSecurityQuestion) ) {
                $userSecurityQuestion->delete();
            }

        }

        return response()->json([
            'success' => true,
            'data' => $deletedIds,
            'message' => 
                $unableToDelete 
                ? __('messages.userSecurityQuestion_partially_delete_successfully') 
                : __('messages.userSecurityQuestion_delete_successfully')
        ]);

    }
}
