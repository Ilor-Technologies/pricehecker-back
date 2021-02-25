<?php

namespace App;

use EloquentFilter\Filterable;
use Exception;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
use App\Api\Traits\HandlesEventLogging;

use Illuminate\Support\Str;
use Tymon\JWTAuth\Facades\JWTAuth;
use Yajra\Auditable\AuditableTrait;

/**
 * @property mixed times_in_search
 * @property mixed times_in_survey
 */
class Good extends BaseModel
{
    protected $table = 'goods';
    protected $dates = ['deleted_at'];

    protected $fillable = ['id',
        'all_good_id', 'full_description', 'vendor_id',
        'price', 'warehouse_id', 'property', 'details', 'sku',
        'times_in_search', 'times_in_survey'
    ];

    protected $appends = ['properties', 'price_formatted', 'search_count', 'view_count'];

    public function getSearchCountAttribute()
    {
        return $this->times_in_search;
    }

    public function getViewCountAttribute()
    {
        return $this->times_in_survey;
    }

    public function pictures()
    {
        return $this->hasManyThrough(Picture::class, GoodPicture::class, 'good_id', 'id', 'id', 'picture_id');
    }

    public function reviews()
    {
        return $this->hasMany(GoodReview::class, 'good_id');
    }

    public function vendor()
    {
        return $this->belongsTo(Vendor::class, 'vendor_id');
    }

    public function warehouse()
    {
        return $this->belongsTo(Warehouse::class, 'warehouse_id')->with('address');
    }

//    public function category() {
//        return $this->hasOneThrough(Category::class, AllGoods::class);
//    }

    public function getPriceFormattedAttribute()
    {
        if (!$this->price) return '';
        return '₦ ' . number_format($this->price, 2, '.', ',');
    }

    public function getPropertiesAttribute()
    {
        $template = $this->property;

        if ($template == null || !$template) {
            return [];
        }

        $data = [];
        try {
            $tplData = (array)json_decode($template, true);

            foreach ($tplData as $key => $value) {
                if ($key && ($desc = $this->getTemplateDesc($key))) {
                    $desc['value'] = $value;
                    $data[] = $desc;
                }
            }
        } catch (\Exception $e) {
        }

        return $data;
    }

    private function getTemplateDesc($key)
    {
        $template = $this->detail->properties_template;

        if ($template == null || !count($template)) {
            return false;
        }

        foreach ($template as $temp) {
            if ($temp['name'] = $key) {
                return $temp;
            }
        }

        return false;
    }

    public function detail()
    {
        return $this->belongsTo(AllGoods::class, 'all_good_id');
    }

    public function deliveryZones()
    {
        return $this->belongsToMany('App\DeliveryZone')
            ->using('App\DeliveryZoneRate');
    }

    /**
     * Generate sku like xmp-0032
     */
    protected function generateSku($string, $id = null, $l = 2)
    {
        $results = ''; # empty string
        $vowels = ['a', 'e', 'i', 'o', 'u', 'y']; # vowels
        preg_match_all('/[A-Z][a-z]*/', ucfirst($string), $m); # Match every word that begins with a capital letter, ucfirst() is in case there is no uppercase letter
        foreach ($m[0] as $substring) {
            $substring = str_replace($vowels, '', strtolower($substring)); # String to lower case and remove all vowels
            $results .= preg_replace('/([a-z]{' . $l . '})(.*)/', '$1', $substring); # Extract the first N letters.
        }
        $results .= '-' . str_pad($id, 4, 0, STR_PAD_LEFT); # Add the ID
        return $results;
    }


    public function scopeOwned($query)
    {
        try {
            $user = auth()->user();

            if ($user->hasRole(Role::VENDOR)) {
                //return $query->where('created_by', $user->id)
                $vendor = $user->vendor;
                return $query->where('vendor_id', $vendor ? $vendor->id : '');
            } else if ($user->can('view_goods_by_other_users')) {
                return $query;
            }
        } catch (Exception $e) {
            return $query->where('vendor_id', '');
        }

        $vendors = Vendor::query()->default()->pluck('id')->toArray();
        //this is meant to return NO result
        return $query->whereIn('vendor_id', $vendors);
    }

    public static function boot()
    {
        parent::boot();
        static::creating(function ($model) {
            $model->{$model->getKeyName()} = (string)Str::orderedUuid();
        });

        static::created(function ($model) {
            PriceChange::query()->create([
                'all_good_id' => $model->all_good_id,
                'vendor_id' => $model->vendor_id,
                'price' => $model->price,
                'created_by' => auth()->check() ? auth()->id() : null
            ]);
        });

        static::updating(function ($model) {
            $oldPrice = $model->getOriginal('price');
            $newPrice = $model->price ? $model->price : null;

            if ($oldPrice && $newPrice && $oldPrice != $newPrice) {
                PriceChange::query()->create([
                    'all_good_id' => $model->all_good_id,
                    'vendor_id' => $model->vendor_id,
                    'price' => $model->price,
                    'created_by' => auth()->check() ? auth()->id() : null
                ]);
            }
        });
    }
}
