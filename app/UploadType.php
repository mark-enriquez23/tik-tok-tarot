<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class UploadType extends Model
{
    protected $fillable = [
        'name',
    ];

    public function upload()
    {
        return $this->belongsTo('App\Upload');
    }
}
