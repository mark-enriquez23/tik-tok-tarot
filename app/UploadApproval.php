<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class UploadApproval extends Model
{
    protected $fillable = [
        'user_id',
        'upload_id',
        'is_approved',
    ];

    public function upload()
    {
        return $this->belongsTo('App\Upload');
    }

    public function user()
    {
        return $this->belongsTo('App\User');
    }
}
