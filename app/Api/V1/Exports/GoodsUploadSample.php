<?php


namespace App\Api\V1\Exports;


use App\Good;
use Illuminate\Support\Collection;
use Maatwebsite\Excel\Concerns\FromCollection as FromCollectionAlias;

class GoodsUploadSample implements FromCollectionAlias
{

    /**
     * @return Collection
     */
    public function collection()
    {
        $data = [
            ['category', 'brand', 'specification', 'description', 'price']
        ];
        return collect($data);
    }
}
