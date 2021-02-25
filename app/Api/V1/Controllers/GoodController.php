<?php

namespace App\Api\Controllers;

use App\AllGoods;
use App\Api\Requests\CreateGoodRequest;
use App\Api\Requests\UpdateGoodRequest;
use App\Api\V1\Exports\GoodsUploadSample;
use App\Api\V1\Exports\PriceUploadSample;
use App\Api\V1\Imports\BatchGoodsImport;
use App\Category;
use App\Events\GoodsSearchEvent;
use App\Good;
use App\GoodPicture;
use App\Http\Controllers\Controller;
use App\Picture;
use App\PriceChange;
use App\Role;
use App\User;
use App\Vendor;
use App\Warehouse;
use Carbon\Carbon;
use Dingo\Api\Exception\DeleteResourceFailedException;
use Dingo\Api\Exception\StoreResourceFailedException;
use Dingo\Api\Http\Response;
use Exception;
use Illuminate\Http\Request;
use Illuminate\Http\UploadedFile;
use Illuminate\Support\Arr;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Storage;
use Maatwebsite\Excel\Facades\Excel;

class GoodController extends Controller
{
    protected $tempDirName = 'tmp';

    /**
     *
     * @SWG\Get(
     *   path="/goods",
     *   tags={"Goods"},
     *   summary="Get goods list",
     *   description="",
     *   produces={"application/json"},
     *   security={
     *         {
     *             "Bearer": {}
     *         }
     *     },
     *   @SWG\Response(response=200, description="successful operation",
     *     @SWG\Schema(
     *      type="object",
     *     @SWG\Property(
     *          property="data", type="array", description="Data",
     *          @SWG\Items(
     *              @SWG\Schema(ref="#/definitions/Good")
     *          )
     *     ),
     *     @SWG\Property(property="from", type="string", description="From"),
     *     @SWG\Property(property="to", type="string", description="To"),
     *     @SWG\Property(property="current_page", type="string", description="Current page number"),
     *     @SWG\Property(property="last_page", type="string", description="Last page"),
     *     @SWG\Property(property="total", type="string", description="Total number of result"),
     *     @SWG\Property(property="next_page_url", type="string", description="Next page url"),
     *     @SWG\Property(property="prev_page_url", type="string", description="Previous page url"),
     *     @SWG\Property(property="path", type="string", description="Request path")
     *      )
     *   ),
     * )
     * @param Request $request
     * @return
     */
    public function index(Request $request)
    {
        return $this->performSearch($request);
    }

    /**
     * Search goods
     *
     * @param \Illuminate\Http\Request $request
     * @return \Illuminate\Contracts\Pagination\LengthAwarePaginator
     *
     * @SWG\Get(
     *   path="/search/goods",
     *   tags={"Goods"},
     *   summary="Search goods",
     *   description="",
     *   produces={"application/json"},
     *   security={
     *         {
     *             "Bearer": {}
     *         }
     *     },
     *   @SWG\Response(response=200, description="successful operation",
     *     @SWG\Schema(
     *      type="object",
     *     @SWG\Property(
     *          property="data", type="array", description="Data",
     *          @SWG\Items(
     *              @SWG\Schema(ref="#/definitions/Good")
     *          )
     *     ),
     *     @SWG\Property(property="from", type="string", description="From"),
     *     @SWG\Property(property="to", type="string", description="To"),
     *     @SWG\Property(property="current_page", type="string", description="Current page number"),
     *     @SWG\Property(property="last_page", type="string", description="Last page"),
     *     @SWG\Property(property="total", type="string", description="Total number of result"),
     *     @SWG\Property(property="next_page_url", type="string", description="Next page url"),
     *     @SWG\Property(property="prev_page_url", type="string", description="Previous page url"),
     *     @SWG\Property(property="path", type="string", description="Request path")
     *      )
     *   ),
     * )
     */
    public function search(Request $request)
    {
        $result = $this->performSearch($request);

        event(new GoodsSearchEvent($result, 'search'));
        return $result;
    }

