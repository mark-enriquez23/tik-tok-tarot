<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class GeneralInformation extends Model
{
    protected $fillable = [
        'sub_title',
        'location',
        'email',
        'phone_number',
        'metadata',
    ];
}
