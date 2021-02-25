<?php

namespace App\Http\Middleware;

use Closure;
use Dingo\Api\Http\Response;
use Illuminate\Support\Facades\Auth;
use App\Vendor;
use App\VendorReview;

class UserCantRateSelf
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure  $next
     * @return mixed
     */
    public function handle($request, Closure $next)
    {
        if ($request->vendor_id) {
            if ($vendor = Vendor::find($request->vendor_id)) {
                $review = new VendorReview;
                if ($vendor->user_id == $review->reviewer()) {
                    return new Response([
                        'error' => [
                            'message'=> 'you cannot manage your own review',
                            'status_code' => 403
                            ]], 403);
                }
            }
        }

        return $next($request);
    }
}
