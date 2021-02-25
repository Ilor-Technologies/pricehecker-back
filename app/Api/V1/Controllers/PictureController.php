<?php

namespace App\Api\Controllers;

use App\Http\Controllers\Controller;
use App\Picture;
use Dingo\Api\Exception\StoreResourceFailedException;
use Illuminate\Http\Request;
use Dingo\Api\Http\Response;
use Illuminate\Support\Facades\File;
use Illuminate\Support\Facades\Input;
use Dingo\Api\Exception\DeleteResourceFailedException;
use Illuminate\Support\Facades\Response as HttpResponse;
use Illuminate\Support\Str;
use Symfony\Component\HttpKernel\Exception\NotFoundHttpException;
use Exception;

class PictureController extends Controller
{
    /**
     * show/download an image
     */
    public function show($pictureUrl)
    {
        try {
            $pictureUrl = storage_path() . '/app/' . $pictureUrl;
            return HttpResponse::download($pictureUrl);
        } catch (Exception $e) {
            throw new NotFoundHttpException('Picture not found');
        }
    }

    public function storeUpload(Request $request) {
//        $max = (int) (4056 * 2);
        ini_set('memory_limit','256M');
        ini_set('upload_max_filesize','256M');
        ini_set('post_max_size','256M');
        $this->validate($request, ['file' => 'required|file']);
        $picture = Picture::getPicture($request, 'file');
        if ($pictures = Picture::saveUploadedFile($picture, false)) {
            return new Response($pictures, 201);
        }
        throw new StoreResourceFailedException('Couldn\'t complete the upload');
    }

    /**
     * store a picture
     *
     * @param Request $request
     *
     * @return Response
     * @throws \Illuminate\Validation\ValidationException
     */
    public function store(Request $request) {
        ini_set('memory_limit','256M');
        ini_set('upload_max_filesize','256M');
        ini_set('post_max_size','256M');
        $this->validate($request, ['picture' => 'required|image|max:2048']);
        $picture = Picture::getPicture($request);

        if ($pictures = Picture::saveUploadedFile($picture)) {
            return new Response($pictures, 201);
        }
        throw new StoreResourceFailedException('Couldn\'t complete the upload');
    }

    /**
     * delete a picture
     *
     * @param string $picturePath
     *
     * @return Response
     */
    public function destroy($picturePath)
    {
        /* $picture = $picture->where('path', $request->picture)->get();
        if ($picture->count() < 1) {
            throw new NotFoundHttpException('picture not found');
        }
        $picture = $picture->pluck('path');
         */
        //$path = Input::get('picture');
        $path = $picturePath;
        if (!$picture = Picture::query()->where('path', $path)->first()) {
            throw new DeleteResourceFailedException('picture not found');
        }
        if (Picture::deletePicture($picture)) {
            return new Response(['status' => 'picture deleted'], 201);
        }

        throw new DeleteResourceFailedException('picture delete request failed');
    }


    /**
     * delete old pictures that are not attached
     */
    public function deleteOldPictures(Request $request)
    {

        $oldPictures = Picture::getOldPictures();

    }

}
