<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class UserSecurityQuestion extends Model
{
    protected $fillable = [
        'user_id',
        'question_1',
        'question_2',
        'question_3',
        'answer_1',
        'answer_2',
        'answer_3',
        'metadata',
    ];
}
