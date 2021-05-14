<?php

namespace App;

use App\Notifications\ResetPassword;
use App\Notifications\VerifyEmail;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
// use Illuminate\Contracts\Auth\MustVerifyEmail;
use Tymon\JWTAuth\Contracts\JWTSubject;

class User extends Authenticatable implements JWTSubject //, MustVerifyEmail
{
    use Notifiable;

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'category_id', 'username', 'firstName', 'lastName', 'gender', 'email', 'is_approved', 'referral_code', 'phone_number', 'visible', 'is_banned', 'role_id', 'is_hired', 'password',
    ];

    /**
     * The attributes that should be hidden for arrays.
     *
     * @var array
     */
    protected $hidden = [
        'password', 'remember_token',
    ];

    /**
     * The attributes that should be cast to native types.
     *
     * @var array
     */
    protected $casts = [
        'email_verified_at' => 'datetime',
    ];

    /**
     * The accessors to append to the model's array form.
     *
     * @var array
     */
    protected $appends = [
        'photo_url',
    ];

    /**
     * Get the profile photo URL attribute.
     *
     * @return string
     */
    public function getPhotoUrlAttribute()
    {
        return 'https://www.gravatar.com/avatar/'.md5(strtolower($this->email)).'.jpg?s=200&d=mm';
    }

    /**
     * Get the oauth providers.
     *
     * @return \Illuminate\Database\Eloquent\Relations\HasMany
     */
    public function oauthProviders()
    {
        return $this->hasMany(OAuthProvider::class);
    }

    /**
     * Send the password reset notification.
     *
     * @param  string  $token
     * @return void
     */
    public function sendPasswordResetNotification($token)
    {
        $this->notify(new ResetPassword($token));
    }

    /**
     * Send the email verification notification.
     *
     * @return void
     */
    public function sendEmailVerificationNotification()
    {
        $this->notify(new VerifyEmail);
    }

    /**
     * Get the Security Questions.
     *
     * @return \Illuminate\Database\Eloquent\Relations\HasMany
     */
    public function userSecurityQuestions() {
        return $this->hasMany('App\UserSecurityQuestion');
    }

    /**
     * Get the phoneVerifications.
     *
     * @return \Illuminate\Database\Eloquent\Relations\HasMany
     */
    public function phoneverifications() {
        return $this->hasMany('App\PhoneVerification');
    }

    public function userDetails() {
        return $this->hasMany('App\UserDetail');
    }

    public static function getUserWithDetails(int $id){
        return static::where('id', $id)->with('userDetails')->get();
    }

    /**
     * @return int
     */
    public function getJWTIdentifier()
    {
        return $this->getKey();
    }

    /**
     * @return array
     */
    public function getJWTCustomClaims()
    {
        return [];
    }

    public function getUserByReferralCode(string $code)
    {
        return static::where('referral_code',$code)->get()->first();
    }

    public function role()
    {
        return $this->belongsTo('App\Role');
    }

    public function testimonials() {
        return $this->hasMany('App\Tetimonial');
    }

    public function uploads(){
        return $this->hasMany('App\Upload');
    }

    public function credit()
    {
        return $this->hasOne('App\Credit');
    }

    public function referral()
    {
        return $this->hasMany('App\Invites', 'referral_code', 'referral_code');
    }
}
