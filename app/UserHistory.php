<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class UserHistory extends Model
{
    protected $fillable = [
        'user_id', 'video_id'
    ];

    public function user(){
        return $this->belongsTo('App\User');
    }

    public function video(){
        return $this->belongsTo('App\Video');
    }
}
