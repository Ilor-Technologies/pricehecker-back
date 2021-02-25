<?php

namespace App\Api\Controllers;

use App\Api\Requests\CreateCategoryRequest;
use App\Api\Requests\UpdateCategoryRequest;
use App\Category;
use App\Http\Controllers\Controller;
use App\Picture;
use Dingo\Api\Exception\DeleteResourceFailedException;
use Dingo\Api\Exception\StoreResourceFailedException;
use Dingo\Api\Exception\UpdateResourceFailedException;
use Dingo\Api\Http\Request;
use Illuminate\Support\Arr;
use Illuminate\Support\Facades\Validator;
use Symfony\Component\HttpKernel\Exception\NotFoundHttpException;
use Tymon\JWTAuth\JWTAuth;

class CategoryController extends Controller
{
    /**
     * Display a listing of the resource.
     * @param Request $request
     * @return
     */
    public function index(Request $request)
    {
        $search = null;
        if ($request->input('search') != null) {
            $search = $request->input('search');
        }
        $categories = Category::query()->orderBy('name');
        if (!is_null($search)) {
            $categories = $categories->where(function ($query) use ($search) {
                $query->where('name', 'like', '%' . $search . '%')
                    ->orWhere('description', 'like', '%' . $search . '%')
                    ->orWhere('meta_keyword', 'like', '%' . $search . '%')
                    ->orWhere('meta_description', 'like', '%' . $search . '%')
                    ->with('parent')
                    /* ->with(['categoryDetail' => function ($query) use ($search) {
                        $query->whereHas('category_details', 'like', '%' . $search . '%');
                    }]) */
                    /* ->orWhereHas('categoryDetail', function ($query) use ($search) {
                        $query->where('category_details', 'like', '%' . $search . '%');
                    }) */
                    ->with('categoryDetail');
            });
        }

        //date range

        return $categories->withDates()->get();
    }

    public function pagedIndex(Request $request)
    {
        $search = $request->input('search');
        $perPage = (int)$request->input('per_page');
        if (!$perPage) {
            $perPage = 15;
        }
        $categories = Category::query()->with('parent', 'updater')->orderBy('name');
        $categories = $categories->where(function ($query) use ($search) {
            $query->where('name', 'like', '%' . $search . '%')
                ->orWhere('description', 'like', '%' . $search . '%')
                ->orWhere('meta_keyword', 'like', '%' . $search . '%')
                ->orWhere('meta_description', 'like', '%' . $search . '%')
                ->with('parent')
                /* ->with(['categoryDetail' => function ($query) use ($search) {
                    $query->whereHas('category_details', 'like', '%' . $search . '%');
                }]) */
                /* ->orWhereHas('categoryDetail', function ($query) use ($search) {
                    $query->where('category_details', 'like', '%' . $search . '%');
                }) */
                ->with('categoryDetail');
        });

        //date range
//        $result = Category::searchByDate($request, $categories)->paginate($perPage);
        $result = $categories->paginate($perPage);

        $append = [];
        if ($search) $append['search'] = $search;
        if ($perPage) $append['per_page'] = $perPage;

        $result->appends($append);

        return $result;
    }

