<?php

namespace App\Http\Middleware;

use Closure;
use Dingo\Api\Http\Response;
use Illuminate\Support\Facades\Auth;
use App\Good;
use App\GoodReview;

class UserCantReviewOwnGood
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
        //the if statements can be on a single line. they're just broken for clarity
        if ($request->good_id) {
            if ($good = Good::find($request->good_id)) {
                if ($good->created_by == GoodReview::reviewer()) {
                    return new Response([
                        'error' => [
                            'message'=> 'you cannot manage your own item\'s review',
                            'status_code' => 403
                            ]], 403);
                }
            }
        }

        return $next($request);
    }
}
