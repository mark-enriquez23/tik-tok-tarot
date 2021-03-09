<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class UserSecurityQuestion extends Model
{
    protected $fillable = [
        'user_id',
        'question_id',
        'answer',
        'metadata',
    ];

    public function user(){
        return $this->belongsTo('App\User');
    }
}
