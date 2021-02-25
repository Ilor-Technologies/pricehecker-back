<?php

namespace App;

use Exception;
use Illuminate\Http\UploadedFile;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\Storage;

class Document extends BaseModel
{

    protected $table = 'documents';

    protected $fillable = ['id', 'path', 'mime_type', 'seo_filename', 'document_type'];


//    public static function boot()
//    {
//        parent::boot();
//        /**
//         * scope to return only documents that the user owns
//         */
//        static::addGlobalScope('isOwner', function (Builder $builder) {
//            //-1000 is just a random negative number to make sure the builder returns nothing
//            $return = -1000;
//            try {
//                $user = JWTAuth::parseToken()->authenticate();
//                if ($user->hasPermissionTo('view_others_documents')) {
//                    return $builder;
//                } else {
//                    $return = $user->id;
//                }
//            } catch (Exception $e) {
//                //
//            }
//
//            return $builder->where('created_by', $return);
//        });
//    }

    /**
     * relationships
     */
    public function documentType()
    {
        return $this->belongsTo('App\DocumentType', 'document_type');
    }

    public function user()
    {
        return $this->creator();
    }

    /**
     * save document to dir and store in db
     *
     * @param object $document
     * @param string $documentName
     * @param string $dir
     * @return
     */
    public static function saveDocument($document, string $documentName = null, $documentType = null, string $dir = null)
    {
        $self = new self();

        if (is_array($document)) {
            //array of documents
            $documents = [];
            foreach ($document as $p) {
                if (!$saved = $self->_saveDocument($p, $documentName, $documentType, $dir)) {
                    //break if there's an error
                    return $saved;
                }
                $documents[] = $saved;
            }
            //array of created objects
            return $documents;
        } else {
            //single document
            return $self->_saveDocument($document, $documentName, $documentType, $dir);
        }
    }

    /**
     * get a file from request
     *
     * @param Dingo\Api\Http\FormRequest | Illuminate\Http\Request $request
     */
    public static function getDocument($request)
    {
        $document = $request->file('file');
        if (is_array($document)) {
            $documents = [];
            foreach ($document as $d) {
                $documents[] = $d;
            }
            return $documents;
        }
        return $document;
    }

    /**
     * save a document to disk
     *
     * @param UploadedFile $document
     * @param string $documentName
     * @param string $dir
     * @return bool|$this
     */
    protected function _saveDocument(UploadedFile $document, string $documentName = null, $documentType = null, string $dir = null)
    {
        //save document to disk /time()/
        if ($path = $document->store(self::getDocumentDirectory($dir))) {
            $data = [
                'path' => $path,
                'mime_type' => $document->getClientMimeType(),
                'seo_filename' => self::getDocumentName($document, $documentName),
                'document_type' => $documentType
            ];
            //persist to db
            return $this->create($data);
        }

        return false;
    }

    /**
     * get directory to store document
     *
     * @param string $dir
     * @return string
     */
    public static function getDocumentDirectory(string $dir = null)
    {
        //directory is of the form 2017/10
        //if a directory is passed, also prepend the directory
        $default = date('Y') . '/' . date('m');
        $dir = is_null($dir) ? 'public/' . $default : 'public/' . $dir . '/' . $default;

        return $dir;
    }

    /**
     * delete document. if document object is passed, delete those documents
     *
     * @param $document
     * @return array|$this
     */
    public static function deleteDocument($document)
    {
        $self = new self();

        $path = $document->pluck('path');

        $deletedDocuments = [];
        foreach ($path as $p) {
            if (!$deleted = $self->_deleteDocument($p)) {
                return $deleted;
            }
            $deletedDocuments[] = $deleted;
        }
        //array of deleted document objects
        return $deletedDocuments;
    }

    /**
     * delete document by path
     *
     * @param string $path
     * @return bool|$this
     */
    protected function _deleteDocument(string $path)
    {
        $deleted = false;

        if (Storage::delete($path)) {
            //document deleted
            //delete from db
            try {
                $delete = $this->where('path', $path)->first();
                //$deleted is the deleted document object                
                $deleted = $delete;
                $delete->delete();
            } catch (Exception $e) {
                $deleted = false;
            }
        }

        return $deleted;
    }

    /**
     * get document name
     *
     * @param UploadedFile $document
     * @param string $documentName
     * @return string
     */
    public static function getDocumentName(UploadedFile $document, string $documentName = null)
    {
        return is_null($documentName) ? $document->getClientOriginalName() : $documentName;
    }
}
