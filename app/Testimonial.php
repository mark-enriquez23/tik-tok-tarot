<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Testimonial extends Model
{
    protected $fillable = [
        'user_id',
        'upload_id',
        'title',
        'description',
        'status',
        'metadata',
    ];
}