    /**
     * Persist a newly created good.
     *
     * @param CreateGoodRequest $request
     * @param Good $good
     *
     * @return \Dingo\Api\Http\Response
     *
     * @SWG\Post(
     *   path="/goods",
     *   tags={"Goods"},
     *   summary="Create a new goods",
     *   description="",
     *   operationId="update",
     *   produces={"application/json"},
     *   security={
     *         {
     *             "Bearer": {}
     *         }
     *     },
     *   @SWG\Parameter(
     *     name="body",
     *     in="body",
     *     description="the body of the request.",
     *     required=true,
     *     @SWG\Schema(
     *     allOf={
     *       @SWG\Schema(ref="#/definitions/Good"),
     *     }
     *     )
     *   ),
     *   @SWG\Response(response=201, description="Goods created",
     *       @SWG\Schema(ref="#/definitions/Good")
     *   ),
     *   @SWG\Response(response=422, description="The given data was invalid."),
     * )
     */
    public function store(CreateGoodRequest $request)
    {
        //validation passed
        $data = $request->only(['all_good_id', 'full_description', 'vendor_id', 'price', 'warehouse_id', 'details', 'sku',]);
        $data['all_good_id'] = Arr::pull($data, 'all_good_id');
        $authUser = $this->authUser();

        if (!$authUser) {
            return $this->withMessage('Authenticated user\'s record not available!');
        }

        if ($authUser->is_vendor) {
            $data['vendor_id'] = $authUser->vendor->id;
        } else {
            $warehouse = Warehouse::query()->find($request->warehouse_id);
            if (!$warehouse) {
                return $this->withMessage('Invalid vendor record', 500);
            }
            $data['vendor_id'] = $warehouse->vendor_id;
        }
        if (Good::query()->where(['all_good_id' => $request->all_good_id])->owned()->first()) {
            return $this->withMessage("Goods record already exists.", 400);
        }

        try {
            if ($request->properties) {
                $properties = (array)json_decode($request->properties, true);

                if ($properties && $properties['data']) {
                    $json = [];
                    $arr = [];
                    foreach ($properties['data'] as $property) {
                        $name = trim($property['name']);
                        $value = trim($property['value']);
                        if ($name && $value && !in_array($name, $arr)) {
                            $json[] = '"' . $name . '":"' . $value . '"';
                            $arr[] = strtolower($name);
                        }
                    }
                    $data['property'] = '{' . implode(',', $json) . "}";
                }
            }
        } catch (\Exception $e) {
            return $this->withMessage('Invalid property provided', 400);
        }

        if ($good = Good::query()->create($data)) {
//            this hack is to get the goods record with it's id, it's inefficient
            $good = Good::query()->with('detail.category', 'vendor', 'warehouse')->where($data)->latest()->first();

            $pictures = $request->pictures;
            foreach ($pictures as $picture) {
                GoodPicture::query()->firstOrCreate(['picture_id' => $picture, 'good_id' => $good->id]);
            }

            $good->load('pictures');

            return $this->withJson(['message' => 'Goods has been successfully added', 'data' => $good]);
        }
        return $this->withMessage('The goods record couldn\'t be stored', 500);
    }

    /**
     * Display the specified number of latest goods.
     *
     * @param int $amount
     *
     * @return  \Dingo\Api\Http\Response
     *
     * @SWG\Get(
     *   path="/goods/latest/{amount}",
     *   tags={"Goods"},
     *   summary="Get specified number of latest goods",
     *   description="",
     *   produces={"application/json"},
     *   security={
     *         {
     *             "Bearer": {}
     *         }
     *     },
     *     @SWG\Parameter(
     *     name="id",
     *     in="path",
     *     description="The count of the goods to be fetched.",
     *     required=true,
     *     type="string"
     *   ),
     *   @SWG\Response(
     *     response=200, description="successful operation",
     *     @SWG\Property(type="array", @SWG\Items(@SWG\Schema(ref="#/definitions/Good"))
     *   )
     * )
     * )
     *
     */
    public function latest($amount = 5)
    {
        $good = Good::owned()
            ->with('detail')
            ->with('warehouse')
            ->with('vendor')
            ->with('creator')
            //->latest()
            ->orderBy("id", "desc")
            ->take($amount)
            ->get();

        return $good;
    }

