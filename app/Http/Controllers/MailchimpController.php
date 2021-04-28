<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Mailchimp;
use App\Mailchimp as MC;

class MailchimpController extends Controller
{
    public $listId = 'b38dfba26f';

    /**
     * Fetch mailchimp list
     * @return json
     */
    public function getLists(){
        $list = Mailchimp::getLists();

        return response()->json([
            'success' => true,
            'data' => $list,
        ]);
    }

    /**
     * Fetch Mailchimp list eith parameter request
     *
     * @param  \Illuminate\Http\Request  $request
     * @return json
    * @return \Illuminate\Http\RedirectResponse
     */
    public function getListWithParameter(Request $request){
        $this->validate($request, [
	    	'email' => 'required|email',
        ]);

        $list = Mailchimp::getLists(['email' => $request->email, 'fields' => 'lists.id']);

        return response()->json([
            'success' => true,
            'data' => $list,
        ]);
    }

    /**
     * Check email if already subscribed
     *
     * @param  \Illuminate\Http\Request  $request
     * @return json
    * @return \Illuminate\Http\RedirectResponse
     */
    public function checkIfSubscribed(Request $request){
        $this->validate($request, [
	    	'email' => 'required|email',
        ]);

        $mailchimp = Mailchimp::check($this->listId, $request->email);

        return response()->json([
            'success' => true,
            'is_subscribed' => $mailchimp,
        ]);
    }

    /**
     * Subscribed to mailchimp
     *
     * @param  \Illuminate\Http\Request  $request
     * @return json
    * @return \Illuminate\Http\RedirectResponse
     */
    public function subscribe(Request $request)
    {
    	$this->validate($request, [
	    	'email' => 'required|email',
        ]);

        try {
            $isSubscribed = Mailchimp::check($this->listId, $request->email);

            if (!$isSubscribed) {
                $mailchimp = Mailchimp::subscribe($this->listId, $request->email, $merge = [], $confirm = false);
            
                // store to data base
                $mc = MC::where('email', $request->email)->first();

                if ($mc) {
                    $mc->update('');
                }else{
                    $data = [
                        "email"             => $request->email,
                        "is_subscribed"     => true,
                        "listId"            => $this->listId
                    ];
                    $mc = MC::create($data);
                }

                return response()->json([
                    'success'   => true,
                    'data'      => $mailchimp,
                    'db_data'   => $mc
                ]);
            }else{
                return response()->json([
                    'success'   => true,
                    'message'   => "Already Subscribed"
                ]);
            }

        } catch (Mailchimp_List_AlreadySubscribed $e) {
            return response()->json([
                'success' => false,
                'message' => "Email is Already Subscribed",
            ]);
        } catch (Mailchimp_Error $e) {
            return response()->json([
                'success' => false,
                'message' => "Error from MailChimp",
            ]);
        }
    }

    /**
     * Fetch all subscribers
     *
     * @return json
     */
    public function getSubscribers(){
        $list = MC::all();

        if ($list) {
            return response()->json([
                'success' => true,
                'data'    => $list
            ]);
        }else{
            return response()->json([
                'success' => true,
                'message'    => "No subscriber"
            ]);
        }

        
    }
}
