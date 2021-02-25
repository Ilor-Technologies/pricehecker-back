<?php

namespace App\Api\Controllers;

use App\Http\Controllers\Controller;
use App\SysNotification;
use Illuminate\Http\Request;
use Tymon\JWTAuth\JWTAuth;

class SysNotificationController extends Controller
{
    public function index(JWTAuth $auth, Request $request)
    {
        $user = $this->authUser();
//        SysNotification::where('user_id', $user->id)->update(['status' => true]);
        $filter = $request->input('filter');
        $perPage = 15;
        $pP = (int)$request->input('per-page');
        $status = null;

        if ($request->input('status') == 'read') {
            $status = true;
        } else if ($request->input('status') == 'unread') {
            $status = false;
        }

        if ($pP) {
            $perPage = $pP;
        }
        $result = $user->notifications('message', 'like', '%' . $filter . '%')->withDates();
        if ($status != null) {
            $result = $result->where('status', $status);
        }

        $result = $result->orderByDesc('created_at')->paginate($perPage);
        $appends = [];
        if ($filter) {
            $appends['filter'] = $filter;
        }

        if ($status !== null) {
            $appends['status'] = $request->input('status');
        }

        $result->appends($appends);

        if ($perPage) {
            $result->appends(['per-page' => $perPage]);
        }

        return $result;
    }

    public function getUnread(JWTAuth $auth)
    {
        $user = $this->authUser();
        $count = SysNotification::query()->where(['status' => false, 'user_id' => $user->id])->count();
        return response()->json(['total' => $count]);
    }

    public function destroy($id)
    {
        $user = $this->authUser();
        $item = SysNotification::query()->where('user_id', $user->id)->where('id', $id)->first();
        if (!$item) {
            return response('Specified notification not found!', 404);
        }

        if ($item->delete()) {
            return $this->withJson(['success' => "Notification deleted successfully!"]);
        }
        return response("Unable to delete the specified notification at the moment, try again.", 500);
    }

    public static function save($user, $message, $type = 'info')
    {
        $sys = new SysNotification();
        $sys->user_id = $user->id;
        $sys->message = $message;
        $sys->type = $type;
        if ($sys->save())
            return $sys;
        return false;
    }
}
