<?php

namespace App\Http\Middleware;

use Closure;
use Dingo\Api\Http\Response;
use Illuminate\Support\Facades\Auth;
use App\GoodReview;

class UserCantReviewGoodTwice
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
        if ($request->good_id) {
            if ($goodReview = GoodReview::where('good_id', $request->good_id)->first()) {
                if ($goodReview->user_id == GoodReview::reviewer()) {
                    return new Response([
                        'error' => [
                            'message'=> 'you cannot review this item again',
                            'status_code' => 403
                            ]], 403);
                }
            }
        }

        return $next($request);
    }
}
