<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class History extends Model
{
    protected $fillable = [
        'user_id',
        'upload_id',
        'title',
        'description',
        'metadata',
    ];
}
