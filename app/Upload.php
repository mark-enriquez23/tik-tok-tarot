<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Upload extends Model
{
    protected $fillable = [
        'user_id',
        'thumbnail',
        'src',
        'upload_type_id',
        'content',
        'is_featured',
        'status',
        'metadata',
    ];
    
}
