<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class ContactUs extends Model
{
    protected $fillable = [
        'sub_title',
        'location',
        'email',
        'name',
        'subject',
        'phone_number',
        'metadata',
    ];

    protected $casts = [
        'location' => 'array',
    ];
}
