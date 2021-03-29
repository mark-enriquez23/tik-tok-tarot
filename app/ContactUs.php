<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class ContactUs extends Model
{
    protected $fillable = [
        'sub_title',
        'location',
        'email',
        'phone_number',
        'metadata',
    ];

    protected $casts = [
        'location' => 'array',
    ];
}
