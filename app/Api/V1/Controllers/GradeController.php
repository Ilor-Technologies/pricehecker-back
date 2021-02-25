<?php

namespace App\Api\Controllers;

use App\Grade;
use App\Http\Controllers\Controller;
use Dingo\Api\Http\Response;
use Illuminate\Http\Request;
use Dingo\Api\Exception\StoreResourceFailedException;
use Dingo\Api\Exception\DeleteResourceFailedException;
use Illuminate\Validation\ValidationException;
use Symfony\Component\HttpKernel\Exception\NotFoundHttpException;

class GradeController extends Controller
{
    /**
     * Display a listing of the resource
     *
     * @param Request $request
     * @return Grade
     */
    public function index(Request $request)
    {

        $search = null;
        if ($request->input('search') != null) {
            $search = $request->input('search');
        }
        $grade = Grade::query();
        if (!is_null($search)) {
            $grade = $grade->where(function ($query) use ($search) {
                $query->where('level', 'like', '%' . $search . '%')
                    ->orWhere('description', 'like', '%' . $search . '%');
            });
        }
        //date range
        $grade->withDates();
        return $this->withJson(['grades' => $grade->get()]);
    }

    /**
     * create new grade
     *
     * @param Request $request
     * @return Grade
     * @throws ValidationException
     */
    public function store(Request $request)
    {
        $this->validate($request, [
            'level' => 'required|unique:grades,level',
            'description' => 'string|nullable'
        ], ['level.unique' => 'Grade already exists']);

        $data = $request->only('level', 'description');

        $grade = new Grade($data);
        if ($grade->save()) {
            return $grade;
        }

        throw new StoreResourceFailedException('Grade couldn\'t be stored');
    }

    /**
     * Display grade by id
     *
     * @param string $id
     * @return Grade
     */
    public function show($id)
    {
        if ($grade = Grade::query()->find($id)) {
            return $grade;
        }

        return $this->notFound('Grade not found');
    }

    /**
     * Update grade by id
     *
     * @param Request $request
     * @param string $id
     * @return Grade
     * @throws ValidationException
     */
    public function update(Request $request, $id)
    {
        if (!$grade = Grade::query()->find($id)) {
            return $this->notFound('grade not found');
        }
        $rules = [
            'level' => 'required|unique:grades,level,' . $id,
            'description' => 'nullable|string'
        ];
        //validation
        $this->validate($request, $rules);
        //assign
        $grade->level = $request->level;
        $grade->description = $request->description;
        if ($grade->save()) {
            return $grade;
        }
        throw new StoreResourceFailedException('Grade update failed');
    }

    /**
     * Delete a grade
     *
     * @param string $id
     * @return Response
     * @throws \Exception
     */
    public function destroy($id)
    {
        if (!$grade = Grade::query()->find($id)) {
            throw new NotFoundHttpException('Grade not found');
        }
        //delete grade
        if ($grade->delete()) {
            return $this->withMessage('Grade deleted');
        }
        //grade not deleted
        throw new DeleteResourceFailedException('Grade delete request failed');
    }

}
