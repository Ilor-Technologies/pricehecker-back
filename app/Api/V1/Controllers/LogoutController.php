<?php

namespace App\Api\Controllers;

use Tymon\JWTAuth\JWTAuth;
use App\Events\Logout;
use App\User;
use App\JwtToken;

class LogoutController extends \App\Http\Controllers\Controller
{

    /**
     * User logout
     * @SWG\Post(
     *   path="/auth/logout",
     *   tags={"Users"},
     *   summary="Logs user out",
     *   description="",
     *   produces={"application/json"},
     *   security={
     *         {
     *             "Bearer": {}
     *         }
     *     },
     *   @SWG\Response(response=200, description="successful operation",
     *     @SWG\Schema(
     *          @SWG\Property(property="message", type="string", description="Message"),
     *          @SWG\Property(property="status", type="string", description="Status"),
     *      )
     *   ),
     * )
     */
    public function LogoutUser(User $user, JWTAuth $JWTAuth)
    {
        //get authenticated user to user for event
        $user = $this->authUser();

        //invalidate token
        $JWTAuth->invalidate($JWTAuth->getToken());
        
        //fire logged out event
        event(new Logout($user));

        //delete old token if exists in jwt_token table
        JwtToken::blackListToken($user);
        
        return $this->withJson([
            'status' => 'ok',
            'message' => 'logged out'
        ]);
    }
}
