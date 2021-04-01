<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Upload extends Model
{
    protected $fillable = [
        'user_id',
        'image',
        'url',
        'upload_type_id',
        'is_featured',
        'status',
        'metadata',
    ];
    
}
