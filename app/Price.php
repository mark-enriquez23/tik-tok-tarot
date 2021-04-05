<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Price extends Model
{
    protected $fillable = [
        'sign',
        'currency',
        'cent',
        'type',
        'feature',
        'metadata'
    ];
    
}
