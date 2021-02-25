<?php

namespace App\Http;

use App\Http\Middleware\AuthorizeIfOwner;
use App\Http\Middleware\EncryptCookies;
use App\Http\Middleware\HideSensitiveInformation;
use App\Http\Middleware\IsUserApprover;
use App\Http\Middleware\PermissionMiddleware;
use App\Http\Middleware\RedirectIfAuthenticated;
use App\Http\Middleware\RefreshJWTToken;
use App\Http\Middleware\RoleMiddleware;
use App\Http\Middleware\UpdateUserMiddleware;
use App\Http\Middleware\UserCantRateSelf;
use App\Http\Middleware\UserCantReviewGoodTwice;
use App\Http\Middleware\UserCantReviewOwnGood;
use App\Http\Middleware\UserCantReviewVendorTwice;
use App\Http\Middleware\VerifyCsrfToken;
use Barryvdh\Cors\HandleCors;
use Illuminate\Auth\Middleware\Authenticate;
use Illuminate\Auth\Middleware\AuthenticateWithBasicAuth;
use Illuminate\Auth\Middleware\Authorize;
use Illuminate\Cookie\Middleware\AddQueuedCookiesToResponse;
use Illuminate\Foundation\Http\Kernel as HttpKernel;
use Illuminate\Foundation\Http\Middleware\CheckForMaintenanceMode;
use Illuminate\Routing\Middleware\SubstituteBindings;
use Illuminate\Routing\Middleware\ThrottleRequests;
use Illuminate\Session\Middleware\StartSession;
use Illuminate\View\Middleware\ShareErrorsFromSession;
use Tymon\JWTAuth\Http\Middleware\Authenticate as TymonJwtAuthenticate;
use Tymon\JWTAuth\Http\Middleware\RefreshToken;

class Kernel extends HttpKernel
{
    /**
     * The application's global HTTP middleware stack.
     *
     * These middleware are run during every request to your application.
     *
     * @var array
     */
    protected $middleware = [
        CheckForMaintenanceMode::class,
        HandleCors::class,
    ];

    /**
     * The application's route middleware groups.
     *
     * @var array
     */
    protected $middlewareGroups = [
        'web' => [
            EncryptCookies::class,
            AddQueuedCookiesToResponse::class,
            StartSession::class,
            ShareErrorsFromSession::class,
            VerifyCsrfToken::class,
            SubstituteBindings::class,
        ],

        'api' => [
            'throttle:60,1',
            'bindings',
        ],
    ];

    /**
     * The application's route middleware.
     *
     * These middleware may be assigned to groups or used individually.
     *
     * @var array
     */
    protected $routeMiddleware = [
        'auth' => Authenticate::class,
        'auth.basic' => AuthenticateWithBasicAuth::class,
        'bindings' => SubstituteBindings::class,
        'can' => Authorize::class,
        'guest' => RedirectIfAuthenticated::class,
        'throttle' => ThrottleRequests::class,

        'jwt.auth' => TymonJwtAuthenticate::class,
        'jwt.refresh' => RefreshToken::class,
        'permission' => PermissionMiddleware::class,
        'role' => RoleMiddleware::class,

        'noreviewself' => UserCantRateSelf::class,
        'noreviewowngood' => UserCantReviewOwnGood::class,
        'noreviewgoodtwice' => UserCantReviewGoodTwice::class,
        'noreviewvendortwice' => UserCantReviewVendorTwice::class,
        'owner' => AuthorizeIfOwner::class,
        'tokenrefresh' => RefreshJWTToken::class,
        'hidesensitiveinformation' => HideSensitiveInformation::class,
        'is_user_approver' => IsUserApprover::class,
        'update_user_record' => UpdateUserMiddleware::class,
    ];
}
