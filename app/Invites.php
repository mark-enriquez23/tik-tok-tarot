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


    public function referred()
    {
        return $this->belongsTo('App\User', 'referral_code', 'referral_code');
    }
}
