<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class GeneralInformation extends Model
{
    protected $fillable = [
        'title',
        'sub_title',
        'banner_image',
        'content',
        'metadata',
    ];


    protected $casts = [
        'content' => 'array',
    ];
}
