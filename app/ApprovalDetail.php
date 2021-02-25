<?php

namespace App;

use Exception;

use Yajra\Auditable\AuditableTrait;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;


class ApprovalDetail extends BaseModel
{
    
    protected $table = 'approval_details';
    
    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = ['id',
        'approval_id', 'approving_officer_id', 'approval_order', 'structure'
    ];

    /**
     * The attributes that should be hidden for arrays.
     *
     * @var array
     */
    protected $hidden = ['created_at', 'updated_at'];

//    public static function boot()
//    {
//        parent::boot();
//
//        /* static::created(function ($model) {
//            $approval = $model->approval()->first();
//            $approval->no_of_approval_required = $approval->approvalDetails()->get()->count();
//            $approval->save();
//        }); */
//
//        /*  static::updated(function ($model) {
//            $approval = $model->approval()->first();
//            $approval->no_of_approval_required = $approval->approvalDetails()->get()->count();
//            $approval->save();
//        }); */
//
//
//    }

    public function approval()
    {
        return $this->belongsTo('App\Approval', 'approval_id');
    }

    public function approvingOfficer()
    {
        return $this->belongsTo('App\User', 'approving_officer_id');
    }

    public function scopeNotApprovedOrDisapproved($query)
    {
        return $query->where('status', '<>', 'approved')->orWhere('status', '<>', 'disapproved');
    }
    /* the "original" field is added in the table cos we want to make a copy of the original approval detail every time a new task is created */
    /* the original/default approval detail is still on the same table. This (the original) is the only one that can be CRUDed */
    /* this is so that the other clones can't be tampered with once they've been created/assigned to a task */
    public function scopeIsOriginal($query) {
        return $query->where('original', '=', 1);
    }
    public function scopeNotIsOriginal($query) {
        return $query->where('original', '=', 0);
    }
/*     public function isApprovingOfficer() {
        try {
            $user = auth()->user();
            return $user->has('approvingOfficer');
        } catch(Exception $e) {
            return false;
        }
    } */
}
