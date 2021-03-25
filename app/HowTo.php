<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class HowTo extends Model
{
    protected $fillable = [
        'title',
        'content',
        'additional_data',
        'metadata',
    ];

    protected $casts = [
        'additional_data' => 'array',
    ];
}
