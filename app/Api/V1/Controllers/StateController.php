<?php

namespace App\Api\Controllers;

use App\Http\Controllers\Controller;
use App\State;
use Dingo\Api\Exception\StoreResourceFailedException;
use Dingo\Api\Exception\UpdateResourceFailedException;
use Dingo\Api\Http\Request;
use Illuminate\Support\Facades\Validator;
use Tymon\JWTAuth\JWTAuth;

class StateController extends Controller
{
    public function index()
    {
        return State::with('cities')->get();
    }

    public function show($id)
    {
        $item = State::query()->find($id);

        if (!$item) return $this->notFound('State not found');

        return $item;
    }

    public function create(JWTAuth $token, Request $request)
    {
        $admin = $this->authUser();

        if (!$admin) {
            return $this->forbidden('User authentication invalid.');
        }

        $validator = Validator::make($request->all(), [
            'name' => 'required|string|unique:states',
        ]);

        if ($validator->fails()) {
            return response()->json([
                'error' => [
                    'errors' => $validator->errors(),
                    'message' => '422 Unprocessable Entity'
                ]
            ], 422);
        }

        $item_ = new State($request->only('name'));
        if (!$item_->save()) {
            throw new StoreResourceFailedException('Unable to create state record at the moment, try again');
        }

        //event(new StateEvent($admin, $item_, 0));
        return $this->withJson(['status' => 'Ok']);
    }

    public function update(JWTAuth $token, Request $request, $id)
    {
        $admin = $this->authUser();

        if (!$admin) {
            return $this->forbidden('User authentication invalid.');
        }

        $validator = Validator::make($request->all(), [
            'name' => 'required|string|unique:states,name,' . $id
        ]);

        if ($validator->fails()) {
            return $this->validationError($validator->errors());
        }

        $item = State::query()->find($id);
        if (!$item) {
            return $this->withMessage('State details not found.', 404);
        }

        if ($item->update($request->only('name'))) {
            return $this->withMessage('Record updated successfully');
        }

        throw new UpdateResourceFailedException('Unable to update state detail at the moment, try again.');
    }

    public function destroy(JWTAuth $token, $id)
    {
        $admin = $this->authUser();

        if (!$admin) {
            return $this->forbidden('User authentication invalid.');
        }

        $item = State::query()->find($id);
        if (!$item) {
            return $this->notFound('State detail not found.');
        }

        if ($item->forceDelete()) {
            return $this->withMessage('State deleted successfully');
        }

        return $this->withMessage('Unable to delete the state details at the moment, try again.', 500);
    }
}
