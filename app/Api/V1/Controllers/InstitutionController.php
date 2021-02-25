<?php

namespace App\Api\Controllers;

use App\Address;
use App\Http\Controllers\Controller;
use App\Institution;
use App\State;
use Dingo\Api\Exception\DeleteResourceFailedException;
use Dingo\Api\Exception\StoreResourceFailedException;
use Dingo\Api\Exception\UpdateResourceFailedException;
use Dingo\Api\Http\Response;
use Exception;
use Illuminate\Http\Request;

// use Dingo\Api\Http\Request;
// use App\Institution;
// use Pricechecker\Events\InstitutionEvent;
// use Tymon\JWTAuth\JWTAuth;
// use Validator;

class InstitutionController extends Controller
{
    /**
     * Display a listing of the institutions.
     *
     * @param Request $request
     * @return Institution|Institution[]|\Illuminate\Database\Eloquent\Builder|\Illuminate\Database\Eloquent\Builder[]|\Illuminate\Database\Eloquent\Collection
     */
    public function index(Request $request)
    {
        $institutions = Institution::
//        with('creator')->
//        with('updater')->
        with('address')
            ->with('parastatals');

        if ($request->input('search') != null) {
            $search = $request->input('search');

            $institutions = Institution::query()->where(function ($query) use ($search) {
                $query->where('name', 'like', '%' . $search . '%')
                    ->orWhere('code', 'like', '%' . $search . '%')
                    ->orWhere('email', 'like', '%' . $search . '%')
                    ->orWhere('phone', 'like', '%' . $search . '%')
                    ->orWhereHas('parastatals', function ($new_query) use ($search) {
                        $new_query->where('name', 'like', '%' . $search . '%')
                            ->orWhere('code', 'like', '%' . $search . '%')
                            ->orWhere('email', 'like', '%' . $search . '%')
                            ->orWhere('phone', 'like', '%' . $search . '%');
                    });
            });
        }

        $institutions = $institutions->get();

        if ((new Institution())->showCode()) {
            $institutions->makeVisible(['code', 'phone', 'email', 'address_id', 'created_by', 'updated_by']);
            $institutions->each(function ($inst) {
                $inst->parastatals->makeVisible(['code', 'phone', 'email', 'address_id', 'created_by', 'updated_by']);
            });
        }
        return $institutions;
    }

    /**
     * publicly accessible method to Display a listing of the institutions.
     *
     * @param Institution $institution
     * @return Institution[]|\Illuminate\Database\Eloquent\Builder[]|\Illuminate\Database\Eloquent\Collection
     */
    public function publicIndex(Institution $institution)
    {
        return Institution::with('parastatals')
            ->get();
    }

    /**
     * Store a newly created institution in storage.
     *
     * @param  \Illuminate\Http\Request $request
     * @param Institution $institution
     * @param Address $address
     * @return \Dingo\Api\Http\Response
     * @throws \Illuminate\Validation\ValidationException
     */
    public function store(Request $request)
    {
        $request->name = trim($request->name);

        $this->validate($request, [
            'name' => 'required|string|unique:institutions,name|min:3|regex:/^([a-z0-9 ])+$/i',
            'email' => 'required|email',
            'phone' => 'required|digits_between:8,16',
            'state_id' => 'required',
            'city_id' => 'required',
            'address_line_1' => 'string',
            'address_line_2' => 'string',
            'pobox_number' => 'string'
        ]);
        //validation passed
        $data = $request->only([
            'name', 'email', 'phone'
        ]);

        if ($institution = Institution::query()->create($data)) {
            //create address
            $address = Address::query()->create($request->only([
                'address_line_1', 'city_id',
                'state_id', 'pobox_number', 'address_line_2'
            ]));
            //almost useless, but we don't know if Nasir uses 'address_id' somewhere.
            $institution->address_id = $address->id;
            $institution->save();
            //commented cos we changed the relationship from many-to-many            
            // $institution->address()->attach($address->id);
            //event(new InstitutionEvent($admin, $item_, 0));
            if ($institution->showCode()) {
                $institution->makeVisible(['code', 'phone', 'email', 'address_id', 'created_by', 'updated_by']);
            }
            return new Response(compact('institution', 'address'), 201);
        }
        throw new StoreResourceFailedException('Institution couldn\'t be stored');
    }

