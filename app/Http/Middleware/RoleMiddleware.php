<?php

namespace App\Http\Middleware;

use App\Exceptions\UnauthorizedException;
use Closure;

class RoleMiddleware
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request $request
     * @param  \Closure $next
     * @param $role
     * @return mixed
     * @throws RolePermissionException
     */
    public function handle($request, Closure $next, $role)
    {
        if (auth()->guest()) {
            throw UnauthorizedException::notLoggedIn();
        }

        $roles = is_array($role)
            ? $role
            : explode('|', $role);


        $roles = array_map(function ($value) {
            return ucwords(str_replace('_', ' ', $value));
        }, $roles);

        if (! auth()->user()->hasAnyRole($roles)) {
            throw UnauthorizedException::forRoles($roles);
        }
        return $next($request);
    }
}
