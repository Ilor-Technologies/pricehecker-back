<?php

namespace App;

use Carbon\Carbon;
/**
 * @property mixed vendor_id
 * @property mixed all_good_id
 */
class PriceChange extends BaseModel {
    protected $fillable = ['id', 'all_good_id', 'vendor_id', 'price'];

    public static function getTopFive() {
        $allGoods = AllGoods::query()->orderBy('name')->get();
        $frequency = [];
//        loop through all the goods registered
        $from = Carbon::now()->addMonth()->format('Y-m-d H:i:s');
        foreach ($allGoods as $all) {
            $count = PriceChange::query()->where('all_good_id', $all->id)->where('created_at', '>=', $from)->count();
            if (count($frequency) > 4) {
                $smallest = 0;
//                loop maximum of five times
                foreach ($frequency as $index => $item) {
                    if ($item['count'] < $count) {
                        $smallest = $index;
                    }
                }
                $frequency[$smallest] = [
                    'count' => $count,
                    'record' => $all
                ];
            } else {
                $frequency[] = [
                    'count' => $count,
                    'record' => $all
                ];
            }
        }
        $frequencyTable = [];
        foreach ($frequency as $freq) {
            $allGood = $freq['record'];
            if ($allGood) {
                $priceChange = PriceChange::query()->select(['price', 'created_at'])
                    ->where(['all_good_id' => $allGood->id])->latest()->get();
                $tGoods = [];
                foreach ($priceChange as $change) {
                    $time = Carbon::createFromFormat('Y-m-d H:i:s', date('Y-m-d H:i:s',
                        strtotime($change->created_at)))->getTimestamp();
                    $tGoods[] = [
                        'name' => $time,
                        'value' => $change->price,
                        'vendor' => $change->vendor,
                    ];
                }
                $array = [
                    'name' => $allGood->name,
                    'series' => $tGoods
                ];
                $frequencyTable[] = $array;
            }
        }
        return $frequencyTable;
    }

    public static function trendFor($allGood, $from = '', $to = '') {
        $query = PriceChange::query()->select(['price', 'created_at'])->where(['all_good_id' => $allGood->id])->latest();
        if (!$from) {
            $from = Carbon::now()->subDays(7)->format('Y-m-d H:i:s');
        }

        if ($from && $to) {
            $query = $query->whereBetween('created_at', [$from, $to]);
        } else if ($from) {
            $query = $query->where('created_at', '>=', $from);
        } else if ($to) {
            $query = $query->where('created_at', '<=', $to);
        }
        $priceChange = $query->get();
        $tGoods = [];
        foreach ($priceChange as $change) {
            $time = Carbon::createFromFormat('Y-m-d H:i:s', date('Y-m-d H:i:s',
                strtotime($change->created_at)))->getTimestamp();
            $tGoods[] = [
                'name' => $time,
                'value' => $change->price,
                'vendor' => $change->vendor,
            ];
        }
        $array = [
            'name' => $allGood->name,
            'series' => $tGoods
        ];
        return [$array];
    }

    protected function vendor() {
        return $this->belongsTo(Vendor::class, 'vendor_id');
    }

    protected function allGood() {
        return $this->belongsTo(AllGoods::class, 'all_good_id');
    }
}
