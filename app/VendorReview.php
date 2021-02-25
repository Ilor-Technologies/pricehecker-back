<?php

namespace App;


use Yajra\Auditable\AuditableTrait;
use Illuminate\Database\Eloquent\Model;

class VendorReview extends BaseModel
{
//    public static function boot()
//    {
//        parent::boot();
//
//        static::creating(function ($review) {
//            $review->user_id = $this->reviewer();
//        });
//    }

    protected $table = 'vendor_reviews';
    
    protected $fillable = ['id', 'vendor_id', 'title', 'review_text', 'rating', 'reply_text'];

    public function user()
    {
        return $this->belongsTo('App\User', 'user_id');
    }

    //scopes
    public function scopeIsApproved($query)
    {
        return $query->where('is_approved', true);
    }

    public function addVendorReview(array $review, int $vendorId)
    {
        $data = [
            'user_id' => $this->reviewer(),
            'vendor_id' => $vendorId
        ];
        //make sure their is no duplicate review by same person for same vendor
        return  $this->updateOrCreate($data, $review);
        
        // recalculate ratings for the specified vendor
        //$vendor->recalculateRating();
    }

    //get authenticated user or use 1 (admin)
    protected function reviewer()
    {
        return auth()->check() ? auth()->id() : 1;
    }
}
