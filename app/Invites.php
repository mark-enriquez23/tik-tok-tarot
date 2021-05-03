<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Invites extends Model
{
    protected $fillable = [
        'user_id',
        'referred_by',
        'referral_code',
    ];


    public function referredUser()
    {
        return $this->belongsTo('App\User', 'referral_code', 'referral_code');
    }

    public static function getByReferralCode(string $code)
    {
        return static::where('referral_code', $code)->with('referredUser')->get()->first();
    }
}
