<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Suggestion extends Model
{
    protected $fillable = [
        'video_id', 'message'
    ];

    public function video(){
        return $this->belongsTo('App\Video');
    }
}
