<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class PhoneVerification extends Model
{
    protected $fillable = [
        'user_id',
        'code',
        'metadata',
    ];

    public function user(){
        return $this->belongsTo('App\User');
    }
}
