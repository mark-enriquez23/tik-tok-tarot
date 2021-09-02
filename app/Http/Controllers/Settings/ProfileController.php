<?php

namespace App\Http\Controllers\Settings;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\User;

class ProfileController extends Controller
{
    /**
     * Update the user's profile information.
     *
     * @param  \Illuminate\Http\Request $request
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request)
    {
        $user = $request->user();

        $this->validate($request, [
            'username' => 'required',
            'firstName' => 'required',
            'lastName' => 'required',
            'email' => 'required|email'
        ]);

        return tap($user)->update($request->only('username','firstName', 'lastName', 'phone_number', 'email'));
    }
}
