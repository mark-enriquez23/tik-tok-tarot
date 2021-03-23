<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class TermAndCondition extends Model
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
