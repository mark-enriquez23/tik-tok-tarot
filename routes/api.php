<?php

use Illuminate\Support\Facades\Route;

########### * Authenticated Routes *###########
Route::group(['middleware' => 'auth:api'], function () {
    Route::post('logout', 'Auth\LoginController@logout');

    //user auth route
    Route::get('/user', 'Auth\UserController@current');
    Route::get('/user/notifications', 'Auth\UserController@getAllNotifications');
    Route::get('/user/notifications/unread', 'Auth\UserController@getUnreadNotifications');
    Route::get('/user/notifications/view', 'Auth\UserController@markAsReadNotifications');
    Route::get('/user/refresh-code/{id}','Auth\UserController@refreshInvitationCode');
    Route::get('/user/referral/{id}', 'Auth\InvitationController@index');
    Route::post('/user/details', 'UserDetailController@store');
    Route::get('/user/details/{id}', 'UserDetailController@show');
    Route::patch('/user/details/update', 'UserDetailController@update');

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

    //FREEBIE API
    Route::group(['prefix' => 'freebie'], function () {
        Route::get('/', 'FreebieController@index');
        Route::get('/{id}', 'FreebieController@getByID');
        Route::get('/fetch/{status}', 'FreebieController@getByStatus');
        Route::post('/create', 'FreebieController@create');
        Route::patch('/update', 'FreebieController@update');
        Route::delete('/delete/{id}', 'FreebieController@destroy');
    });

    //REDEEM API
    Route::group(['prefix' => 'redeem'], function() {
        Route::get('/', 'RedeemController@index');
        Route::get('/user/{id}', 'RedeemController@fetchByUserID');
        Route::get('/freebie/{id}', 'RedeemController@fetchByFreebieID');
        Route::post('/', 'RedeemController@save');
    });

    // USER HISTORY
    Route::group(['prefix' => 'user-history'], function () {
       Route::get('/', 'UserHistoryController@index');
       Route::get('/{id}', 'UserHistoryController@getByID');
       Route::post('/', 'UserHistoryController@create');
       Route::delete('/{id}', 'UserHistoryController@delete');
       Route::delete('/clear/{id}', 'UserHistoryController@deleteAllByUser');
    });

    // Reader api
    Route::group(['prefix' => 'auth-reader'], function () {
        Route::post('/update-reader', 'ReaderController@save');
        Route::post('/change-visibility', 'ReaderController@changeReaderVisibility');
        Route::get('/fetch-reader-by-id/{id}', 'ReaderController@fetchReaderById');
        Route::delete('/remove/{id}', 'ReaderController@removeReader');
    });

    // Credits
    Route::group(['prefix' => 'credit'], function () {
        Route::post('/save', 'CreditController@save');
        Route::get('/list', 'Auth\UserController@userCredit');
        Route::get('/list-by-id/{id}', 'Auth\UserController@userCreditById');
    });

    // Ratings
    Route::group(['prefix' => 'rating'], function () {
        Route::post('/save', 'RatingController@save');
        Route::get('/fetch/{id}/{category}', 'RatingController@getById');
    });

    //VIDEO API
    Route::group(['prefix' => 'vlog'], function (){
        Route::post('/upload', 'VideoController@create');
        Route::patch('/update', 'VideoController@update');
        Route::delete('/delete/{id}', 'VideoController@destroy');
    });


    // LIVE API
    Route::post('video/history/save', 'Video\LiveHistoryController@index');
    Route::post('video/history/update', 'Video\LiveHistoryController@update');

});

########### * Guest Routes *###########
Route::group(['middleware' => 'guest:api'], function () {
    Route::post('login', 'Auth\LoginController@login');
    Route::post('register', 'Auth\RegisterController@register');

    // User api
    Route::group(['prefix' => 'user'], function () {
        Route::get('/validate-username/{username}', 'Auth\UserController@validateUserName');
        Route::get('/validate-email/{email}', 'Auth\UserController@validateEmail');
        Route::post('/validate-password', 'Auth\UserController@validatePassword');
    });

    Route::post('oauth/{driver}', 'Auth\OAuthController@redirectToProvider');
    Route::get('oauth/{driver}/callback', 'Auth\OAuthController@handleProviderCallback')->name('oauth.callback');

});

########### * Public Routes *###########
// SecurityQuestion api
Route::group(['prefix' => 'security-question'], function () {
    Route::get('/', 'Auth\SecurityQuestionController@index');
    Route::post('/save', 'Auth\SecurityQuestionController@save');
    Route::post('/delete', 'Auth\SecurityQuestionController@delete');
});

//VIDEO CHAT AUTH
Route::group(['prefix' => 'video'], function (){
    Route::get('/access_token/{room}', 'Video\AccessTokenController@generate_token');
    Route::get('/{room}', 'Video\LiveHistoryController@searchByRoomName');
    Route::get('/done/{sid}', 'Video\AccessTokenController@streamingDone');
    Route::get('/fetch/{status}', 'Video\fetchChannelsController@index');
    Route::post('/chat', 'Video\AccessTokenController@chat_token');

    Route::post('/history/chat', 'Video\LiveHistoryController@addChatObjByRoomName');
});

// Suggestions
Route::group(['prefix' => 'suggestions'], function () {
    Route::get('/', 'SuggestionController@index');
    Route::get('/{id}', 'SuggestionController@showByID');
    Route::get('/video/{id}', 'SuggestionController@showByVideoID');
    Route::get('/user/{id}', 'SuggestionController@showByUserID');
    Route::post('/create', 'SuggestionController@create');
    Route::patch('/update', 'SuggestionController@update');
    Route::delete('/delete/{id}', 'SuggestionController@delete');
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

// Verification Controller
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

// Video API
Route::group(['prefix' => 'vlog'], function (){
    Route::get('/', 'VideoController@index');
    Route::get('/{id}', 'VideoController@showByID');
    Route::get('/user/{uid}', 'VideoController@showByUser');
    Route::get('/status/{status}/{featured?}', 'VideoController@fetchByStatus');
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

// Reader api
Route::group(['prefix' => 'reader'], function () {
    Route::get('/fetch-readers', 'ReaderController@fetchReaders');
    Route::get('/fetch-visible-readers', 'ReaderController@fetchVisibleReaders');
    Route::get('/fetch-featured-readers', 'ReaderController@fetchFeaturedReaders');
});

// Homepage Counter
Route::group(['prefix' => 'homepage'], function () {
    Route::get('/current-viewers', 'HomePageController@currentViewer');
    Route::get('/vlogs', 'HomePageController@vlogs');
    Route::get('/live-sessions', 'HomePageController@liveSessions');
    Route::post('/search-tool', 'HomePageController@searchTool');
});

// Our Reader
Route::group(['prefix' => 'reader'], function () {
    Route::post('/search', 'ReaderController@search');
    Route::get('/upload-with-reader-detail', 'OurReaderController@uploadWithReaderDetail');
});

// Homepage Counter // private
Route::group(['prefix' => 'category'], function () {
    Route::get('/', 'CategoryController@index');
    Route::post('/save', 'CategoryController@save');
});

// Testimonial api
Route::group(['prefix' => 'testimonial'], function () {
    Route::get('/', 'TestimonialController@index');
    Route::post('/save', 'TestimonialController@save');
    Route::post('/delete', 'TestimonialController@delete');
});
