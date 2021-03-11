<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\UserSecurityQuestion;

class UserSecurityQuestionController extends Controller
{
    public function index() {
        $current = auth()->user();

        $userSecurityQuestions = UserSecurityQuestion::where('user_id', $current->id)->get();

        return response()->json([
            'success' => true,
            'data' => $userSecurityQuestions
        ]);
    }

    public function authenticated() {
        $current = auth()->user();

        $userSecurityQuestions = UserSecurityQuestion::where('user_id', $current->id)->get();

        return response()->json([
            'success' => true,
            'data' => $userSecurityQuestions
        ]);
    }

    public function save(Request $request) {

        foreach ($request->questionData as $question) {
            
            $data = [
                "id" => '',
                "user_id" => $question['user_id'],
                "question_id" => $question['question_id'],
                "answer" => $question['answer'],
            ];

            $userSecurityQuestion = UserSecurityQuestion::create($data);
           
        }

        return response()->json([
            'success' => true,
            'message' => __('messages.userSecurityQuestion_save_successfully'),
            'data' => $request->questionData
        ]);
    }

    public function saveAuthenticated(Request $request) {

        foreach ($request->questionData as $question) {

            $userSecurityQuestion = UserSecurityQuestion::where('id', $question['security_id'])->first();
            
            $data = [
                "id" => $question['security_id'],
                "user_id" => $question['user_id'],
                "question_id" => $question['question_id'],
                "answer" => $question['answer'],
            ];

            $userSecurityQuestion->update($data);
           
        }

        return response()->json([
            'success' => true,
            'message' => __('messages.userSecurityQuestion_save_successfully'),
            'data' => $request->questionData
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
