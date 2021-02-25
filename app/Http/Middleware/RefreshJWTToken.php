<?php

namespace App\Http\Middleware;

use Closure;
use App\JwtToken;
use Tymon\JWTAuth\Exceptions\JWTException;
use Tymon\JWTAuth\Http\Middleware\BaseMiddleware;
use Symfony\Component\HttpKernel\Exception\UnauthorizedHttpException;

class RefreshJWTToken extends BaseMiddleware
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request $request
     * @param  \Closure $next
     *
     * @throws \Symfony\Component\HttpKernel\Exception\UnauthorizedHttpException
     *
     * @return mixed
     */
    public function handle($request, Closure $next)
    {
        $this->checkForToken($request);

        try {
            $jwt = $this->auth->parseToken();

            $user = $jwt->toUser();

            $token = $jwt->refresh();
        } catch (JWTException $e) {
            throw new UnauthorizedHttpException('jwt-auth', $e->getMessage(), $e, $e->getCode());
        }

        JwtToken::updateOrCreate(
            ['user_id' => $user->id],
            ['token' => $token]
        );

        $response = $next($request);

        // Send the refreshed token back to the client.
        $response->headers->set('Authorization', 'Bearer ' . $token);

        return $response;
    }
}