    private function getGoodWithId($id)
    {
        $good = Good::owned()
            ->with('pictures')
            ->with('warehouse')
            ->with('vendor')
            ->with('detail.category')
            ->with('creator')
            ->find($id);

        if (!request()->has('trend') || !$good) {
            return $good;
        }

        $fromDate = '';
        $toDate = '';
        if (request()->has('from')) {
            $fromDate = date('Y-m-d', strtotime(request('from'))) . ' 00:00:00';
        }

        if (request()->has('to')) {
            $toDate = date('Y-m-d', strtotime(request('to'))) . ' 23:59:59';
        }

        if (!$good->detail) {
            $trend = [];
        } else {
            $trend = PriceChange::trendFor($good->detail, $fromDate, $toDate);
        }

        return $this->withJson(['good' => $good, 'trend' => $trend]);

    }

    /**
     * Get price trend for goods with specified id.
     *
     * @param int $id
     *
     * @return  \Dingo\Api\Http\Response
     *
     * @SWG\Get(
     *   path="/goods/{id}/trend",
     *   tags={"Goods"},
     *   summary="Get price trend for a specific goods",
     *   description="",
     *   produces={"application/json"},
     *   security={
     *         {
     *             "Bearer": {}
     *         }
     *     },
     *     @SWG\Parameter(
     *     name="id",
     *     in="path",
     *     description="The id of the goods to be fetched.",
     *     required=true,
     *     type="string"
     *   ),
     *   @SWG\Response(response=200, description="successful operation",
     *     @SWG\Schema(type="object", description="Data", @SWG\Property(property="trend", type="array", description="trend", @SWG\Items(@SWG\Schema(ref="#/definitions/Good")))
     *   ),
     * )
     * )
     */
    public function trend($id)
    {
        $good = Good::owned()
            ->with('pictures')
            ->with('warehouse')
            ->with('vendor')
            ->with('detail')
            ->with('creator')
            ->find($id);

        if (!$good) {
            return [];
        }

        $fromDate = '';
        $toDate = '';
        if (request()->has('from')) {
            $fromDate = date('Y-m-d', strtotime(request('from'))) . ' 00:00:00';
        }

        if (request()->has('to')) {
            $toDate = date('Y-m-d', strtotime(request('to'))) . ' 23:59:59';
        }

        if (!$good->detail) {
            $trend = [];
        } else {
            $trend = PriceChange::trendFor($good->detail, $fromDate, $toDate);
        }

        return $this->withJson(['trend' => $trend]);

    }

    /**
     *
     *
     * @param int $id
     *
     * @return  \Dingo\Api\Http\Response
     *
     * Get good by id.
     *
     *
     * @SWG\Get(
     *   path="/goods/{id}",
     *   tags={"Goods"},
     *   summary="Get a goods by id",
     *   description="",
     *   operationId="show",
     *   produces={"application/json"},
     *   security={
     *         {
     *             "Bearer": {}
     *         }
     *     },
     *   @SWG\Parameter(
     *     name="id",
     *     in="path",
     *     description="The id of the goods to be fetched.",
     *     required=true,
     *     type="string"
     *   ),
     *   @SWG\Response(response=200, description="successful operation", @SWG\Schema(ref="#/definitions/Good")),
     *   @SWG\Response(response=400, description="Invalid id supplied"),
     *   @SWG\Response(response=404, description="Good not found")
     * )
     */
    public function show($id)
    {
        $good = $this->getGoodWithId($id);
        if ($good) {
            return $good;
        }
        $user = Auth::user();
        if ($user && $user->hasRole(Role::VENDOR)) {
            return response('Goods record not found in your collection.', 400);
        }
        return response('Goods record not found.', 400);
    }

