<?php

namespace App\Http\Middleware;

use Closure;
use Symfony\Component\HttpKernel\Exception\NotFoundHttpException;
use Exception;

class AuthorizeIfOwner
{
    private $abilities = [
        'index' => 'view',
        'edit' => 'edit',
        'show' => 'view',
        'update' => 'edit',
        'create' => 'add',
        'store' => 'add',
        'destroy' => 'delete',
        'get' => 'delete',
        'put' => 'edit',
        'post' => 'delete',
        'delete' => 'delete'
    ];

    /**
     * Handle an incoming request.
     * $resourceName is the name of the resource passed to the middleware in the route,
     * eg middleware=>owner:goods
     *
     * $resourceId gets the parameter passed to this route
     * by getting the singular form of $resourceName. eg goods = good
     *
     * hence this method is assuming your routes are like example.com/resources/{resource}
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure  $next
     * @param  string    $resourceName
     * @return mixed
     */
    public function handle($request, Closure $next, $resourceName)
    {
        //$method = strtolower($request->getMethod());
        $resourceName = strtolower($resourceName);
        $resourceNameSingle = str_singular($resourceName);

        $method = $request->route()->getAction()['as'];
        $method = $this->routeMethodByActionAs($method); 
        $ability = $this->getAbility($method, $resourceName);
        
        $resourceId = $request->route()->parameter($resourceNameSingle);
        $user = $request->user();

        try {
            if ($user->hasRole('vendor') || (!$user->hasRole('super_admin') && $user->hasAnyPermission([$ability]))) {
                //try to get the row from the table in db
                if (!$resource = \DB::table($resourceName)->find($resourceId)) {
                    throw new NotFoundHttpException($resourceNameSingle . ' record not found');
                }
                $owner_id = $resource->created_by;
                if (($user->id != $owner_id) && !$user->hasAnyPermission([$ability])) {
                    //abort(403, 'Unauthorized action.');
                    throw new NotFoundHttpException($resourceNameSingle . ' record not found in your collection.');
                }     
            }
        } catch(Exception $e) {
            throw new NotFoundHttpException($resourceNameSingle . ' not found');                
        }

        return $next($request);
    }

    public function getAbility($method, $resourceName)
    {
        $action = array_get($this->getAbilities(), $method);

        return $action . '_' . $resourceName;
    }

    protected function routeMethodByActionAs(string $method): string
    {
        $method = explode('.', $method);
        return $method[1];
    }

    private function getAbilities()
    {
        return $this->abilities;
    }

}
