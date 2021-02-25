<?php

namespace App;

class DocumentType extends BaseModel
{

    protected $table = 'document_types';

    protected $fillable = ['id', 'name', 'description'];

    protected $hidden = ['created_by', 'updated_by'];

    
}
