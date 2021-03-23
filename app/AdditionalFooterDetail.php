<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class AdditionalFooterDetail extends Model
{
    protected $fillable = [
        'title',
        'phone_number',
        'address',
    ];

    public function footer()
    {
        return $this->belongsTo(Footer::class);
    }
}
