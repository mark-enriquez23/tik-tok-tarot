<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class UserVerification extends Model
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
