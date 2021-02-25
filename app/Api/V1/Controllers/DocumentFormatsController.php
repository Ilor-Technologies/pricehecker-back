<?php

namespace App\Api\Controllers;

use App\Api\Requests\CreateDocumentFormatRequest;
use App\DocumentFormat;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Dingo\Api\Http\Response;
use Dingo\Api\Exception\StoreResourceFailedException;
use Dingo\Api\Exception\DeleteResourceFailedException;
use Symfony\Component\HttpKernel\Exception\NotFoundHttpException;

class DocumentFormatsController extends Controller
{
    /**
     * Display a listing of the resource.
     * 
     * @return json
     *
     */
    public function index(Request $request)
    {
        $search = null;
        if ($request->input('filter') != null) {
            $search = $request->input('filter');
        }
        $documentFormat = DocumentFormat::query();
        if (!is_null($search)) {
            $documentFormat = $documentFormat->where(function ($query) use ($search) {
                $query->where('extension', 'like', '%' . $search . '%')
                    ->orWhere('mime_type', 'like', '%' . $search . '%')
                    ->orWhere('description', 'like', '%' . $search . '%');
            });
        }

        return $documentFormat->withDates()->get();
    }

    /**
     * Display the document format id.
     *
     * @param  int $id
     * @return \Illuminate\Http\JsonResponse
     */
    public function show($id)
    {
        if ($documentFormat = DocumentFormat::find($id)) {
            return $documentFormat;
        }

        return $this->withMessage('Document format not found', 404);
    }


    /** 
     * Create new document format
     * 
     * @param CreateDocumentFormatRequest $request
     * 
     * @return json
     *  
     * */
    public function store(CreateDocumentFormatRequest $request)
    {
        $data = $request->only('extension', 'mime_type', 'description');

        $documentFormat = new DocumentFormat($data);
        $documentFormat->allowed = 0;
        if ($request->allowed && ($request->allowed == 1)) {
            $documentFormat->allowed = 1;
        }
        if ($documentFormat->save()) {
            return $documentFormat;
        }

        throw new StoreResourceFailedException('Document format couldn\'t be stored');
    }

    /**
     * update  document format by id
     *
     * @param \Illuminate\Http\Request $request
     *
     * @param $id
     * @return json
     *
     * @throws \Illuminate\Validation\ValidationException
     */
    public function update(Request $request, $id)
    {
        if (!$documentFormat = DocumentFormat::find($id)) {
            throw new NotFoundHttpException('Document format not found');
        }

        $rules = [
            'extension' => 'required|string|unique:document_formats,extension,' . $id,
            'mime_type' => 'required|string|unique:document_formats,mime_type,' . $id,
            'description' => 'required|string',
            'allowed' => 'numeric|nullable'
        ];
        //validation
        $this->validate($request, $rules);
        //assign
        $documentFormat->extension = $request->extension;
        $documentFormat->mime_type = $request->mime_type;
        $documentFormat->description = $request->description;
        if ($request->allowed && ($request->allowed == 1)) {
            $documentFormat->allowed = 1;
        }
        if ($documentFormat->save()) {
            return $documentFormat;
        }
        throw new StoreResourceFailedException('Document format update failed');
    }

    /**
     * Delete a document format
     *
     * @param string $id
     * @return json
     */
    public function destroy($id)
    {
        if (!$documentFormat = DocumentFormat::find($id)) {
            throw new NotFoundHttpException('Document format not found');
        }
        //delete Document format
        if ($documentFormat->delete()) {
            return $this->withJson(['status' => 'Document format deleted'], 201);
        }
        //Document format not deleted
        throw new DeleteResourceFailedException('Document format delete request failed');
    }

    /**
     * Mark an array of ids as allowed
     *
     * @param Request $request
     * @return DocumentFormat[]|\Illuminate\Database\Eloquent\Collection
     * @throws \Illuminate\Validation\ValidationException
     */
    public function batchAllowDocumentFormats(Request $request)
    {
        $rules = [
            'allowed' => 'nullable|array',
            'allowed.*' => 'required_with:allowed'
        ];
        $this->validate($request, $rules);

        $allowed = $request->allowed ? $request->allowed : [];
        
        /* if ($documentFormats = DocumentFormat::whereIn('id', $allowed)) {
            $documentFormats->update(['allowed' => 1]);   
        } */
        DocumentFormat::query()->whereIn('id', $allowed)->update(['allowed' => 1]);
        DocumentFormat::query()->whereNotIn('id', $allowed)->update(['allowed' => 0]);

        return DocumentFormat::all();
    }

    /**
     * Get only allowed document types
     *
     * @return void
     */
    public function getAllowed()
    {
        return DocumentFormat::allowed()->get();
    }
}
