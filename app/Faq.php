<?php

namespace App;

class Faq extends BaseModel
{

    protected $table = 'faqs';

    protected $fillable = ['id', 'question', 'answer'];

    public function user()
    {
        return $this->belongsTo(User::class, 'user_id');
    }
}
