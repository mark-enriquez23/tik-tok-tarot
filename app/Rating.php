<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Rating extends Model
{
    protected $fillable = [
        'user_id',
        'upload_id',
        'description',
        'rate',
        'metadata',
    ];
}
