<?php


namespace App\Api\V1\Imports;


use App\AllGoods;
use App\Category;
use App\Good;
use App\Role;
use App\Vendor;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\Log;
use Maatwebsite\Excel\Concerns\ToModel;
use Maatwebsite\Excel\Concerns\WithHeadingRow;

class BatchPriceUploadImport implements ToModel, WithHeadingRow
{

    /**
     * @param array $row
     *
     * @return Model|Model[]|null
     */
    public function model(array $row)
    {
        $authUser = auth()->user();
        if ($authUser->hasRole(Role::VENDOR)) {
            $vendor = $authUser->vendor;
        } else {
            $vendor = Vendor::query()->default()->first();
        }

        if (!$vendor) return null;

        if (!isset($row['name']) || !isset($row['price'])) {
            return null;
        }

        $categoryName = isset($row['category']) ? $row['category'] : 'General';
        $details = isset($row['details']) ? $row['details'] : '';
        $specification = isset($row['specification']) ? $row['specification'] : '';

        $goodsName = $row['name'];
        if (!$categoryName) {
//            guess category
            $category = AllGoods::query()->where('name', $goodsName)->first();
            if (!$category) {
                $category = Category::query()->firstOrCreate(['name' => 'General'], ['created_by' => $authUser->id]);
            }
        } else {
            $category = Category::query()->firstOrCreate(['name' => $categoryName], ['created_by' => $authUser->id]);
        }

        $allGoods = AllGoods::query()->where(['category_id' => $category->id, 'name' => $goodsName])
            ->where('property', 'like', "%\"specification" . "\":\"%%\"%")->first();

        if (!$allGoods) {
            $allGoods = AllGoods::query()->create(['category_id' => $category->id, 'name' => $goodsName,
                'property' => '{"specification":"text"}', 'created_by' => $authUser->id]);
        }

        $goodsData = Good::query()->where(['vendor_id' => $vendor->id, 'all_good_id' => $allGoods->id])
            ->where('property', "like", "%\"specification" . "\":\"$specification\"%")->first();

        if (!$goodsData) {
            $goodsData = Good::query()->create(
                ['vendor_id' => $vendor->id, 'all_good_id' => $allGoods->id, 'property' => '{"specification":"'.$specification.'"}',
                    'created_by' => $authUser->id]
            );
        }

        $goodsData->update(['price' => $row['price'], 'full_description' => $details, 'details' => $details]);

        return null;
    }
}
