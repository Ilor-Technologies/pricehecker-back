<?php

namespace App;

class Approval extends BaseModel
{
    
    protected $table = 'approvals';
    
    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = ['id',
        'no_of_approval_required', 'name',
        'description'
    ];

    /**
     * The attributes that should be hidden for arrays.
     *
     * @var array
     */
    protected $hidden = ['created_at', 'updated_at'];

    public function tasks()
    {
        return $this->hasMany('App\Task', 'approval_id');
    }
    public function approvalDetails()
    {
        return $this->hasMany('App\ApprovalDetail', 'approval_id');
    }
    public function delete()
    {
        // delete all approvalDetails
        $this->approvalDetails()->delete();
        // ApprovalDetail::query()->where('approval_id', $this->id)->delete()

        // delete the approval
        return parent::delete();
    }
    /* the original field is added in the table cos we want to make a copy of the original approval every time a new task is created */
    /* the original/default approval is still on the same table. This (the original) is the only one that can be CRUDed */
    /* this is so that the other clones can't be tampered with once they've been created/assigned to a task */
    public function scopeIsOriginal($query) {
        return $query->where('original', '=', 1);
    }
    public function scopeNotIsOriginal($query) {
        return $query->where('original', '=', 0);
    }
    public function scopeHasCorrectNumberOfApprovalDetails($query) {
        return $query->where('no_of_approval_required', '=', $this->approvalDetails()->get()->count());
    }
    public function _hasCorrectNumberOfApprovalDetails() {
        return $this->no_of_approval_required == $this->approvalDetails()->get()->count();
    }
}
