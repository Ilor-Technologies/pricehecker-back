<?php

namespace App\Api\Controllers;

use App\Address;
use App\Api\Requests\WarehouseRequest;
use App\Good;
use App\Http\Controllers\Controller;
use App\Role;
use App\User;
use App\Vendor;
use App\Warehouse;
use Dingo\Api\Exception\DeleteResourceFailedException;
use Dingo\Api\Exception\UpdateResourceFailedException;
use Dingo\Api\Http\Request;
use Dingo\Api\Http\Response;
use Illuminate\Support\Facades\DB;
use Illuminate\Validation\Rule;
use Symfony\Component\HttpKernel\Exception\NotFoundHttpException;
use Tymon\JWTAuth\JWTAuth;

class WarehouseController extends Controller {

    /**
     * Display a listing of the warehouses.
     *
     * @param Request $request
     * @return Response
     *
     * @SWG\Get(
     *   path="/warehouses",
     *   tags={"Warehouses"},
     *   summary="Get warehouses",
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
     *              @SWG\Schema(ref="#/definitions/Warehouse")
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
    public function index(Request $request) {
        $warehouse = Warehouse::query()->owned()
            ->with('address.city', 'address.state', 'vendor');

        if (($search = $request->input('search'))) {
            $warehouse = $warehouse->where('name', 'like', '%' . $search . '%');
        }

        $authUser = $this->authUser();

//        if($authUser && !$authUser->hasRole(Role::VENDOR)) {
//            $warehouse->with('vendor');
//        }

        if($authUser && !$authUser->hasRole(Role::VENDOR) && ($vendor = $request->input('vendor'))) {
            $warehouse = $warehouse->where('vendor_id', $vendor);
        }


        if ($request->input('pagination')) {
            $warehouse = $warehouse->paginate(30);
            $warehouse->appends($request->all());
        } else {
            $warehouse = $warehouse->get();
        }

        return $warehouse;
    }

    /**
     * Store a newly created warehouse in storage.
     *
     * @param JWTAuth $auth
     * @param WarehouseRequest $request
     * @return Response
     *
     * @SWG\Post(
     *   path="/warehouses",
     *   tags={"Warehouses"},
     *   summary="Create a new waehouse",
     *   description="",
     *   operationId="post",
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
     *       type="object",
     *       @SWG\Property(property="name", type="string", description="Name"),
     *       @SWG\Property(property="state_id", type="string", description="State ID"),
     *       @SWG\Property(property="city_id", type="string", description="City ID"),
     *       @SWG\Property(property="address_line_1", type="string", description="Address"),
     *       @SWG\Property(property="address_line_2", type="string", description="Address"),
     *       @SWG\Property(property="pobox_number", type="string", description="P.O. Box Number")
     *     )
     *   ),
     *   @SWG\Response(response=201, description="Warehouse created",
     *   ),
     *   @SWG\Response(response=422, description="The given data was invalid."),
     * )
     */
    public function store(JWTAuth $auth, WarehouseRequest $request) {
        $user = $this->authUser();

        if (!$user->is_vendor || !$user->can('add_warehouses')) {
            return $this->withMessage("You do not have sufficient privilege to create warehouses");
        }

        $data = $request->only('name');
        $data['name'] = trim($data['name']);
        $data['vendor_id'] = $user->vendor->id;

        $tempData = $request->only([
            'address_line_1', 'city_id',
            'state_id', 'pobox_number', 'address_line_2'
        ]);

        $addressData = [];
        foreach ($tempData as $key => $value) {
            if (is_null($value) || !$value) {
                continue;
            }
            $addressData[$key] = $value;
        }
        $address = Address::query()->where($addressData)->first();

        if ($address) {
            $data['address_id'] = $address->id;
            if (Warehouse::query()->where($data)->first()) {
                return $this->withMessage("Warehouse already in record.");
            }
        } else {
            $address = Address::query()->create($addressData);
            $data['address_id'] = $address->id;
        }

        if (($warehouse = Warehouse::query()->create($data))) {
            return $this->withMessage("New warehouse record has been created successfully. ");
        }
        return $this->withMessage('Warehouse record could not be stored');
    }

