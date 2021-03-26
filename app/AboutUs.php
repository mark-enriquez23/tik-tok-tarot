<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class AboutUs extends Model
{
    protected $fillable = [
        'title',
        'banner_image',
        'sub_title',
        'content',
        'metadata',
    ];

    protected $casts = [
        'content' => 'array',
    ];
}
