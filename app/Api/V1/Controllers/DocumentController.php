<?php

namespace App\Api\Controllers;

use App\Document;
use App\DocumentFormat;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Dingo\Api\Http\Response;
use Dingo\Api\Exception\StoreResourceFailedException;
use Dingo\Api\Exception\DeleteResourceFailedException;
use Illuminate\Support\Facades\Response as HttpResponse;
use Symfony\Component\HttpKernel\Exception\NotFoundHttpException;
use Exception;

class DocumentController extends Controller
{
    /**
     * get all documents
     *
     * @param Request $request
     * @return
     */
    public function index(Request $request)
    {
        $search = null;
        if ($request->input('search') != null) {
            $search = $request->input('search');
        }
        $documents = Document::query();

        if (!is_null($search)) {
            $documents = $documents->where(function ($query) use ($search) {
                $query->where('seo_filename', 'like', '%' . $search . '%');
            });
        }

        return $documents->with('user')->with('documentType')->withDates()->get();
    }

    /**
     * show/download an document
     */
    public function show($documentUrl)
    {
        try {
            $documentUrl = str_after($documentUrl, 'public');
            $documentUrl = public_path() . '/storage' . $documentUrl;
            //dd($documentUrl);
            return HttpResponse::download($documentUrl);
        } catch (Exception $e) {
            throw new NotFoundHttpException('document not found');
        }
    }

    /**
     * Upload a new document
     *
     * @param Request $request
     * @param DocumentFormat $documentFormat
     * @return Response
     * @throws \Illuminate\Validation\ValidationException
     */
    public function store(Request $request, DocumentFormat $documentFormat)
    { 
        //get allowed formats
        $allowedFormats = $documentFormat->allowedExtensionsToCommaSeperatedString();
        $rules = [
            'file' => 'required|max:2048|mimes:' . $allowedFormats,
            'document_type' => 'required',
        ];
        $message = [
            'mimes' => 'uploaded document format, not allowed'
        ];
        
        //validate
        $this->validate($request, $rules, $message);
        $document = Document::getDocument($request);

        if ($documents = Document::saveDocument($document, null, $request->document_type)) {
            return new Response($documents, 201);
        }

        throw new StoreResourceFailedException('Couldn\'t upload document');
    }

    /**
     * delete a document
     *
     * @param string $documentPath
     *
     * @return Response
     */
    public function destroy($documentPath)
    {
        $path = $documentPath;

        if (!$document = Document::query()->where('path', $path)->first()) {
            throw new DeleteResourceFailedException('document not found');
        }

        if (Document::deleteDocument($document)) {
            return new Response(['status' => 'document deleted'], 201);
        }

        throw new DeleteResourceFailedException('document delete request failed');
    }

    /**
     * batch delete documents
     *
     * @param Request $request
     * @return Response
     * @throws \Illuminate\Validation\ValidationException
     */
    public function batchDestroy(Request $request)
    {
        $rules = [
            'paths' => 'required|array',
            'paths.*' => 'required|string'
        ];
        $this->validate($request, $rules);

        $paths = $request->paths ? $request->paths : [];
        $documents = Document::whereIn('path', $paths)->get();

        if (!$documents->count()) {
            throw new DeleteResourceFailedException('documents not found');
        }

        if (Document::deleteDocument($documents)) {
            return new Response(['status' => 'documents deleted'], 201);
        }

        throw new DeleteResourceFailedException('documents delete request failed');
    }
}
