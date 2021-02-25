<?php

namespace App;

use Illuminate\Support\Str;

class Feedback extends BaseModel {

    protected $table = 'feedbacks';

    protected $fillable = ['id', 'content', 'email', 'phone', 'first_name', 'last_name'];

    protected $appends = ['preview'];

    public function responses()
    {
        return $this->hasMany(Response::class, 'feedback_id');
    }

    public function getPreviewAttribute() {

        return Str::limit($this->content, 100);
    }

    public function delete()
    {
        // delete all responses
        $this->responses()->delete();

        // delete the feedback
        return parent::delete();
    }
}
