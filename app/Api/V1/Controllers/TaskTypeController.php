<?php

namespace App\Api\Controllers;

use App\Http\Controllers\Controller;
use Dingo\Api\Http\Response;
use Illuminate\Http\Request;
use App\TaskType;
use Dingo\Api\Exception\StoreResourceFailedException;
use Dingo\Api\Exception\DeleteResourceFailedException;
use Symfony\Component\HttpKernel\Exception\NotFoundHttpException;

class TaskTypeController extends Controller
{
    /**
     * Display a listing of the resource
     *
     * @param Request $request
     * @return TaskType
     */
    public function index(Request $request)
    {

        $search = null;
        if ($request->input('search') != null) {
            $search = $request->input('search');
        }
        $taskType = TaskType::query();
        if (!is_null($search)) {
            $taskType = $taskType->where(function ($query) use ($search) {
                $query->where('name', 'like', '%' . $search . '%')
                    ->orWhere('description', 'like', '%' . $search . '%');
            });
        }

        return $taskType->withDates()->get();
    }

    /**
     * create new task type
     *
     * @param Request $request
     * @return TaskType
     * @throws \Illuminate\Validation\ValidationException
     */
    public function store(Request $request)
    {
        $this->validate($request, [
            'name' => 'required|string|unique:task_types,name',
            'description' => 'string|nullable'
        ], ['name.unique' => 'Task type already exists']);

        $data = $request->only('name', 'description');

        $taskType = new TaskType($data);
        if ($taskType->save()) {
            return $taskType;
        }

        throw new StoreResourceFailedException('Task type couldn\'t be stored');
    }

    /**
     * Display task type by id
     *
     * @param string $id
     * @return TaskType
     */
    public function show($id)
    {
        if ($taskType = TaskType::find($id)) {
            return $taskType;
        }

        return $this->withMessage('Task type is not found', 404);
    }

    /**
     * Update task type by id
     *
     * @param Request $request
     * @param string $id
     * @return TaskType
     * @throws \Illuminate\Validation\ValidationException
     */
    public function update(Request $request, $id)
    {
        if (!$taskType = TaskType::query()->find($id)) {
            throw new NotFoundHttpException('Task type not found');
        }
        $rules = [
            'name' => 'required|string|unique:task_types,name,' . $id,
            'description' => 'nullable|string'
        ];
        //validation
        $this->validate($request, $rules);
        //assign
        $taskType->name = $request->name;
        $taskType->description = $request->description;
        if ($taskType->save()) {
            return $taskType;
        }
        throw new StoreResourceFailedException('Task type update failed');
    }

    /**
     * Delete a task type
     *
     * @param string $id
     * @return json
     */
    public function destroy($id)
    {
        if (!$taskType = TaskType::find($id)) {
            throw new NotFoundHttpException('Task type not found');
        }
        //delete Task type
        if ($taskType->delete()) {
            return $this->withJson(['status' => 'Task type deleted'], 201);
        }
        //Task type not deleted
        throw new DeleteResourceFailedException('Task type delete request failed');
    }

}
