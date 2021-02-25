<?php

namespace App;

use App\Api\Traits\HasComments;
use Exception;
use Illuminate\Database\Eloquent\Builder;
use Tymon\JWTAuth\Facades\JWTAuth;

class SurveyReport extends BaseModel
{
    use HasComments;
    protected $table = 'survey_reports';

    protected $fillable = ['id', 'description', 'structure', 'title', 'created_by', 'institution_id', 'approved_by', 'approved_at'];

    protected $appends = ['request_approval'];

    public function getRequestApprovalAttribute() {
        return $this->approved_by !== null && $this->created_by == auth()->id();
    }

//    protected static function boot()
//    {
//        parent::boot();
//
//        static::addGlobalScope('with_options', function (Builder $builder) {
//            $builder->owned()
//                ->with('comments.commentor')
//                ->with('creator')
//                ->with('updater')
//                ->with('reviewer')
//                ->with('approver');
//        });
//    }
    //relationships
    public function approver()
    {
        return $this->belongsTo(User::class, 'approved_by');
    }
    public function reviewer()
    {
        return $this->belongsTo(User::class, 'reviewed_by');
    }
    public function scopeOwned($query)
    {
        try {
            $user = JWTAuth::parseToken()->authenticate();
            if ($user->hasRole(Role::SYSADMIN)) {
                return $query;
            } elseif ($user->hasAnyPermission(['review_survey_report', 'approve_survey_report', 'delete_survey_report'])) {
                return $query->where('institution_id', $user->internalUser()->first()->institution_id);
            } elseif ($user->hasAnyPermission(['create_survey_report'])) {
                return $query->where('created_by', $user->id);
            } else {
                return $query->where('created_by', -1);
            }
        } catch (Exception $e) {
            return $query->where('created_by', -1);
        }
    }
}
