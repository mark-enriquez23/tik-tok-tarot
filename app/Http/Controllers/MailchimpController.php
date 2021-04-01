<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Newsletter;

class MailchimpController extends Controller
{
    // public $newsletter;
    // public $listId = '0e5ec5601as';

    // public function __construct(Newsletter $newsletter)
    // {
    //     $this->newsletter = $newsletter;
    // }

    public function test(){
        return response()->json([
            "success" => true
        ]);
    }

    public function subscribe(Request $request)
    {
    	$this->validate($request, [
	    	'email' => 'required|email',
        ]);

        // return response()->json(['data' => true]);

        try {
            $newsletter = Newsletter::subscribe('rincewind@discworld.com');
            return response()->json([
                'success' => true,
                'data' => $newsletter
            ]);
        } catch (Mailchimp_List_AlreadySubscribed $e) {
            return response()->json([
                'success' => false,
                'data' => 'Email is Already Subscribed'
            ]);
        } catch (Mailchimp_Error $e) {
            return response()->json([
                'success' => false,
                'data' => 'Error from MailChimp'
            ]);
        }
    }

    public function sendCompaign(Request $request)
    {
    	$this->validate($request, [
	    	'subject' => 'required',
	    	'to_email' => 'required',
	    	'from_email' => 'required',
	    	'message' => 'required',
        ]);

        try {
	        $options = [
                'list_id'   => $this->listId,
                'subject' => $request->input('subject'),
                'from_name' => $request->input('from_email'),
                'from_email' => 'hardik@onlinecode',
                'to_name' => $request->input('to_email')
	        ];

	        $content = [
                'html' => $request->input('message'),
                'text' => strip_tags($request->input('message'))
	        ];

	        $campaign = $this->mailchimp->campaigns->create('regular', $options, $content);

	        $this->mailchimp->campaigns->send($campaign['id']);

            return response()->json([
                'success' => true,
                'data' => 'send campaign successfully'
            ]);
        } catch (Exception $e) {
            return response()->json([
                'success' => true,
                'data' => 'Error from MailChimp'
            ]);
        }

    }
}
