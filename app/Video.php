<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Video extends Model
{
    protected $fillable = [
        'user_id', 'title', 'description', 'file_name', 'is_approved', 'is_featured'
    ];

    public function user(){
        return $this->belongsTo('App\User');
    }

    public static function GetAllVideos($status, $featured){
        $featParams = !$featured ? 0 : $featured;

        return static::where('is_approved', $status)->where('is_featured', $featParams)->with('user');
    }
}
