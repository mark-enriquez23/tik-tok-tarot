<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Faq extends Model
{
    protected $fillable = [
        'subtitle',
        'categories',
        'metadata'
    ];

    protected $casts = [
        'categories' => 'array',
    ];
}
