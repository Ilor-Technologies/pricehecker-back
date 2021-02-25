<?php

namespace App;

class VendorCategory extends BaseModel
{
    protected $fillable = ['id', 'vendor_id', 'category_id', 'created_by', 'updated_by'];

    protected $hidden = ['vendor_id', 'category_id', 'created_at', 'updated_at'];

    public function vendor()
    {
        return $this->belongsTo(Vendor::class, 'user_id');
    }

    public function category()
    {
        return $this->belongsTo(Category::class, 'category_id');
    }
}
