<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Freebie extends Model
{
    protected $fillable = [
        'freebie_name', 'description', 'points', 'photo', 'is_active'
    ];
}
