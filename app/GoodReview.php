<?php

namespace App;


use Yajra\Auditable\AuditableTrait;
use App\Good;
use Illuminate\Database\Eloquent\Model;
use App\Api\Traits\HandlesEventLogging;

class GoodReview extends BaseModel
{
    protected $table = 'good_reviews';
    
    protected $fillable = ['id', 'good_id', 'title', 'review_text', 'rating', 'reply_text'];

    public function user()
    {
        return $this->belongsTo('App\User', 'user_id');
    }
  
    public function good()
    {
        return $this->belongsTo('App\Good', 'good_id');
    }

    //scopes
    public function scopeIsApproved($query)
    {
        return $query->where('is_approved', true);
    }

    public function addGoodReview(array $review, int $goodId)
    {
        $data = [
            'user_id' => $this->reviewer(),
            'good_id' => $goodId
        ];
        //make sure their is no duplicate review by same person for same good
        return  $this->updateOrCreate($data, $review);
        
        // recalculate ratings for the specified good
        //$good->recalculateRating();
    }

    //get authenticated user or use 1 (admin)
    protected static function reviewer()
    {
        return auth()->check() ? auth()->id() : 1;
    }
}
