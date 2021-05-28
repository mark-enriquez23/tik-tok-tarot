<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Redeem extends Model
{
    protected $fillable = [
        'freebie_id',
        'user_id'
    ];

    protected $table = 'redeem';

}
