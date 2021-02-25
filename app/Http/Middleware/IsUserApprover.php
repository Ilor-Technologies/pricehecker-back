<?php

namespace App\Http\Middleware;

use Closure;
use Dingo\Api\Http\Response;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Auth;
use App\GoodReview;

class IsUserApprover
{
    /**
     * Handle an incoming request.
     *
     * @param \Illuminate\Http\Request $request
     * @param \Closure $next
     * @return mixed
     */
    public function handle($request, Closure $next)
    {
        $user = $request->user();
        if (!$approvalDetail = DB::table('approval_details')->find($request->approvalDetailID)) {
            return new Response([
                'error' => [
                    'message' => 'Approval Detail not found',
                    'status_code' => 403
                ]], 403);
        }
        if ($approvalDetail->approving_officer_id != $user->id) {
            return new Response([
                'error' => [
                    'message' => 'Only approving officer can approve or disapprove',
                    'status_code' => 403
                ]], 403);
        }

        return $next($request);
    }
}