    /**
     * Update a good.
     *
     * @param UpdateGoodRequest $request
     * @param int $id
     *
     * @return  \Dingo\Api\Http\Response
     * Update a goods record
     *
     * @SWG\Put(
     *   path="/goods/{id}",
     *   tags={"Goods"},
     *   summary="Update a goods record",
     *   description="",
     *   operationId="update",
     *   produces={"application/json"},
     *   security={
     *         {
     *             "Bearer": {}
     *         }
     *     },
     *   @SWG\Parameter(
     *     name="id",
     *     in="path",
     *     description="the id of the goods to be updated.",
     *     required=true,
     *     type="string"
     *   ),
     *   @SWG\Parameter(
     *     name="body",
     *     in="body",
     *     description="the body of the request.",
     *     required=true,
     *     @SWG\Schema(ref="#/definitions/Good")
     *   ),
     *   @SWG\Response(response=200, description="Goods updated",
     *       @SWG\Schema(ref="#/definitions/Good")
     *      ),
     *   @SWG\Response(response=400, description="Invalid id supplied"),     *
     *   @SWG\Response(response=404, description="Goods not found"),     *
     *   @SWG\Response(response=422, description="The given data was invalid."),
     * )
     */
    public function update(UpdateGoodRequest $request, $id)
    {
        $query = Good::query();
        $good = $query->owned()->find($id);
        if (!$good) {
            return $this->withMessage('Goods record not found', 404);
        }

        if (Good::query()->where('all_good_id', $request->all_good_id)
            ->where('id', '!=', $id)
//            ->where('vendor_id', $request->vendor_id)
            ->first()) {
            return $this->withMessage("Another Goods with specified detail already in record.", 400);
        }

        $data = $request->only(['all_good_id', 'full_description', 'price', 'warehouse_id', 'details', 'sku']);

        try {
            if ($request->properties) {
                $properties = (array)json_decode($request->properties, true);

                if ($properties && $properties['data']) {
                    $json = [];
                    $arr = [];
                    foreach ($properties['data'] as $property) {
                        $name = trim($property['name']);
                        $value = trim($property['value']);
                        if ($name && $value && !in_array($name, $arr)) {
                            $json[] = '"' . $name . '":"' . $value . '"';
                            $arr[] = strtolower($name);
                        }
                    }
                    $data['property'] = '{' . implode(',', $json) . "}";
                }
            }
        } catch (\Exception $e) {
            return $this->withMessage('Invalid property provided', 400);
        }

        $data['updated_at'] = Carbon::now(1)->format('Y-m-d H:i:s');
        $hasPriceChanged = $good->price != $request->price;
        if ($good->update($data)) {
            if ($hasPriceChanged) {
                PriceChange::query()->create([
                    'all_good_id' => $good->all_good_id,
                    'vendor_id' => $good->vendor_id,
                    'price' => $good->price]);
            }
            $goodDetail = $this->getGoodWithId($id);
            return $this->withJson(['message' => 'Goods record updated successfully', 'data' => $goodDetail]);
        }
        return $this->withMessage('Goods update failed');
    }

    /**
     * Delete a goods record
     * @param int $id
     *
     * @SWG\Delete(
     *   path="/goods/{id}",
     *   tags={"Goods"},
     *   summary="Delete a goods",
     *   description="",
     *   operationId="destroy",
     *   produces={"application/json"},
     *   security={
     *         {
     *             "Bearer": {}
     *         }
     *     },
     *
     *   @SWG\Response(response=201, description="Successful"),
     *   @SWG\Response(response=404, description="Goods not found"),
     *   @SWG\Response(response=422, description="Delete request failed")
     * )
     * @return Response
     */
    public function destroy($id)
    {
        if (!$good = Good::query()->owned()->find($id)) {
            return $this->withMessage('Goods record not found', 404);
        }
        if ($good->delete()) {
            GoodPicture::query()->where('good_id', $id)->delete();

            return $this->withJson(['status' => 'Goods record deleted'], 201);
        }
        return $this->withMessage('Goods record delete request failed', 500);
    }

