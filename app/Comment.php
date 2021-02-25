<?php

namespace App;

class Comment extends BaseModel
{
    protected $table = 'comments';
    
    protected $fillable = ['id',  'body' ];
    
//    protected static function boot()
//    {
//        parent::boot();
//
//        static::addGlobalScope('latest_first', function (Builder $builder) {
//            $builder->latest();
//        });
//    }

    //relationships
    public function commentable()
    {
        return $this->morphTo();
    }
    public function commentor()
    {
        return $this->belongsTo(User::class, 'created_by');
    }
}
