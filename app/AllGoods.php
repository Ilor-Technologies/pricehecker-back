<?php

namespace App;

use Illuminate\Support\Facades\DB;
use Illuminate\Support\Str;

/**
 * @property mixed property_template
 */
class AllGoods extends BaseModel {

    protected $fillable = ['id', 'name', 'category_id', 'short_description', 'property_template',
        'approval_status', 'approved_by'];

    protected $appends = ['properties_template'];

    protected $hidden = ['approved_by'];

    public static function defaultEmpty() {
        return new self();
    }

    public function goods() {
        $this->hasMany(Good::class);
    }

    public function category() {
//        todo: check on behavior
        return $this->belongsTo(Category::class, 'category_id');
    }

    public function getPropertiesTemplateAttribute() {
//        todo: check on behavior
        $template = $this->property_template;
        $categoryTemplate = $this->category->properties_template;

        if (($template == null || !$template)) {
            return $categoryTemplate;
        }

        $data = [];
        $tplData1 = [];
        $tplData = [];

        try {
            $tplData = (array)json_decode($template, true);
        } catch (\Exception $e) {
        }

        $prop = array_merge($tplData, $tplData1);

        foreach ($prop as $key => $value) {
            if (!trim($key)) {
                continue;
            }
            if($value == 'text') {
                $value = '';
            }
            $values = explode(',', $value);
            $d = ["name" => $key, "type" => ''];
            if (count($values) > 1) {
                $d['type'] = 'select';
            }
            $d['values'] = $values;

            $data[] = $d;
        }

        return array_merge($data, $categoryTemplate);
    }

    public function approver() {
        return $this->belongsTo(User::class, 'approved_by');
    }

    public static function boot()
    {
        parent::boot();
        static::creating(function ($model) {
            $model->{$model->getKeyName()} = (string)Str::orderedUuid();
        });

//        static::created(function ($model) {
//            $address = Address::createDefaultAddress();
//            $defaultVendors = Vendor::query()->default()->get();
//            $data = [];
//            foreach ($defaultVendors as $defaultVendor) {
//                $warehouse = Warehouse::query()->firstOrCreate(['vendor_id' => $defaultVendor->id],
//                    ['address_id' => $address->id, 'name' => '-']);
//
//                $data[] = [
//                    'all_good_id' => $model->id,
//                    'full_description' => $model->short_description ,
//                    'vendor_id' => $defaultVendor->id,
//                    'price' => 0,
//                    'warehouse_id' => $warehouse->id,
//                    'id' => (string)Str::orderedUuid()
//                ];
//            }
//            if (count($data)) {
//                Good::query()->insert($data);
//            }
//        });
    }

}
