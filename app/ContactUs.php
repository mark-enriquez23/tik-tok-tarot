<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class ContactUs extends Model
{
    protected $fillable = [
        'email',
        'subject',
        'body',
        'metadata',
    ];
}
