<?php

namespace App\Http\Middleware;

use App\User;
use Closure;

class UpdateUserMiddleware
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure  $next
     * @return mixed
     */
    public function handle($request, Closure $next, $permission)
    {
        $user = User::find($request->route('id'));
        if (!$user) {
            return response('User not found', 404);
        }
        if (!auth()->check()) {
            return response('Unauthenticated', 401);
        }

        $authUser = auth()->user();
        if ($user->id !== $authUser->id) {
            if ($user->is_vendor && !$authUser->can($permission) || (!$user->is_vendor && !$authUser->can($permission))) {
                return response('User does not have the required permissions.', 403);
            }
        }
        return $next($request);
    }
}