    /**
     * store a good's picture
     *
     * @param \Illuminate\Http\Request $request
     *
     * @return Response
     * @throws \Illuminate\Validation\ValidationException
     */
    public function addPicture(Request $request)
    {
        $this->validate($request, [
            'good_id' => 'required',
            'picture' => 'required|image|max:2048'
        ]);
        $good = Good::owned()->findOrFail($request->good_id);
        //make sure good has at most 5 pictures
        if (!$good->canAddMorePictures()) {
            return $this->withMessage('Sorry, the maximum number of pictures has been exhausted.', 400);
        }
        $picture = Picture::getPicture($request);

        if ($pictures = $good->attachPictures($picture, $good->detail->name, 'goods')) {
            return $this->withJson(['picture' => $pictures], 201);
        }
        return $this->withMessage('Couldn\'t upload picture');
    }

    public function deletePicture($gId, $pId)
    {
        $good = Good::owned()->where('id', $gId)->first();
        if (!$good) {
            throw new DeleteResourceFailedException('Associated goods record is missing/not in your collection.');
        }

        $picture = DB::table('pictures')->where('id', $pId)->first();
        if (!$picture) {
            throw new DeleteResourceFailedException('Picture specified ' . $pId . ' not found.');
        }
        if (GoodPicture::query()->where(['good_id' => $gId, 'picture_id' => $picture->id])->delete()) {
            Storage::delete($picture->path);
            DB::table('pictures')->where('id', $pId)->delete();
            return $this->withJson(['status' => 'Picture deleted successfully'], 201);
        }

        throw new DeleteResourceFailedException('picture delete request failed');
    }

    /**
     * mass import goods from an excel|csv file
     *
     * @param \Illuminate\Http\Request $request
     * @param Excel $excel
     *
     * @return Response
     * @throws \Illuminate\Validation\ValidationException
     */
    public function massImport(Request $request)
    {
        $rules = [
            'file' => 'required|max:2048|mimetypes:application/vnd.ms-excel,text/plain,text/csv,text/tsv,application/excel,' .
                'application/vnd.ms-excel,application/vnd.msexcel,application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
            'pictures' => 'file|max:32768',
            'type' => 'required'
        ];
        $this->validate($request, $rules, ['file.mimetypes' => 'Excel file is required']);

//        if ($request->type === 'goods') {
//
//        } else {
//            Excel::import(new BatchPriceUploadImport, request()->file('file'));
//        }

        Excel::import(new BatchGoodsImport, request()->file('file'));

        return $this->withMessage('Successful');
    }

    public function getMyGoods()
    {
        $authUser = auth()->user();
        if ($authUser->hasRole(Role::VENDOR)) {
            $vendor = $authUser->vendor;
        } else {
            $vendor = Vendor::query()->default()->first();
        }

        return Good::query()->where(['vendor_id' => $vendor ? $vendor->id : null])
            ->with('detail.category')->get();
    }

    /**
     * download sample import goods excel/csv file
     */
    public function sampleImportGoods(Request $request)
    {
        $type = $request->type;

        if (!$type) {
            return $this->withMessage('Batch upload type not valid', 400);
        }

        if ($type === 'goods') {
            return Excel::download(new GoodsUploadSample, 'goods_upload_sample_' . date('d-m-yHis') . '.xlsx');
        } else {
            return Excel::download(new PriceUploadSample, 'price_upload_sample_' . date('d-m-yHis') . '.xlsx');
        }
//        return HttpResponse::download($fileUrl);
    }

