<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Mailchimp extends Model
{
    protected $fillable = [
        'email',
        'is_subscribed',
        'listId',
        'metadata',
    ];
}
