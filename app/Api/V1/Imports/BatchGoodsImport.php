<?php


namespace App\Api\V1\Imports;


use App\AllGoods;
use App\Category;
use App\Good;
use App\Role;
use App\Vendor;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\Cache;
use Illuminate\Support\Facades\Log;
use Maatwebsite\Excel\Concerns\ToModel;
use Maatwebsite\Excel\Concerns\WithHeadingRow;

class BatchGoodsImport implements ToModel, WithHeadingRow
{

    /**
     * @param array $row
     *
     * @return Model|Model[]|null
     */
    public function model(array $row)
    {
        $uploadCategory = Cache::get('upload_category', 'General');;
        $authUser = auth()->user();
        if ($authUser->hasRole(Role::VENDOR)) {
            $vendor = $authUser->vendor;
        } else {
            $vendor = Vendor::query()->default()->first();
        }

        if (!$vendor) return null;

        if ((!isset($row['item']) && !isset($row['brand'])) || !isset($row['price'])) {
            return null;
        }

        $categoryName = isset($row['category']) ? $row['category'] : '';
        $description = isset($row['description']) ? $row['description'] : '';
        $specification = isset($row['specification']) ? $row['specification'] : '';

        $goodsName = isset($row['item']) ? $row['item'] : $row['brand'];
        $price = (float)$row['price'];

        if (strtolower($goodsName) === 'null' || !$price) {
            return null;
        }

        if (!$categoryName) {
            $categoryName = Cache::get('upload_category', 'General');
        }


        if (!$categoryName) {
//            guess category
            $guesing = AllGoods::query()->where('name', $goodsName)->with('category')->first();
            if ($guesing)  {
                $category = $guesing->category;
            } else {
                $category = Category::query()->firstOrCreate(['name' => 'General'], ['created_by' => $authUser->id]);
            }
        } else {
            $category = Category::query()->firstOrCreate(['name' => $categoryName], ['created_by' => $authUser->id]);
        }

        $allGoods = AllGoods::query()->where(['category_id' => $category->id, 'name' => $goodsName])
            ->where('property_template', 'like', "%\"specification" . "\":\"%%\"%")->first();

        if (!$allGoods) {
            $allGoods = AllGoods::query()->create(['category_id' => $category->id, 'name' => $goodsName,
                'property_template' => '{"specification":"text"}', 'created_by' => $authUser->id]);
        }

        $goodsData = Good::query()->where(['vendor_id' => $vendor->id, 'all_good_id' => $allGoods->id])
            ->where('property', "like", "%\"specification" . "\":\"$specification\"%")->first();

        if (!$goodsData) {
            $goodsData = Good::query()->create(
                ['vendor_id' => $vendor->id, 'all_good_id' => $allGoods->id, 'property' => '{"specification":"'.$specification.'"}',
                    'created_by' => $authUser->id, 'price' => $price]
            );
        }

        $goodsData->update(['price' => $price, 'full_description' => $description, 'details' => $description]);

        Cache::forever('upload_category', $categoryName);

        return null;
    }
}
