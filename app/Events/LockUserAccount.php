<?php

namespace App\Events;

use Illuminate\Broadcasting\InteractsWithSockets;
use Illuminate\Foundation\Events\Dispatchable;
use Illuminate\Queue\SerializesModels;
use App\User;

class LockUserAccount
{
    use Dispatchable, InteractsWithSockets, SerializesModels;

    public $admin;
    public $user;

    /**
     * Create a new event instance.
     *
     * @param $admin
     * @param $user
     */
    public function __construct($admin, $user)
    {
        $this->admin = $admin;
        $this->user = $user;
    }
}
