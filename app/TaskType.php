<?php

namespace App;

class TaskType extends BaseModel
{
    
    protected $table = 'task_types';
    
    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = ['id',
        'name', 'description'
    ];

    /**
     * The attributes that should be hidden for arrays.
     *
     * @var array
     */
    protected $hidden = ['created_at', 'updated_at'];

    public function tasks()
    {
        return $this->hasMany('App\Task', 'task_type_id');
    }

}
