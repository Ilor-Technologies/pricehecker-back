<?php
/**
 * Created by PhpStorm.
 * User: gemdajs
 * Date: 1/21/19
 * Time: 11:24 AM
 */

namespace App\Api\Traits;

use Carbon\Carbon;
use Illuminate\Database\Eloquent\SoftDeletes;
use App\User;
use Illuminate\Support\Str;

trait GeneralModelTrait
{
    use SoftDeletes;

//    public $incrementing = false;

    public function __construct(array $attributes = [])
    {
        if (!in_array('deleted_at', $this->dates)) $this->dates[] = 'deleted_at';

        foreach (['updated_by', 'created_by', 'deleted_by'] as $a) {
            if (!in_array($a, $this->fillable)) {
                $this->fillable[] = $a;
            }
        }

        foreach (['time_created', 'time_updated', 'time_deleted', 'was_deleted'] as $a) {
            if (!in_array($a, $this->appends)) {
                $this->appends[] = $a;
            }
        }

        foreach (['created_by', 'updated_by', 'deleted_by', 'updated_at', 'created_at', 'deleted_at'] as $a) {
            if (!in_array($a, $this->hidden)) {
                $this->hidden[] = $a;
            }
        }
        parent::__construct($attributes);
    }

    public function getTimeCreatedAttribute()
    {
        if ($this->created_at) {
            $date = Carbon::createFromFormat('Y-m-d H:i:s', $this->created_at);
            if ($date)
                return $date->format('d/m/Y h:i a');
        }

        return 'N/A';
    }

    public function getTimeUpdatedAttribute()
    {
        if ($this->updated_at) {
            $date = Carbon::createFromFormat('Y-m-d H:i:s', $this->updated_at);
            if ($date)
                return $date->format('d/m/Y h:i a');
        }

        return 'N/A';
    }

    public function getTimeDeletedAttribute()
    {
        if ($this->deleted_at) {
            $date = Carbon::createFromFormat('Y-m-d H:i:s', $this->deleted_at);
            if ($date)
                return $date->format('d/m/Y h:i a');
        }

        return 'N/A';
    }

    /**
     * @param Builder $query
     * @return mixed|Builder
     */
    public function scopeOwned($query)
    {
        return $query->where('created_by', auth()->id());
    }

    /**
     * @param Builder $query
     * @return Builder $query
     */
    public function scopeWithDates($query)
    {
        if (request()->has('from') && ($from = request()->input('from'))) {
            $from = $this->convertDate($from);
            $fromDate = date('Y-m-d', strtotime($from)) . ' 00:00:00';
            $query = $query->where('created_at', '>=', $fromDate);
        }
        if (request()->has('to') && ($from = request()->input('to'))) {
            $from = $this->convertDate($from);
            $toDate = date('Y-m-d', strtotime($from)) . ' 23:59:59';
            $query = $query->where('created_at', '<=', $toDate);
        }

        return $query;
    }

    public function hasBeenDeleted()
    {
        return $this->deleted_at !== null;
    }

    public function getWasDeletedAttribute()
    {
        return $this->hasBeenDeleted();
    }


    private function convertDate($date)
    {
        $chunks = explode(' ', $date);
        if (count($chunks) > 5) {
            $date = [
                $chunks[1],
                $chunks[2],
                $chunks[3]
            ];

            return implode(' ', $date);
        }

        return $date;
    }

    public function creator()
    {
        return $this->belongsTo(User::class, 'created_by');
    }

    public function updater()
    {
        return $this->belongsTo(User::class, 'updated_by');
    }

    public function deleter()
    {
        return $this->belongsTo(User::class, 'deleted_by');
    }

    public static function boot()
    {
        parent::boot();
        static::creating(function ($model) {
            $model->{$model->getKeyName()} = (string)Str::orderedUuid();
        });
    }

    public function getIncrementing()
    {
        return false;
    }

    public function getKeyType()
    {
        return 'string';
    }


}
