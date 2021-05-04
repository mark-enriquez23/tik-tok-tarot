<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class LiveHistory extends Model
{
    protected $fillable = [
        'room_name',
        'room_sid',
        'room_status',
    ];
}
