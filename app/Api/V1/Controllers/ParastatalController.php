<?php

namespace App\Api\Controllers;

use App\Address;
use App\Http\Controllers\Controller;
use App\Parastatal;
use Dingo\Api\Exception\DeleteResourceFailedException;
use Dingo\Api\Exception\StoreResourceFailedException;
use Dingo\Api\Exception\UpdateResourceFailedException;
use Dingo\Api\Http\Response;
use Exception;
use Illuminate\Http\Request;

class ParastatalController extends Controller
{
    /**
     * Display a listing of the parastatals.
     *
     * @param Parastatal $parastatal
     * @return Parastatal[]|\Illuminate\Database\Eloquent\Builder[]|\Illuminate\Database\Eloquent\Collection
     */
    public function index(Parastatal $parastatal)
    {
        $parastatals = Parastatal::with('creator')
            ->with('updater')
            ->with('address')
            ->get();
        if ($parastatal->showCode()) {
            $parastatals->makeVisible(['code', 'phone', 'email', 'address_id', 'created_by', 'updated_by']);
        }
        return $parastatals;
    }

    /**
     * publicly accessible methosd to Display a listing of the parastatals.
     *
     * @param Parastatal $parastatal
     * @return \Dingo\Api\Http\Response
     */
    public function publicIndex(Parastatal $parastatal)
    {
        return Parastatal::get();
    }

    /**
     * Store a newly created parastatal in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Dingo\Api\Http\Response
     */
    public function store(Request $request, Parastatal $parastatal, Address $address)
    {
        $request->name = trim($request->name);
        //validation
        $this->validate($request, [
            'name' => 'required|string|unique:parastatals,name|min:3|regex:/^([a-z0-9 ])+$/i',
            'email' => 'required|string',
            'phone' => 'required|digits_between:8,16',
            'state_id' => 'required',
            'city_id' => 'required',
            'institution_id' => [
                'required',
                'string',
                'exists:institutions,id',              
                /* Rule::exists('institutions')->where(function ($query) {
                    $query->where('id', $request->institution_id);
                }), */
            ],
            'address_line_1' => 'string',
            'address_line_2' => 'string',
            'pobox_number' => 'string'
        ]);
        //validation passed
        $data = $request->only([
            'name', 'email', 'phone', 'institution_id'
        ]);
        if ($parastatal = $parastatal->create($data)) {
            //create address
            $address = $address->create($request->only([
                'address_line_1', 'city_id',
                'state_id', 'pobox_number', 'address_line_2'
            ]));
            //almost useless, but we don't know if Nasir uses 'address_id' somewhere.
            $parastatal->address_id = $address->id;
            $parastatal->save();               
            //commented cos we changed the relationship from many-to-many
            // $parastatal->address()->attach($address->id);
            //event(new ParastatalEvent($admin, $item_, 0));
            if ($parastatal->showCode()) {
                $parastatal->makeVisible(['code', 'phone', 'email', 'address_id', 'created_by', 'updated_by']);
            }
            return new Response(compact('parastatal', 'address'), 201);
        }
        throw new StoreResourceFailedException('Parastatal couldn\'t be stored');
    }

    /**
     * Display the specified parastatal by parastatal id.
     *
     * @param  int  $id
     * @return \Dingo\Api\Http\Response
     */
    public function show($id)
    {
        $parastatal = Parastatal::with('creator')
            ->with('updater')
            ->with('address')
            ->find($id);
        if ($parastatal) {
            if ($parastatal->showCode()) {
                $parastatal->makeVisible(['code', 'phone', 'email', 'address_id', 'created_by', 'updated_by']);
            }
            return $parastatal;
        }
        return [];
    }

    /**
     * Update the specified parastatal by id in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Dingo\Api\Http\Response
     */
    public function update(Request $request, $id)
    {
        //validation
        $this->validate($request, [
            'name' => 'required|string|min:3|regex:/^([a-z0-9 ])+$/i|unique:parastatals,name,' . $id,
            'email' => 'required|string',
            'phone' => 'required|digits_between:8,16',
            'state_id' => 'required',
            'city_id' => 'required',
            'institution_id' => [
                'required',
                'exists:institutions,id',
                /* Rule::exists('institutions')->where(function ($query) use ($request) {
                    $query->where('id', $request->institution_id);
                }), */
            ],
            'address_line_1' => 'string',
            'address_line_2' => 'string',
            'pobox_number' => 'string'
        ]);
        if ($parastatal = Parastatal::find($id)) {
            //update address
            $address = Address::updateOrCreate(
                ['id' => $parastatal->address_id],
                $request->only('address_line_1', 'city_id', 'state_id', 'pobox_number', 'address_line_2')
            );
            if (!$address) {
                throw new UpdateResourceFailedException('Unable to complete process, try again');
            }
            //get parastatal info
            $data = $request->only('name', 'email', 'phone', 'institution_id');
            $data['address_id'] = $address->id;

            if ($parastatal->update($data)) {
                //commented cos we changed the relationship from many-to-many
                // $parastatal->address()->sync($address, false);
                //event(new ParastatalEvent($admin, $item, 1));
                //return new Response(['status'=>  $parastatal->name . ' updated'], 201);
                if ($parastatal->showCode()) {
                    $parastatal->makeVisible(['code', 'phone', 'email', 'address_id', 'created_by', 'updated_by']);
                }
                return $parastatal;
            }

            throw new UpdateResourceFailedException('Unable to complete process, try again');

        }
        throw new UpdateResourceFailedException('Parastatal not found');
    }

    /**
     * Remove the specified parastatal by id from storage.
     *
     * @param  int  $id
     * @return \Dingo\Api\Http\Response
     */
    public function destroy($id)
    {
        $parastatal = Parastatal::findOrFail($id);
        $addressId = $parastatal->address_id;
        // $addressId = $parastatal->address()->pluck('id')->pull('0');
        if ($parastatal->delete()) {
            //delete address
            try {
                $address = Address::find($addressId);
                $address->delete();
                //commented cos we changed the relationship from many-to-many                
                // $parastatal->address()->detach();
            } catch (Exception $e) {
                //
            }

            return new Response(['status' => 'Parastatal deleted'], 201);
        }
        //parastatal not deleted
        throw new DeleteResourceFailedException('Delete request failed, try again');
    }
}
