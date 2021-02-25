<?php

namespace App\Http\Middleware;

use Closure;
use Dingo\Api\Http\Response;
use Illuminate\Support\Facades\Auth;
use App\VendorReview;

class UserCantReviewVendorTwice
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
            if ($vendorReview = VendorReview::where('vendor_id', $request->vendor_id)->first()) {
                $review = new VendorReview;
                if ($vendorReview->user_id == $review->reviewer()) {
                    return new Response(
                        ['error' =>
                            ['message'=> 'You cannot review this vendor again', 'status_code' => 403]
                        ],
                        403
                    );
                }
            }
        }

        return $next($request);
    }
}