    /**
     * get good by user id (that is the user_id of the vendor)
     *
     * @param string $id
     *
     * @return Response
     *
     * @return  \Dingo\Api\Http\Response
     *
     * @SWG\Get(
     *   path="/user/{id}/goods",
     *   tags={"Goods"},
     *   summary="Get paginated goods by a vendor",
     *   description="",
     *   produces={"application/json"},
     *   security={
     *         {
     *             "Bearer": {}
     *         }
     *     },
     *     @SWG\Parameter(
     *     name="id",
     *     in="path",
     *     description="The vendor's User ID.",
     *     required=true,
     *     type="string"
     *   ),
     *   @SWG\Response(
     *     response=200, description="successful operation",
     *     @SWG\Schema(
     *      type="object",
     *     @SWG\Property(
     *          property="data", type="array", description="Data",
     *          @SWG\Items(
     *              @SWG\Schema(ref="#/definitions/Good")
     *          )
     *     ),
     *     @SWG\Property(property="from", type="string", description="From"),
     *     @SWG\Property(property="to", type="string", description="To"),
     *     @SWG\Property(property="current_page", type="string", description="Current page number"),
     *     @SWG\Property(property="last_page", type="string", description="Last page"),
     *     @SWG\Property(property="total", type="string", description="Total number of result"),
     *     @SWG\Property(property="next_page_url", type="string", description="Next page url"),
     *     @SWG\Property(property="prev_page_url", type="string", description="Previous page url"),
     *     @SWG\Property(property="path", type="string", description="Request path")
     *      )
     *   )
     * )
     * )
     *
     */
    public function getGoodByUserId($id)
    {
        if (!$user = User::query()->find($id)) {
            return $this->withMessage('User\'s record not found');
        }
        return Good::query()->where('created_by', $user->id)
            ->owned()
            ->with('pictures')
            ->with('warehouse')
            ->with('vendor')
            ->with('detail')
            ->with('creator')->latest()->paginate();
    }

    /**
     * validate that given categories (comma seperated) are in db
     * @param string $categoriesString
     * @return bool|\Illuminate\Support\Collection
     */
    protected function validateCategory(string $categoriesString)
    {
        $categories = $this->getCategoriesFromString($categoriesString);
        if ($category_ids = (new Category)->areValidCategories($categories)) {
            return $category_ids;
        }
        return false;
    }

    /**
     * validate that given warehouse is in db
     */
    protected function validateWarehouse(string $warehouse)
    {
        $warehouse = strtolower($warehouse);
        if ($warehouse_id = (new Warehouse)->isValidWarehouse($warehouse)) {
            return $warehouse_id;
        }
        return false;
    }

    /**
     * get categories from a comma seperated string
     */
    protected function getCategoriesFromString(string $string)
    {
        $array = explode(',', $string);
        return array_map('trim', $array);
    }

    /**
     * set failed message for batch goods upload
     */
    protected function getUploadFailedMessage($total, $success)
    {
        $failed = $total - $success;
        if ($failed > 0) {
            if ($success > 0) {
                return $failed . '. However, some goods were successfully added. inspect your goods, remove the successful ones from the uploaded document to avoid duplicates. Then make adequate corrections to the document and re-upload.';
            }
            return $failed . '. Please check the FAQ page for information about batch goods upload.';
        } else {
            return 0;
        }
    }

    /**
     * get pictures from a comma seperated string
     */
    protected function getPicturesFromString(string $string)
    {
        //we use method from categories as they both do same things
        return $this->getCategoriesFromString($string);
    }

    /**
     * upload pictures from zip and link to goods through the names in array
     *
     * @param array $tempPictures
     * @param array $picturesArray
     * @param Good $good
     */
    protected function attachPictureArrayGoods($tempPictures, array $picturesArray, $good)
    {
        $finfo = new \finfo(FILEINFO_MIME_TYPE);

        foreach ($picturesArray as $picture) {
            try {
                $filePath = $this->getTempFile($picture);
                if (in_array($picture, $tempPictures)) {
                    $image = new UploadedFile(
                        $filePath,
                        $picture, $finfo->file($filePath),
                        null, null, true);
                    //attach picture to good
                    $good->attachPictures($image, $good->name, 'goods');
                }
            } catch (Exception $e) {
                //do nothing
            }
        }
    }

    /**
     * get temporary upload directory
     */
    protected function getTempDir()
    {
        return storage_path() . '/' . $this->tempDirName . '/' . auth()->user()->username . '/';
    }

