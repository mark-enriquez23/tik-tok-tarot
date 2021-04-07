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

    // Verification api
    Route::group(['prefix' => 'verification'], function () {
        // Route::post('/send-message', 'PhoneVerificationController@sendCustomMessage');
        Route::post('/verify-user', 'PhoneVerificationController@verifyUser');
    });

    // Upload api
    Route::group(['prefix' => 'upload'], function () {
        Route::post('/upload-video', 'UploadController@uploadVideo');
    });

    // Testimonial api
    Route::group(['prefix' => 'testimonial'], function () {
        Route::get('/', 'TestimonialController@index');
        Route::post('/save', 'TestimonialController@save');
        Route::post('/delete', 'TestimonialController@delete');
    });
});

// Public
Route::group(['middleware' => 'guest:api'], function () {
    Route::post('login', 'Auth\LoginController@login');
    Route::post('register', 'Auth\RegisterController@register');

    // User api
    Route::group(['prefix' => 'user'], function () {
        Route::post('/validate-username', 'Auth\UserController@validateUserName');
        Route::post('/validate-email', 'Auth\UserController@validateEmail');
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

    // Varification Controller
    Route::post('email/verify/{user}', 'Auth\VerificationController@verify')->name('verification.verify');
    Route::post('email/resend', 'Auth\VerificationController@resend');

    // Footer
    Route::get('/footer', 'FooterController@fetchFooter');
    Route::post('/footer/save', 'FooterController@save');

    // How To
    Route::get('/how-to', 'HowToController@fetchHowTo');
    Route::post('/how-to/save', 'HowToController@save');

    // Faq
    Route::get('/faq', 'FaqController@fetchFaq');
    Route::post('/faq/save', 'FaqController@save');

    // Upload api
    Route::group(['prefix' => 'upload'], function () {
        Route::get('/featured-uploads/{typeName}', 'UploadController@fetchFeaturedUpload');
        Route::post('/save', 'UploadController@save');
    });

    // Contact us api
    Route::group(['prefix' => 'contact-us'], function () {
        Route::get('/', 'ContactUsController@fetchContactUs');
        Route::post('/save', 'ContactUsController@save');
    });

    // About us api
    Route::group(['prefix' => 'about-us'], function () {
        Route::get('/', 'AboutUsController@fetchAboutUs');
        Route::post('/save', 'AboutUsController@save');
    });

    // General Info api
    Route::group(['prefix' => 'general-info'], function () {
        Route::get('/', 'GeneralInformationController@fetchGeneralInformation');
        Route::post('/save', 'GeneralInformationController@save');
    });

    // Mailchimp api
    Route::group(['prefix' => 'mailchimp'], function () {
        Route::get('/','MailchimpController@getLists');
        Route::post('/list-with-parameter','MailchimpController@getListWithParameter');
        Route::post('/check-if-subscribed','MailchimpController@checkIfSubscribed');
        Route::post('/subscribe','MailchimpController@subscribe');
        Route::get('/get-subscribers','MailchimpController@getSubscribers');
    });

    // Price api
    Route::group(['prefix' => 'price'], function () {
        Route::get('/', 'PriceController@fetchPrice');
        Route::post('/save', 'PriceController@save');
    });
    
    // Role api
    Route::group(['prefix' => 'role'], function () {
        Route::get('/', 'RoleController@index');
    });

    // Users api
    Route::group(['prefix' => 'user'], function () {
        Route::get('/fetch-readers', 'Auth\UserController@fetchReaders');
    });
    // Route::get('role', 'RoleController@index');

    Route::post('oauth/{driver}', 'Auth\OAuthController@redirectToProvider');
    Route::get('oauth/{driver}/callback', 'Auth\OAuthController@handleProviderCallback')->name('oauth.callback');
}); 

