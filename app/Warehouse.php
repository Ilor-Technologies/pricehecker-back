<?php

namespace App;

use EloquentFilter\Filterable;
use Exception;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\DB;

use Tymon\JWTAuth\Facades\JWTAuth;
use Yajra\Auditable\AuditableTrait;

class Warehouse extends BaseModel {

    protected $table = 'warehouses';

    protected $fillable = ['id', 'name', 'address_id', 'vendor_id'];

    public function scopeOwned($query) {
        try {
            $user = JWTAuth::parseToken()->authenticate();

            if ($user->hasRole(Role::VENDOR)) {
                //return $query->where('created_by', $user->id)
                return $query->where('vendor_id', $user->vendor ? $user->vendor->id : -1);
            } else if ($user->can('view_warehouses_by_other_users')) {
                return $query;
            }
        } catch (Exception $e) {
        }
        return $query->whereNull('vendor_id');
    }

    public function goods() {
        return $this->hasMany(Good::class, 'warehouse_id');
    }

    public function vendor() {
        return $this->belongsTo(Vendor::class, 'vendor_id');
    }

    public function address() {
        return $this->belongsTo(Address::class, 'address_id')->with('city', 'state');
    }

    /**
     * check that the passed warehouse is avaliable in db
     *
     * @return id of valid warehouse|bool
     */
    public function isValidWarehouse(string $warehouse) {
        $warehouse = strtolower($warehouse);
        $warehouses = $this->pluck('name')->toArray();
        $warehouses = array_map('trim', array_map('strtolower', $warehouses));
        if (in_array($warehouse, $warehouses)) {
            $warehouse = $this->where('name', $warehouse)->first();
            return $warehouse->id;
        }
        return false;
    }
}
