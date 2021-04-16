<?php

namespace App\Http\Controllers\Auth;

use App\Exceptions\VerifyEmailException;
use App\Http\Controllers\Controller;
use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Foundation\Auth\AuthenticatesUsers;
use Illuminate\Http\Request;
use Illuminate\Validation\ValidationException;
// use Illuminate\Foundation\Auth\ThrottlesLogins;

use App\User;
use App\LoginAttempt;

class LoginController extends Controller
{
    // use AuthenticatesUsers, ThrottlesLogins;
    use AuthenticatesUsers;
    protected $maxAttempts = 3;
    protected $decayMinutes = 3;

    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
        $this->middleware('guest')->except('logout');
    }

    /**
     * Attempt to log the user into the application.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return bool
     */
    protected function attemptLogin(Request $request)
    {
        $input = $request->all();

        $this->validate($request, [
            'email'     => 'required',
            'password'  => 'required',

        ]);

        $fieldType = filter_var($request->email, FILTER_VALIDATE_EMAIL) ? 'email' : 'username';
        $token = $this->guard()->attempt(array($fieldType => $input['email'], 'password' => $input['password'], 'is_active' => 1));

        // get user
        $userData = User::where($fieldType, $input['email'])->first();

        if ($userData) {
            // check user if banned
            if ($userData->is_banned) {
               return false;
            }

            $loginAttempt = LoginAttempt::where('user_id', $userData->id)->first();

            if ($loginAttempt) {
                // check if reach the max limit of failed login

                if ($loginAttempt->attempt >= 5 ) {
                    $this->clearLoginAttempts($request);
                    return false;
                }
            }
        }

        if (! $token) {
            return false;
        }

        $user = $this->guard()->user();

        if ($user instanceof MustVerifyEmail && ! $user->hasVerifiedEmail()) {
            return false;
        }

        $this->guard()->setToken($token);
        return true;
    }

    /**
     * Send the response after the user was authenticated.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\JsonResponse
     */
    protected function sendLoginResponse(Request $request)
    {
        $this->clearLoginAttempts($request);

        $token = (string) $this->guard()->getToken();
        $expiration = $this->guard()->getPayload()->get('exp');
        $user = $this->guard()->user();
        $loginAttempt = LoginAttempt::where('user_id', $user->id)->first();

        if ($loginAttempt) {
            $loginAttempt->attempt = 0;
            $loginAttempt->save();
        }

        return response()->json([
            'token' => $token,
            'token_type' => 'bearer',
            'expires_in' => $expiration - time()
        ]);

    }

    /**
     * Get the failed login response instance.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\JsonResponse
     *
     * @throws \Illuminate\Validation\ValidationException
     */
    protected function sendFailedLoginResponse(Request $request)
    {
        $input = $request->all(); // get all request
        $attempt = $this->limiter()->attempts($this->throttleKey($request)); // count attempts
        $fieldType = filter_var($request->email, FILTER_VALIDATE_EMAIL) ? 'email' : 'username'; // filter type
        $userData = User::where($fieldType, $input['email'])->first(); // get user data using email
        $errorMessage = [trans('auth.failed')];

        if ($userData) { // if user found
            if ($userData->is_banned) {
                $errorMessage = ['email' => 'You account has been banned.'];
             }

            $loginAttempt = LoginAttempt::where('user_id', $userData->id)->first(); // get login attempt data

            if ($loginAttempt) {
                // check attempts
                if ($loginAttempt->attempt >= 5) {
                    $errorMessage = ['email' => 'Your account is locked due to inavalid login'];
                }
                $loginAttempt->attempt = $loginAttempt->attempt + 1; // update attempt data
                $loginAttempt->save(); // update data
            }else{

                $data = [
                    "user_id" => $userData->id,
                    "attempt" => 1
                ]; // parse data

                LoginAttempt::create($data); // create new data
            }
        }

        $user = $this->guard()->user();

        if ($user instanceof MustVerifyEmail && ! $user->hasVerifiedEmail()) {
            throw VerifyEmailException::forUser($user);
        }

        throw ValidationException::withMessages([
            $this->username() => $errorMessage,
            'attempts' => $this->limiter()->attempts($this->throttleKey($request))
        ]);

    }

    /**
     * Log the user out of the application.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function logout(Request $request)
    {
        $this->guard()->logout();
    }
}
