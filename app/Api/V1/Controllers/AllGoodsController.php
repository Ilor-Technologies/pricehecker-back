<?php

namespace App\Api\Controllers;

use App\AllGoods;
use App\Api\Requests\CreateAllGoodsRequest;
use App\Api\Requests\DeleteManyAllGoodsRequest;
use App\Good;
use App\Http\Controllers\Controller;
use App\Vendor;
use App\Warehouse;
use Illuminate\Http\Request;

class AllGoodsController extends Controller
{
    public static function extractProperties()
    {
        $request = request();
        try {
            if ($request->properties) {
                $properties = (array)json_decode($request->properties, true);

                if ($properties && $properties['data']) {
                    $json = [];
                    $types = [];
                    foreach ($properties['data'] as $key => $property) {
                        $name = trim($property['name']);
                        $type = trim($property['type']);
                        if ($name && !in_array($name, $types)) {
                            $json[] = '"' . $name . '":"' . $type . '"';
                            $types[] = strtolower($name);
                        }
                    }

                }

                return '{' . implode(',', $json) . "}";
            }
        } catch(\Exception $e) {}

        return "";
    }

    /**
     * Search all goods for matching data to create new goods record
     *
     * @param Request $request
     * @return \Illuminate\Contracts\Pagination\LengthAwarePaginator
     */
    public function pagedIndex(Request $request) {
        $search = $request->input('search');
        $category = $request->input('category');
        $fromDate = $request->input('from_date');
        $toDate = $request->input('to_date');
        $fD = $fromDate;
        $tD = $toDate;
        $perPage = (int)$request->input('per_page');
        if (!$perPage) {
            $perPage = 15;
        }
        
        if ($fromDate) {
            $fromDate = date('Y-m-d H:i:s', strtotime($fromDate));
        }
        
        if ($toDate) {
            $toDate = date('Y-m-d H:i:s', strtotime($toDate));
        }
        
        $query = AllGoods::query()->with('creator')
            ->where(function ($query) use ($search) {
            $query->where('name', 'like', '%' . $search . '%')
                ->orWhere('short_description', 'like', '%' . $search . '%');
        });
        
        if ($category) {
            $query = $query->where(['category_id' => $category]);
        }
        
        if ($fromDate && $toDate) {
            $query = $query->whereBetween('created_at', [$fromDate, $toDate]);
        } elseif ($fromDate) {
            $query = $query->where('created_at', '>=', $fromDate);
        } elseif ($toDate) {
            $query = $query->where('created_at', '<=', $toDate);
        }
        
        $result = $query->paginate($perPage);
        $append = [];
        if ($search) $append['search'] = $search;
        if ($fromDate) $append['from_date'] = $fD;
        if ($toDate) $append['from_date'] = $tD;
        if ($category) $append['category'] = $category;
        if ($perPage) $append['per_page'] = $perPage;
        
        $result->appends($append);
        
        return $result;
    }
    
    public function index(Request $request) {
        if (($search = $request->search)) {
            return AllGoods::query()->where('name', 'like', $search . '%')
                ->orWhere('short_description', 'like', '%' . $search . '%')->get();
        }
        return [];
    }
    
    public function store(CreateAllGoodsRequest $request) {
        if (AllGoods::query()->where(['name' => $request->name, 'category_id' => $request->category_id])->first()) {
            return $this->withMessage("Goods with provided name already existed in specified category", 400);
        }
        $data = $request->only('name', 'category_id', 'short_description');
        $data['property_template'] = self::extractProperties();
        $data['created_by'] = auth()->id();
        if (!auth()->user()->can('approve_created_goods')) {
            $data['approval_status'] = false;
        } else {
            $data['approved_by'] = auth()->id();
            $data['approval_status'] = true;
        }
        
        if ($created = AllGoods::query()->create($data)) {
            return $this->withJson([
                    'message' => 'New goods/product created successfully']
            );
        }
        
        return $this->withMessage("Unable to create new goods detail.");
    }
    
    public function show($id) {
        $goods = AllGoods::query()->find($id);
        if($goods) {
            return $goods;
        }

        return $this->withMessage('Goods record not found', 404);
    }
    
    public function update(CreateAllGoodsRequest $request, $id) {
        $good = AllGoods::query()->findOrFail($id);
        if (AllGoods::query()
            ->where(['name' => $request->name, 'category_id' => $request->category_id])
            ->where('id', '!=', $id)->first()) {
            return $this->withMessage("Goods with provided name already existed in specified category", 400);
        }
        $data = $request->only('name', 'category_id', 'short_description');
        $data['property_template'] = self::extractProperties();
        $data['updated_by'] = auth()->id();
        if (auth()->user()->can('approve_created_goods')) {
            $data['approval_status'] = false;
            $data['approved_by'] = null;
        } else {
            $data['approval_status'] = true;
            $data['approved_by'] = null;
        }

        if ($good->update($data)) {
            return response()->json([
                    'message' => 'Goods/product updated successfully',]
            );
        }
        
        return $this->withMessage("Unable to update goods detail.");
    }
    
    public function approve($id) {
        $good = AllGoods::query()->findOrFail($id);
        if ($good->approval_status) {
            return response()->json(['status' => 'Goods/product has already been earlier approved']);
        }
        
        if ($good->update(['approval_status' => true, 'approved_by' => auth()->id()])) {
            return response()->json(['status' => 'Approved successfully']);
        }
    
        return $this->withMessage("Unable to complete goods detail approval.");
    }
    
    public function destroy($id) {
        $good = AllGoods::query()->findOrFail($id);
        if ($good->delete()) {
            return response()->json(['message' => 'Goods named ' . $good->name . ' deleted successfully']);
        }
    
        return $this->withMessage("Unable to delete goods record at the moment.");
    }
    
    public function deleteMany(DeleteManyAllGoodsRequest $request) {
        try {
//            return $this->withJson(['message' => count($dt) + ' Items deleted successfully.']);
//            exit();
            $data = (array)$request->dt;
            
            $dt = [];
            foreach ($data as $d) {
                $d = $d;
                if ($d) {
                    $dt[] = $d;
                }
            }
    
            if (($count = count($dt))) {
                AllGoods::query()->whereIn('id', $dt)->delete();
                return $this->withJson(['message' => $count . ' Items deleted successfully.']);
            }
        } catch (\Exception $x) {
        }
        return $this->withMessage('here', 400);
        
    }
    
}
