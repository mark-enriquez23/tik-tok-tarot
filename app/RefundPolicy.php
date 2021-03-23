<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class RefundPolicy extends Model
{
    protected $fillable = [
        'title',
        'content',
    ];

    public function footer()
    {
        return $this->belongsTo(Footer::class);
    }
}
