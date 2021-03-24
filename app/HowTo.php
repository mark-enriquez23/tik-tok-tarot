<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class HowTo extends Model
{
    protected $fillable = [
        'title',
        'content',
        'metadata',
    ];
}