    /**
     * Display a numbered list of the latest warehouses.
     *
     * @return Response
     *
     * @SWG\Get(
     *   path="/warehouses/latest/{amount}",
     *   tags={"Warehouses"},
     *   summary="Get a number of latest warehouses",
     *   description="",
     *   produces={"application/json"},
     *   security={
     *         {
     *             "Bearer": {}
     *         }
     *     },
     *   @SWG\Response(response=200, description="successful operation",
     *     @SWG\Property(
     *          property="data", type="array", description="Data",
     *          @SWG\Items(
     *              @SWG\Schema(ref="#/definitions/Warehouse")
     *          )
     *     ),
     *   ),
     * )
     */
    public function latest($amount = 5) {
        $warehouse = Warehouse::owned()
            ->with('vendor')
            ->with('address.city', 'address.state')
            ->latest()
            //->orderBy("created_by", "desc")
            ->take($amount)
            ->get();

        return $warehouse;
    }

    /**
     * Display the specified Warehouse by warehouse id.
     *
     * @param  int $id
     * @return  Response
     *
     *
     *
     * @SWG\Get(
     *   path="/warehouses/{id}",
     *   tags={"Warehouses"},
     *   summary="Get a warehouse by id",
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
     *     description="The id of the warehouse to be fetched.",
     *     required=true,
     *     type="string"
     *   ),
     *   @SWG\Response(response=200, description="successful operation", @SWG\Schema(ref="#/definitions/Warehouse")),
     *   @SWG\Response(response=400, description="Invalid id supplied"),
     *   @SWG\Response(response=404, description="Warehouse not found")
     * )
     */
    public function show($id) {
        $warehouse = Warehouse::owned()
            ->with('vendor')
            ->with('address.state', 'address.city')
            ->find($id);
        if ($warehouse) {
            return $warehouse;
        }

        return $this->notFound('Warehouse not found.');
    }

    /**
     * Update the specified Warehouse by id in storage.
     *
     * @param WarehouseRequest $request
     * @param  int $id
     * @return Response
     *
     * @throws \Illuminate\Validation\ValidationException
     * @SWG\Put(
     *   path="/warehouses/{id}",
     *   tags={"Warehouses"},
     *   summary="Update a warehouse record",
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
     *     description="the id of the warehouse to be updated.",
     *     required=true,
     *     type="string"
     *   ),
     *   @SWG\Parameter(
     *     name="body",
     *     in="body",
     *     description="the body of the request.",
     *     required=true,
     *     @SWG\Schema(
     *     type="object",
     *       @SWG\Property(property="name", type="string", description="Name"),
     *       @SWG\Property(property="state_id", type="string", description="State ID"),
     *       @SWG\Property(property="city_id", type="string", description="City ID"),
     *       @SWG\Property(property="address_line_1", type="string", description="Address"),
     *       @SWG\Property(property="address_line_2", type="string", description="Address"),
     *       @SWG\Property(property="pobox_number", type="string", description="P.O. Box Number")
     * )
     *   ),
     *   @SWG\Response(response=200, description="Goods updated",
     *       @SWG\Schema(ref="#/definitions/Good")
     *      ),
     *   @SWG\Response(response=400, description="Invalid id supplied"),     *
     *   @SWG\Response(response=404, description="Goods not found"),     *
     *   @SWG\Response(response=422, description="The given data was invalid."),
     * )
     */
    public function update(WarehouseRequest $request, $id) {
        //validation
        $this->validate($request, [
            'name' => [
                'required',
                'string',
//                Rule::unique('warehouses')->ignore($id),
            ],
            'state_id' => 'required',
            'city_id' => 'required',
            'address_line_1' => 'required|string',
            'address_line_2' => 'string|nullable',
            'pobox_number' => 'string|nullable'
        ]);
        if ($warehouse = Warehouse::query()->find($id)) {
            //update address
            $address = $warehouse->address;
            if ($address) {
                $addressUpdated = $address->update(
                    $request->only('address_line_1', 'city_id', 'state_id', 'pobox_number', 'address_line_2')
                );
                if (!$addressUpdated) {
                    throw new UpdateResourceFailedException('Unable to complete process, try again');
                }
            }
//            else {
//                $address = Address::create($request->only('address_line_1', 'city_id', 'state_id', 'pobox_number', 'address_line_2'));
//                if (!$address) {
//                    throw new UpdateResourceFailedException('Unable to complete process, try again');
//                }
//            }
            //get warehouse info
            $data = $request->only('name');
//            $data['address_id'] = $address->id;

            if ($warehouse->update($data)) {
                return $this->withJson(['message' => $warehouse->name . ' was updated successfully.'], 201);
            }

            throw new UpdateResourceFailedException('Unable to complete process, try again');
        }

        throw new UpdateResourceFailedException('Warehouse not found');
    }

