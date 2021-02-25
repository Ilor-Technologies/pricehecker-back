<?php

namespace App;

use Illuminate\Support\Facades\DB;

class Vendor extends BaseModel
{

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = ['id',
        'business_name',
        'user_id',
        'rc_number',
        'tax_identification_number',
        'address_id',
        'email',
        'business_description',
        'picture_id',
        'admin_comment',
        'comment_by',
        'bpp_id',
        'is_locked',
        'website',
        'is_default'
    ];

    /**
     * The attributes that should be hidden for arrays.
     *
     * @var array
     */
    protected $hidden = ['comment_by', 'address_id', 'picture_id', 'created_at', 'updated_at', 'is_default'];

    protected $appends = [
        'picture', 'username', 'email', 'first_name', 'last_name', 'phone',
        'is_active', 'is_online', "address_line_1", 'address_line_2',
        'city', 'state', 'pobox_number', 'middle_name', 'state_id', 'city_id',
        'supporting_documents', 'email1'
    ];

    private $auth_details = false;

    public function user()
    {
        return $this->belongsTo(User::class, 'user_id');
    }

    private function getAuth()
    {
        if (!$this->auth_details) {
            $this->auth_details = User::query()->find($this->user_id)->toArray();
        }

        return $this->auth_details;
    }

    public function address() {
        return $this->belongsTo(Address::class, 'address_id');
    }

    private function getAddress()
    {
        return $this->address;
    }

    public function getEmailAttribute()
    {
        return $this->getAuth()['email'];
    }

    public function getEmail1Attribute()
    {
        return $this->attributes['email'];
    }

    public function getFirstNameAttribute()
    {
        return $this->getAuth()['first_name'];
    }

    public function getLastNameAttribute()
    {
        return $this->getAuth()['last_name'];
    }

    public function getMiddleNameAttribute()
    {
        return $this->getAuth()['middle_name'];
    }

    public function getPhoneAttribute()
    {
        return $this->getAuth()['phone'];
    }

    public function getIsActiveAttribute()
    {
        return $this->getAuth()['is_active'];
    }

    public function getIsOnlineAttribute()
    {
        return $this->getAuth()['is_online'];
    }

    public function getUsernameAttribute()
    {
        return $this->getAuth()['username'];
    }

    public function getAddressLine1Attribute()
    {
        if (($add = $this->getAddress()) == null) {
            return '';
        }
        return $add->address_line_1;
    }

    public function getAddressLine2Attribute()
    {
        if (($add = $this->getAddress()) == null) {
            return '';
        }
        return $add->address_line_2;
    }

    public function getCityAttribute()
    {
        if (($add = $this->getAddress()) == null) {
            return '';
        }
        return $add->city;
    }

    public function getStateAttribute()
    {
        if (($add = $this->getAddress()) == null) {
            return '';
        }
        return $add->state;
    }

    public function getPoboxNumberAttribute()
    {
        if (($add = $this->getAddress()) == null) {
            return '';
        }
        return $add->pobox_number;
    }

    public function getPictureAttribute()
    {
        return Picture::query()->where('id', $this->picture_id)->pluck('mime_type', 'seo_filename');
    }

    public function getCommentByAttribute()
    {
        return $this->belongsTo(User::class, 'comment_by');
    }
    public function getStateIdAttribute()
    {
        if (($add = $this->getAddress()) == null) {
            return '';
        }
        return $add->state_id;
    }
    public function getCityIdAttribute()
    {
        if (($add = $this->getAddress()) == null) {
            return '';
        }
        return $add->city_id;
    }
    public function getSupportingDocumentsAttribute()
    {
        if ($doc = Document::query()->where('document_type', 1)->get()) {
            return $doc;
        }

        return [];

    }

    public function goods() {
        return $this->hasMany(Good::class, 'vendor_id');
    }

    public function scopeDefault($query) {
        return $query->where('is_default', 1);
    }
}
