<?php

namespace App;

use Illuminate\Support\Facades\DB;

class GoodPicture extends BaseModel
{
//    protected $appends = ['picture', 'good'];
    protected $table = 'good_picture';

    protected $fillable = ['id', 'picture_id', 'good_id'];

    public function picture()
    {
        return $this->belongsTo(Picture::class, 'picture_id');
    }

    public function good()
    {
        return $this->belongsTo(Good::class, 'good_id');
    }
}
