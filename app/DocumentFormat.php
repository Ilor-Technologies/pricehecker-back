<?php

namespace App;

use Illuminate\Database\Eloquent\Builder;

class DocumentFormat extends BaseModel
{

    protected $table = 'document_formats';

    protected $fillable = ['id', 'extension', 'mime_type', 'description'];

    protected $hidden = ['created_by', 'updated_by'];

    /**
     * lowercase all extensions.
     *
     * @param  string $value
     *
     * @return void
     */
    public function setExtensionAttribute($value)
    {
        $this->attributes['extension'] = strtolower($value);
    }

    /**
     * lowercase all mime_types.
     *
     * @param  string $value
     *
     * @return void
     */
    public function setMimeTypeAttribute($value)
    {
        $this->attributes['mime_type'] = strtolower($value);
    }

    /**
     * Allowed document types
     *
     * @param Builder $query
     * @return Builder
     */
    public function scopeAllowed(Builder $query)
    {
        return $query->where('allowed', 1);
    }

    /**
     * check that the passed DocumentFormats are available in db
     *
     * @return ids of valid DocumentFormats|bool
     */
    public function areValidDocumentFormats(array $documentFormats = [])
    {
        if ($documentFormats === array_intersect($documentFormats, $this->pluck('id')->toArray())) {
            return $documentFormats;
        }
        return false;
    }

    /**
     * Get the extensions of the valid types
     *
     * @return array
     */
    public function getAllowedExtensions() {
        $allowedExtensions = $this->allowed()->get();
        return $allowedExtensions->pluck('extension')->toArray();
    }
    /**
     * Get the mime_types of the valid types
     *
     * @return array
     */
    public function getAllowedMimeTypes() {
        $allowedMimetypes = $this->allowed()->get();
        return $allowedMimetypes->pluck('mime_type')->toArray();
    }
     /**
     * Get the mime_types of the valid types to comma seperated string
     *
     * @return string
     */
    public function allowedExtensionsToCommaSeperatedString() {
        $allowedExtensions = $this->getAllowedExtensions();
        if(count($allowedExtensions)) {
            return implode(',', $allowedExtensions);
        }

        return '';
    }
}
