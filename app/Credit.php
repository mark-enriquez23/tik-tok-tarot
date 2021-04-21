<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Credit extends Model
{
    protected $fillable = [
        'user_id',
        'points',
        'metadata'
    ];

    public function user()
    {
        return $this->belongsTO('App\User');
    }
}
