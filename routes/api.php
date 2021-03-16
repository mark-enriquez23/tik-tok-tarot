<?php

use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::group(['middleware' => 'auth:api'], function () {
    Route::post('logout', 'Auth\LoginController@logout');

    Route::get('/user', 'Auth\UserController@current');

    Route::patch('settings/profile', 'Settings\ProfileController@update');
    Route::patch('settings/password', 'Settings\PasswordController@update');

    // SecurityQuestion api 
    Route::group(['prefix' => 'authenticated-security-question'], function () {
        Route::get('/', 'Auth\SecurityQuestionController@authenticated');
    });

    // UserSecurityQuestion api 
    Route::group(['prefix' => 'authenticated-user-security-question'], function () {
        Route::get('/', 'Auth\UserSecurityQuestionController@authenticated');
        Route::post('/save', 'Auth\UserSecurityQuestionController@saveAuthenticated');
    });
});

// Public
Route::group(['middleware' => 'guest:api'], function () {
    Route::post('login', 'Auth\LoginController@login');
    Route::post('register', 'Auth\RegisterController@register');

    // User api
    Route::group(['prefix' => 'user'], function () {
        Route::post('/validate-username', 'Auth\UserController@validateUserName');
    });

    // SecurityQuestion api 
    Route::group(['prefix' => 'security-question'], function () {
        Route::get('/', 'Auth\SecurityQuestionController@index');
        Route::post('/save', 'Auth\SecurityQuestionController@save');
        Route::post('/delete', 'Auth\SecurityQuestionController@delete');
    });

    // UserSecurityQuestion api 
    Route::group(['prefix' => 'user-security-question'], function () {
        Route::get('/', 'Auth\UserSecurityQuestionController@index');
        Route::post('/save', 'Auth\UserSecurityQuestionController@save');
        Route::post('/delete', 'Auth\UserSecurityQuestionController@delete');
    });

    // Verification api 
    Route::group(['prefix' => 'verification'], function () {
        Route::post('/send-message', 'VerificationCodeController@sendCustomMessage');
    });

    // SendEmail api 
    Route::group(['prefix' => 'email'], function () {
        Route::post('/send-email', 'SendEmailController@sendEmail');
    });

    // ForgotPassword api 
    Route::group(['prefix' => 'forgot-password'], function () {
        Route::post('/user-security-questions', 'Auth\ForgotPasswordController@getUserSecurityQuestion');
        Route::post('/check-security-question', 'Auth\ForgotPasswordController@checkUserSecurityQuestion');
    });

    Route::post('password/email', 'Auth\ForgotPasswordController@sendResetLinkEmail');
    Route::post('password/reset', 'Auth\ResetPasswordController@reset');

    // Custom Reset Password
    Route::post('password/custom-reset', 'Auth\ResetPasswordController@customResetPassword');

    Route::post('email/verify/{user}', 'Auth\VerificationController@verify')->name('verification.verify');
    Route::post('email/resend', 'Auth\VerificationController@resend');

    Route::post('oauth/{driver}', 'Auth\OAuthController@redirectToProvider');
    Route::get('oauth/{driver}/callback', 'Auth\OAuthController@handleProviderCallback')->name('oauth.callback');
});
