<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Invites extends Model
{
    protected $fillable = [
        'user_id',
        'reference_code',
        'is_validated'
    ];
}
