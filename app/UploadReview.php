<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class UploadReview extends Model
{
    protected $fillable = [
        'upload_id',
        'user_id',
        'comment',
        'rate',
        'status',
        'metadata'
    ];
    
    public function upload()
    {
        return $this->belongsTo('App\Upload');
    }
}
