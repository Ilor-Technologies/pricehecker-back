<?php

namespace App;

use Exception;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Str;

use Tymon\JWTAuth\Facades\JWTAuth;
use Yajra\Auditable\AuditableTrait;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\SoftDeletes;


class Task extends BaseModel
{
    
    protected $table = 'tasks';

    protected $appends = [
        'module_item'
    ];
    
    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = ['id',
        'description', 'module_id', 'task_type_id', 'approval_id'
    ];

    /**
     * The attributes that should be hidden for arrays.
     *
     * @var array
     */
    protected $hidden = ['created_at', 'updated_at'];

    public function taskType()
    {
        return $this->belongsTo('App\TaskType', 'task_type_id');
    }
    public function approval()
    {
        return $this->belongsTo('App\Approval', 'approval_id');
    }
    public function scopeOwned(Builder $query)
    {
        $user = JWTAuth::parseToken()->authenticate();
        if ( $user->can('view_all_approval_requests') )  {
             return $query;
        }

        return $query->where('created_by', $user->id)
                ->union($this->needMyAttention($query));  
    }
    public function scopeNeedMyAttention(Builder $query)
    {
        $user = JWTAuth::parseToken()->authenticate();
        
        return $query->whereHas('approval', function ($quer) use ($user) {
                    $quer->whereHas('approvalDetails', function ($que) use ($user) {
                        $que->where('approving_officer_id', '=', $user->id);
                    });
                });
    }

    public function delete()
    {
        // delete approval for this task
        $this->approval()->delete();

        // delete the task
        return parent::delete();
    }
    public function module() {
        return $this->belongsTo('App\Module', 'module_id');
    }
    /**
     * get the item that needs this approval request
     *
     * @return \Illuminate\Database\Eloquent\Collection
     */
    public function getModuleItemAttribute() {
        $itemName = $this->getItemName();
        try {
            return collect( [$itemName => DB::table($this->module->name)->find($this->module->ref_id)] );
        } catch (Exception $e) {
            //
        }

        return null;
    }
    protected function getItemName() {
        try {
            return Str::singular($this->module->name);
        } catch(Exception $e) {
            //
        }
        return null;
    }

}
