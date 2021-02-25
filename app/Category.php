<?php

namespace App;

use Carbon\Carbon;
use Illuminate\Support\Str;

class Category extends BaseModel
{
    
    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = ['id',
        'name',
        'description',
        'meta_keyword',
        'meta_description',
        'parent_id',
        'picture_id',
        'display_order',
        'property',
        'created_by',
        'updated_by'
    ];
    
    /**
     * The attributes that should be hidden for arrays.
     *
     * @var array
     */
    protected $hidden = [];
    
    protected $appends = ['properties_template', 'preview_name'];

    public function getPreviewNameAttribute() {
        return Str::limit($this->name,22, '...');
    }
    
    public function goods() {
        return $this->belongsToMany(AllGoods::class, 'all_good_id');
    }
    
    public function parent() {
        return $this->belongsTo(Category::class, 'parent_id');
    }
    
    public function children() {
        return $this->hasMany(Category::class, 'parent_id');
    }
    
    public function categoryDetail() {
        return $this->hasOne(CategoryDetail::class, 'category_id');
    }
    
    public function parentCategory() {
        return $this->belongsTo(Category::class, 'parent_id');
    }

    public function isDescendantOf($id) {
        return $this->parent_id == $id || ($this->parent && $this->parent->isDescendantOf($id));
    }
    
    public function picture() {
        if ($this->picture_id == null) {
            return null;
        }
        return $this->belongsTo(Picture::class, 'picture_id');
    }

    public function getPropertiesTemplateAttribute() {
        $template = $this->property;
        
        if (($template == null || !$template)) {
//            sample data
//            $template = "{\"ram\": \"text\",\"color\":\"text\",\"height\": \"number\",\"weight\":\"number\"}";
            if($this->parent) {
                return $this->parent->properties_template;
            }
            return [];
        }
        
        $data = [];
        $tplData = [];
        
        
        try {
            $tplData = (array)json_decode($template, true);
        } catch (\Exception $e) {
        }
        
        foreach ($tplData as $key => $value) {
            if (!trim($key)) {
                continue;
            }
            if($value == 'text') {
                $value = '';
            }
            $values = explode(',', $value);
            $d = ["name" => $key, "type" => ''];
            if (count($values) > 1) {
                $d['type'] = 'select';
            }
            $d['values'] = $values;
            
            $data[] = $d;
        }

        if($this->parent) {
            return array_merge($this->parent->properties_template, $data);
        }
        return $data;
    }

    /**
     * check that the passed categories are available in db
     *
     * @param array $categories
     * @return bool|\Illuminate\Support\Collection of valid categories|bool
     */
    public function areValidCategories(array $categories = []) {
        if ($categories === array_intersect($categories, $this->pluck('name')->toArray())) {
            return $this->where('name', $categories)->pluck('id');
        }
        return false;
    }
}