    /**
     * Remove the specified Warehouse by id from storage.
     *
     * @param  int $id
     * @return Response
     * @throws \Exception
     *
     * @SWG\Delete(
     *   path="/warehouses/{id}",
     *   tags={"Warehouses"},
     *   summary="Delete a warehouse",
     *   description="",
     *   operationId="destroy",
     *   produces={"application/json"},
     *   security={
     *         {
     *             "Bearer": {}
     *         }
     *     },
     *   @SWG\Parameter(
     *     name="id",
     *     in="path",
     *     description="the id of the warehouse.",
     *     required=true,
     *     type="string"
     *   ),
     *   @SWG\Response(response=201, description="Successful"),
     *   @SWG\Response(response=404, description="Goods not found"),
     *   @SWG\Response(response=422, description="Delete request failed")
     * )
     * @return Response
     */
    public function destroy($id) {
        $warehouse = Warehouse::query()->findOrFail($id);

        if ($count = Good::query()->where('warehouse_id', $id)->count()) {
            throw new DeleteResourceFailedException('Unable to delete warehouse, ' . $count . ' goods are registered under the selected warehouse.');
        }
        if ($warehouse->delete()) {
            //delete address
            $address = $warehouse->address()->first();
            if (!$address->delete()) {
                throw new DeleteResourceFailedException('Delete request failed, try again');
            }
            return new Response(['status' => 'Warehouse deleted'], 201);
        }
        //warehouse not deleted
        throw new DeleteResourceFailedException('Delete request failed, try again');
    }

    /**
     * get warehouse by user id (that is the user_id the vendor)
     *
     * @param string $id
     *
     * @return Response
     *
     * @SWG\Get(
     *   path="/user/{id}/warehouses",
     *   tags={"Warehouses"},
     *   summary="Get warehouses by user id",
     *   description="",
     *   produces={"application/json"},
     *   security={
     *         {
     *             "Bearer": {}
     *         }
     *     },
     *   @SWG\Parameter(
     *     name="id",
     *     in="path",
     *     description="the user id.",
     *     required=true,
     *     type="string"
     *   ),
     *   @SWG\Response(response=200, description="successful operation",
     *     @SWG\Schema(
     *      type="object",
     *     @SWG\Property(
     *          property="data", type="array", description="Data",
     *          @SWG\Items(
     *              @SWG\Schema(ref="#/definitions/Warehouse")
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
    public function getWarehouseByUserId($id) {
        if (!$user = User::query()->where('id', $id)->first()) {
            return $this->withMessage('User record  not found', 404);
        }
        return Warehouse::query()->where('created_by', $user->id)
            ->owned()
            ->with('vendor')
            ->with('address')->latest()->paginate();
    }

    /**
     * Display a listing of the warehouses by a particular vendor.
     *
     * @return Response
     *
     * @SWG\Get(
     *   path="/vendor/{id}/warehouses",
     *   tags={"Warehouses"},
     *   summary="Get all warehouses by vendor id",
     *   description="",
     *   produces={"application/json"},
     *   security={
     *         {
     *             "Bearer": {}
     *         }
     *     },
     *   @SWG\Parameter(
     *     name="id",
     *     in="path",
     *     description="the vendor id.",
     *     required=true,
     *     type="string"
     *   ),
     *   @SWG\Response(response=200, description="successful operation",
     *     @SWG\Property(
     *          property="data", type="array", description="Data",
     *          @SWG\Items(
     *              @SWG\Schema(ref="#/definitions/Warehouse")
     *          )
     *     )
     *   ),
     * )
     */
    public function getWarehouseByVendorId($id) {
        return Warehouse::query()->where('vendor_id', $id)
            ->with('address')->get();
    }
}