    /**
     * Display the specified institution by institution id.
     *
     * @param  int $id
     * @return Institution|Institution[]|\Illuminate\Database\Eloquent\Builder|\Illuminate\Database\Eloquent\Builder[]|\Illuminate\Database\Eloquent\Collection|\Illuminate\Database\Eloquent\Model|null
     */
    public function show(Request $request, $id)
    {
        $institution = Institution::with('address')->with('parastatals')->find($id);
        if ($institution && $institution->showCode()) {
            $institution->makeVisible(['code', 'phone', 'email', 'address_id', 'created_by', 'updated_by']);
            $institution->parastatals->makeVisible(['code', 'phone', 'email', 'address_id', 'created_by', 'updated_by']);
        }

        if(($with = $request->input('with')) && $with == 'states') {
            return $this->withJson([
                'data' => $institution,
                'states' => State::with('cities')->get()
            ]);
        }
        return $institution;
    }

    /**
     * Update the specified institution by id in storage.
     *
     * @param  \Illuminate\Http\Request $request
     * @param  int $id
     * @return \Dingo\Api\Http\Response
     * @throws \Illuminate\Validation\ValidationException
     */
    public function update(Request $request, $id)
    {
        //validation
        $this->validate($request, [
            'name' => 'required|string|min:3|regex:/^([a-z0-9 ])+$/i|unique:institutions,name,' . $id,
            'email' => 'required|email',
            'phone' => 'required|digits_between:8,16',
            'state_id' => 'required',
            'city_id' => 'required',
            'address_line_1' => 'string',
            'address_line_2' => 'string',
            'pobox_number' => 'string'
        ]);
        if ($institution = Institution::find($id)) {
            //update address
            $address = Address::updateOrCreate(
                ['id' => $institution->address_id],
                $request->only('address_line_1', 'city_id', 'state_id', 'pobox_number', 'address_line_2')
            );
            if (!$address) {
                throw new UpdateResourceFailedException('Unable to complete process, try again');
            }
            //get institution info
            $data = $request->only('name', 'email', 'phone');
            $data['address_id'] = $address->id;

            if ($institution->update($data)) {
                            
                //commented cos we changed the relationship from many-to-many
                // $institution->address()->sync($address, false);
                //event(new InstitutionEvent($admin, $item, 1));
                //return new Response(['status'=>  $institution->name . ' updated'], 201);
                if ($institution->showCode()) {
                    $institution->makeVisible(['code', 'phone', 'email', 'address_id', 'created_by', 'updated_by']);
                    $institution->parastatals->makeVisible(['code', 'phone', 'email', 'address_id', 'created_by', 'updated_by']);
                }
                return $institution;
            }

            throw new UpdateResourceFailedException('Unable to complete process, try again');

            /* $institution->name = $request->name;
            $institution->email = $request->email;
            $institution->phone = $request->phone;
            $institution->phone = $request->phone;
            
            if ($institution->save()) {
                return new Response(['status'=>  $institution->name . ' institution updated'], 201);
            } */
        }
        throw new UpdateResourceFailedException('Institution not found');
    }

    /**
     * Remove the specified institution by id from storage.
     *
     * @param  int  $id
     * @return \Dingo\Api\Http\Response
     */
    public function destroy($id)
    {
        $institution = Institution::findOrFail($id);
        //$addressId = $institution->address()->pluck('id')->pull('0');
        $addressId = $institution->address_id;
        //$addressId = $address[0];
        $institution->address()->delete();
        if ($institution->delete()) {
            return new Response(['status' => 'Institution deleted'], 201);
        }
        //institution not deleted
        throw new DeleteResourceFailedException('Delete request failed, try again');
    }
}

