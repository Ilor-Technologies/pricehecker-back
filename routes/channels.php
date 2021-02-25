<?php
/**
 * Created by PhpStorm.
 * User: gemda
 * Date: 03/07/2019
 * Time: 12:57 PM
 */


Broadcast::channel('chat.{group_id}', function ($user, $group_id) {
    return $user->isMember($group_id);
});

Broadcast::channel('chat-group', function ($user) {
    return auth()->check();
});