    //used from external source to populate data here
    public function storeNoBearer(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'name' => 'required',
            'description' => 'required',
            'parent_id' => 'nullable|exists:categories,id',
            'properties' => 'nullable'
        ]);

        if ($validator->fails()) {
            return $this->validationError($validator->errors());
        }

        $data = array_filter(
            $request->only(
                'name',
                'description',
                'parent_id',
                'properties'
            ), 'strlen'
        );


        $data['created_by'] = 1;
        $data['property'] = '';

        if ($request->properties) {
            $properties = explode(',', $request->properties);
            $temprary = [];
            $json = [];
            foreach ($properties as $name) {
                $name = strtolower($name);
                if ($name && !in_array($name, $temprary)) {
                    $json[] = '"' . $name . '":""';
                    $temprary[] = strtolower($name);
                }
            }
            if (count($json)) {
                $data['property'] = '{' . implode(',', $json) . "}";
            }
        }

        $newCategories = [];
        $name = Arr::pull($data, 'name');
        $names = explode('|', $name);
        foreach ($names as $name) {
            if ($name) {
                $category = Category::query()->updateOrCreate(['name' => $name], $data);
                if ($category) {
                    $newCategories[] = $category;
                }
            }
        }
        return $this->withJson(['categories' => $newCategories]);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param \Illuminate\Http\Request|CreateCategoryRequest $request
     * @param JWTAuth $auth
     *
     * @return \Dingo\Api\Http\Response
     */
    public function store(CreateCategoryRequest $request, JWTAuth $auth)
    {
        $user = $this->authUser();

        if (!$user) {
            return $this->withMessage('Access denied!', 403);
        }

        $data = array_filter(
            $request->only(
                'name',
                'description',
                'meta_keyword',
                'meta_description',
                'parent_id',
                'picture_id',
                'display_order',
                'created_by',
                'updated_by'
            ),
            'strlen'
        );

        $data['created_by'] = $user->id;

        $data['property'] = AllGoodsController::extractProperties();

        if ($request->hasFile('picture')) {
            $image = $request->file('picture');
            $name = time() . '.' . $image->getClientOriginalExtension();
            $destinationPath = public_path('/images/goods_category');
            $image->move($destinationPath, $name);

            $picture = Picture::query()->create([
                'seo_filename' => $name,
                'mime_type' => $image->getClientOriginalExtension()
            ]);

            $data['picture_id'] = $picture->id;
        }

        $category = new Category($data);
        if ($category->save()) {
            //create category details
//            if ($request->details) {
//                CategoryDetail::create([
//                    'category_id' => $category->id,
//                    'category_details' => $request->details
//                ]);
//            }

            return $this->withJson(['message' => 'Ok', 'object' => $category]);
        } else {
            throw new StoreResourceFailedException();
        }
    }

    /**
     * Display the specified resource.
     *
     * @param  int $id
     *
     * @return Category
     */
    public function show($id)
    {
        if ($category = Category::query()->where('id', $id)
            ->with('parent.categoryDetail')->with('categoryDetail')->first()) {
            return $this->withJson([
                'category' => $category,
                'others' => Category::query()->where('id', '!=', $id)->orderBy('name')->get()
            ]);
        }

        throw new NotFoundHttpException("Good category not found.");
    }

    /**
     * Update the specified resource in storage.
     *
     * @param \Illuminate\Http\Request|UpdateCategoryRequest $request
     * @param JWTAuth $auth
     * @param  int $id
     * @return \Illuminate\Http\Response
     */
    public function update(UpdateCategoryRequest $request, $id)
    {
        $user = $this->authUser();

        if (!$user) {
            return $this->withMessage('Access denied!', 403);
        }

        $category = Category::query()->find($id);

        if (!$category) {
            return $this->notFound('The goods category does not exist.');
        }

        if (Category::query()->where('name', $request->name)->where('id', '!=', $category->id)->first()) {
            return $this->withMessage('Goods Category named \'' . $request->name . '\' already exist', 400);
        }

        $data = array_filter($request->only(
            'name',
            'description',
            'meta_keyword',
            'meta_description',
            'parent_id',
            'display_order'
        ), 'strlen');

        if ($request->has('parent_id')) {
            $parentId = $request->parent_id;
            $parentCategory = Category::query()->find($parentId);
            if ($parentCategory) {
                if ($parentCategory->isDescendantOf($id)) {
                    throw new UpdateResourceFailedException('Sorry, the specified parent category has this category in it\'s line of descent.');
                }
            }
        }

        $data['updated_by'] = $user->id;

        $picture_id = $category->picture_id == null ? 0 : $category->picture_id;

        $data['property'] = AllGoodsController::extractProperties();

        if ($request->hasFile('picture')) {
            $image = $request->file('picture');
            $name = time() . '.' . $image->getClientOriginalExtension();
            $destinationPath = public_path('/images/goods_category');
            $image->move($destinationPath, $name);

            $picture = Picture::query()->updateOrCreate(['id' => $picture_id], [
                'seo_filename' => $name,
                'mime_type' => $image->getClientOriginalExtension()
            ]);

            $data['picture_id'] = $picture->id;
        }

        if ($category->update($data)) {
            //create category details
//            if ($request->details) {
//                CategoryDetail::updateOrCreate(
//                    ['category_id' => $category->id],
//                    ['category_details' => $request->details]
//                );
//            }

            return $this->withJson(['status' => 'Goods category updated']);
        } else {
            throw new UpdateResourceFailedException();
        }
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int $id
     *
     * @return \Illuminate\Http\Response
     * @throws \Exception
     */
    public function destroy($id)
    {
        if (Category::query()->where('id', $id)->first()->delete()) {
            return $this->withJson(['status' => 'Goods category deleted.']);
        }

        throw new DeleteResourceFailedException('Error encountered, unable to delete goods category at the moment.');
    }

    public function deleteMulti(Request $request)
    {
        if ($request->has('items') && is_array($request->items)) {
            foreach ($request->items as $item) {
                $item = $item;
                Category::query()->where('id', $item)->delete();
            }
            return $this->withMessage('Goods categories deleted.');
        }
        return $this->withMessage("No items to delete", 400);
    }
}
