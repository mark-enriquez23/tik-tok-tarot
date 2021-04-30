<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\User;
use App\Credit;
use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Foundation\Auth\RegistersUsers;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use App\Traits\SendMessage;

class RegisterController extends Controller
{
    use RegistersUsers, SendMessage;

    /**
     * Create a new controller instance.a
     *
     * @return void
     */
    public function __construct()
    {
        $this->middleware('guest');
    }

    /**
     * The user has been registered.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\User  $user
     * @return \Illuminate\Http\JsonResponse
     */
    protected function registered(Request $request, User $user)
    {
        if ($user instanceof MustVerifyEmail) {
            $user->sendEmailVerificationNotification();
            return response()->json(['status' => trans('verification.sent')]);
        }

        return response()->json($user);
    }

    /**
     * Get a validator for an incoming registration request.
     *
     * @param  array  $data
     * @return \Illuminate\Contracts\Validation\Validator
     */
    protected function validator(array $data)
    {
        // Custom Message
        $validatorCustomMessage = array(
            'username.unique' => "The username has already been taken. try to add letters or numbers",
            'username.regex' => "Only letters and numbers are allowed in username",
            'password.regex' => "Password must contain the following: lowercase letter, capital (uppercase) letter, number, minimum 6 characters"
        );

        // Validator of Fields
        return Validator::make($data, [
            'username' => 'required|unique:users|regex:/^[a-zA-Z0-9_.-]*$/',
            'name' => 'required|max:255',
            'email' => 'required|email|max:255|unique:users',
            'password' => 'required|min:6|confirmed|regex:/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/',
            'validate' => 'required'
        ], $validatorCustomMessage);
    }

    /**
     * Create a new user instance after a valid registration.
     *
     * @param  array  $data
     * @return \App\User
     */
    protected function create(array $data)
    {
        if($data['role_id'] === 2){
            $user = User::create([
                'username' => $data['username'],
                'name' => $data['name'],
                'phone_number' => $data['phone_number'],
                'email' => $data['email'],
                'referral_code' => Str::random(6),
                'password' => bcrypt($data['password']),
                'role_id' => $data['role_id'],
            ]);
        }else{
            $user = User::create([
                'username' => $data['username'],
                'name' => $data['name'],
                'phone_number' => $data['phone_number'],
                'email' => $data['email'],
                'password' => bcrypt($data['password']),
                'role_id' => $data['role_id'],
            ]);
        }

        // Create initial Credit
        $credit = Credit::create([
            'user_id'   => $user->id,
        ]);

        // send sms code
        $this->sendCustomMessage($user->id, $data['phone_number']);

        return $user;

    }

}
