<?php

namespace App\Api\Controllers;

use App\DocumentType;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Dingo\Api\Http\Response;
use Dingo\Api\Exception\StoreResourceFailedException;
use Dingo\Api\Exception\DeleteResourceFailedException;
use Symfony\Component\HttpKernel\Exception\NotFoundHttpException;

class DocumentTypeController extends Controller
{
    /**
     * Display a listing of the resource
     *
     * @param Request $request
     * @return DocumentType
     */
    public function index(Request $request)
    {
        $search = null;
        if ($request->input('search') != null) {
            $search = $request->input('search');
        }
        $documentType = DocumentType::query();
        if (!is_null($search)) {
            $documentType = $documentType->where(function ($query) use ($search) {
                $query->where('name', 'like', '%' . $search . '%')
                    ->orWhere('description', 'like', '%' . $search . '%');
            });
        }

        return $documentType->withDates()->get();
    }

    /**
     * create new document type
     *
     * @param Request $request
     * @return DocumentType
     */
    public function store(Request $request)
    {
        $this->validate($request, [
            'name' => 'required|string|unique:document_types,name',
            'description' => 'string|nullable'
        ], ['name.unique' => 'Document type already exists']);

        $data = $request->only('name', 'description');

        $documentType = new DocumentType($data);
        if ($documentType->save()) {
            return $documentType;
        }

        throw new StoreResourceFailedException('Document type couldn\'t be stored');
    }

    /**
     * Display document type by id
     *
     * @param string $id
     * @return DocumentType
     */
    public function show($id)
    {
        if ($documentType = DocumentType::find($id)) {
            return $documentType;
        }

        return $this->withMessage('Doc type not found', 404);
    }

    /**
     * Update document type by id
     *
     * @param Request $request
     * @param string $id
     * @return DocumentType
     * @throws \Illuminate\Validation\ValidationException
     */
    public function update(Request $request, $id)
    {
        if (!$documentType = DocumentType::find($id)) {
            throw new NotFoundHttpException('Document type not found');
        }
        $rules = [
            'name' => 'required|string|unique:document_types,name,' . $id,
            'description' => 'nullable|string'
        ];
        //validation
        $this->validate($request, $rules);
        //assign
        $documentType->name = $request->name;
        $documentType->description = $request->description;
        if ($documentType->save()) {
            return $documentType;
        }
        throw new StoreResourceFailedException('Document type update failed');
    }

    /**
     * Delete a document type
     *
     * @param string $id
     * @return json
     */
    public function destroy($id)
    {
        if ($this->cannotBeDeleted($id)) {
            throw new NotFoundHttpException('Document type not found');
        }

        if (!$documentType = DocumentType::find($id)) {
            throw new NotFoundHttpException('Document type not found');
        }
        //delete Document type
        if ($documentType->delete()) {
            return $this->withJson(['status' => 'Document type deleted'], 201);
        }
        //Document type not deleted
        throw new DeleteResourceFailedException('Document type delete request failed');
    }

    /**
     * this document type is default (and in use by the system). it cannot be deleted
     *
     * @param integer $id
     * @return boolean
     */
    protected function cannotBeDeleted($id)
    {
        return $id == 1;
    }

}
