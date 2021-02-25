<?php

namespace App;

class Grade extends BaseModel
{
    protected $table ='grades';

    protected $fillable = ['id', 'level', 'description'];

}
