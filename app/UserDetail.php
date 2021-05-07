<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class UserDetail extends Model
{
    protected $fillable = [
        'user_id', 'reader_bio', 'address1', 'address2', 'state', 'zip', 'country', 'birthdate', 'profile_photo', 'expertise'
    ];

    public function user(){
        return $this->belongsTo('App\User');
    }

    public static function getUserByID(int $id){
        return static::where('user_id', $id)->with('user')->get();
    }

}
