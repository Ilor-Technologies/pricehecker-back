<?php

namespace App;

class Response extends BaseModel
{
    protected $table = 'responses';

    protected $fillable = ['id', 'feedback_id', 'content'];

    public function feedback()
    {
        return $this->belongsTo('App\Feedback', 'feedback_id');
    }

    public function responder() {
        return $this->belongsTo(User::class, 'created_by');;
    }

}
