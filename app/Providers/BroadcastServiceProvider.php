<?php

namespace App\Providers;

use Illuminate\Support\ServiceProvider;
use Illuminate\Support\Facades\Broadcast;

class BroadcastServiceProvider extends ServiceProvider
{
    /**
     * Bootstrap any application services.
     *
     * @return void
     */
    public function boot()
    {
        Broadcast::routes(['middleware' => ['jwt.auth']]);

        /*
         * Authenticate the user's personal channel...
         */
        Broadcast::channel('App.User.*', function ($user, $userId) {
            return $user->id === $userId;
        });

        Broadcast::channel('chat.{group_id}', function ($user, $group_id) {
            return auth()->check() && $user->isMember($group_id);
        });

        Broadcast::channel('chat-group', function ($user) {
            return auth()->check();
        });
    }
}
