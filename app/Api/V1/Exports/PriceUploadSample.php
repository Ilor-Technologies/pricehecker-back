<?php


namespace App\Api\V1\Exports;


use App\Good;
use App\Role;
use App\User;
use App\Vendor;
use Illuminate\Support\Collection;
use Maatwebsite\Excel\Concerns\FromCollection;

class PriceUploadSample implements FromCollection
{

    /**
     * @return Collection
     */
    public function collection()
    {
        $selectedGoods = request('goods');
        $goods = Good::query()->with('detail.category');
        if ($selectedGoods) {
            $selectedGoods = explode(',', $selectedGoods);
            if (count($selectedGoods)) {
                $goods->whereIn('id', $selectedGoods);
            }
        }
        $authUser = auth()->user();
        if ($authUser->hasRole(Role::VENDOR)) {
            $goods = $goods->owned()->get();
        } else {
            $vendorsList = Vendor::query()->default()->pluck('id')->toArray();
            $goods = $goods->whereIn('vendor_id', $vendorsList)->get();
        }
        $data = [['category', 'brand', 'price', ]];
        foreach ($goods as $good) {
            if (!$good->detail) continue;
            $data[] = [ ($good->detail->category ? $good->detail->category->name : ''), $good->detail->name, ''];
        }

        return collect($data);
    }
}