    /**
     * make a temporary uploaded file path
     * @param string $file
     * @return string
     */
    protected function getTempFile(string $file)
    {
        return $this->getTempDir() . $file;
    }

    private function performSearch(Request $request)
    {
        $search = $request->input('search');
        $search = str_replace(" ", "%", $search);
        $search = strtoupper("'%$search%'");
        $vendor = $request->input('vendor');
        $good = $request->input('good');
        $category = $request->input('category');


        $searchResult = Good::query()->where(function ($q) use ($good, $search) {
            $q->whereHas('detail', function ($query) use ($good, $search) {
                $query->whereRaw("UPPER(name) LIKE $search")
                    ->orWhereRaw("UPPER(short_description) LIKE $search");
            })->orWhereHas('vendor', function ($query) use ($good, $search) {
                $query->whereRaw("UPPER(business_name) LIKE $search");
            })->orWhere(function ($query) use ($search) {
                $query->whereRaw("UPPER(full_description) LIKE $search")
                    ->orWhereRaw("UPPER(sku) LIKE $search")
                    ->orWhereRaw("UPPER(details) LIKE $search")
                    ->orWhereRaw("UPPER(property) LIKE $search");
            });
        });

        if ($good) {
            $searchResult->where('all_good_id', $good);
        }

        if ($vendor) {
            $vendor = strtoupper("$vendor");
            $searchResult->whereHas('vendor', function ($query) use ($vendor) {
                $query->whereRaw("UPPER(business_name) like '%". $vendor. "%'");
            });
        }

        if ($request->has('cities')) {
            $cities = (array)json_decode($request->input('cities'), true);
            if (is_array($cities)) {
                $searchResult->whereHas('warehouse.address', function ($query) use ($cities) {
                    $query->whereIn('city_id', $cities);
                });
            }
        }

        $minPrice = (double)$request->input('min_price');
        $maxPrice = (double)$request->input('max_price');

        $perPage = (int)$request->input('per_page');
        if (!$perPage) {
            $perPage = 15;
        }

        if ($category) {
            $categories = [$category];
            foreach (Category::query()->where('id', '!=', $category)->get() as $eachCategory) {
                if ($eachCategory->isDescendantOf($category)) {
                    $categories[] = $eachCategory->id;
                }
            }

            $searchResult->whereHas('detail.category', function ($query) use ($categories) {
                $query->whereIn('id', $categories);
            });

        }

        $searchResult = $searchResult->with('pictures', 'detail.category', 'creator', 'vendor', 'warehouse');

        $category_ = [];
        if ($request->has('category_query')) {
            try {
                $category_query = (array)json_decode($request->input('category_query'), true);
                foreach ($category_query as $query) {
                    if (is_array($query) && array_key_exists('name', $query) &&
                        array_key_exists('value', $query)) {
                        if (!array_key_exists($query['name'], $category_)) {
                            $category_[$query['name']] = [];
                        }

                        $category_[$query['name']][] = $query['value'];
                    }
                }
            } catch (Exception $ex) {
            }
        }
        if (count($category_)) {
            foreach ($category_ as $key => $cat) {
                $searchResult = $searchResult->where(function ($q) use ($key, $cat) {
                    $count = 0;
                    foreach ($cat as $cc) {
                        $val = "'%\"%" . $key . "%\":\"" . $cc . "%\"%'";
                        if (!$count) {
                            $q->where('property', 'LIKE' . $val);
                        } else {
                            $q->orWhere('property', 'LIKE' . $val);
                        }
                        $count++;
                    }
                    return $q;
                });
            }
        }

        if ($request->has('min_price')) {
            $searchResult = $searchResult->where('price', '>=', $minPrice);
        }

        if ($request->has('max_price')) {
            $searchResult = $searchResult->where('price', '<=', $maxPrice);
        }

        $result = $searchResult->paginate($perPage);

        $result->appends($request->all());

        return $result;
    }
}
