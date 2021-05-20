<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Rating extends Model
{
    protected $fillable = [
        'user_id',
        'reference_id',
        'category',
        'description',
        'rate',
        'metadata',
    ];
}
