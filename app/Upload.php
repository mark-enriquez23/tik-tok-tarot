<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Upload extends Model
{
    protected $fillable = [
        'user_id',
        'url',
        'upload_type_id',
        'status',
        'metadata',
    ];
    
}
