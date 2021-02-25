<?php

namespace App\Http\Controllers;

use App\IsLocked;
use Illuminate\Foundation\Bus\DispatchesJobs;
use Illuminate\Routing\Controller as BaseController;
use Illuminate\Foundation\Validation\ValidatesRequests;
use Illuminate\Foundation\Auth\Access\AuthorizesRequests;

class Controller extends BaseController
{
    use AuthorizesRequests, DispatchesJobs, ValidatesRequests;

    public function __construct()
    {
        if (($user = $this->authUser())){
            $lock_details = IsLocked::query()->where('user_id', $user->id)->first();
            if ($lock_details) {
                return $this->withJson([
                    'message' => 'Sorry, you have been locked out.',
                    'reason' => $lock_details->reason
                ], 403);
            }
        }
    }

    public function authUser()
    {
        return auth()->user();
    }

    public function withMessage($message, $status = 200)
    {
        return $this->withJson(['message' => $message], $status);
    }

    public function withJson($array, $status = 200)
    {
        return response()->json($array, $status);
    }

    public function forbidden($data)
    {
        if (is_array($data)) {
            return $this->withJson($data, 403);
        }

        return $this->withMessage($data, 403);
    }

    public function notFound($data)
    {
        if (is_array($data)) {
            return $this->withJson($data, 404);
        }

        return $this->withMessage($data, 404);
    }

    public function validationError($errors) {
        return $this->withJson(['errors' => $errors], 422);
    }
}
