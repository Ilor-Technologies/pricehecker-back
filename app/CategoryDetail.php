<?php

namespace App;


class CategoryDetail extends BaseModel
{
    protected $table = 'category_details';
    
    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = ['id',
        'id',
        'category_id',
        'category_details'
    ];

    public function category()
    {
        return $this->belongsTo(Category::class, 'category_id');
    }

}
