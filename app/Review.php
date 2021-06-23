<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Review extends Model
{
    protected $fillable = [
        'user_id', 'vlog_id', 'stars', 'name', 'email', 'message', 'metadata'
    ];

    protected $casts = [
        'metadata' => 'array'
    ];

    public function vlog(){
        return $this->belongsTo('App\Video');
    }

}
