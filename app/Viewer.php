<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Viewer extends Model
{
    protected $fillable = [
        'user_id',
        'upload_id',
        'is_viewing',
        'is_active',
        'metadata',
    ];

    public function user(){
        return $this->belongsTo('App\User');
    }

    public function upload(){
        return $this->belongsTo('App\Upload');
    }
}
