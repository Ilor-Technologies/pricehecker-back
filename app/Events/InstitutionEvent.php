<?php

namespace App\Events;

use Illuminate\Broadcasting\InteractsWithSockets;
use Illuminate\Foundation\Events\Dispatchable;
use Illuminate\Queue\SerializesModels;
use App\User;

class InstitutionEvent
{
    use Dispatchable, InteractsWithSockets, SerializesModels;

    public $institution;
    public $admin;
    public $action;

    /**
     * Create a new event instance.
     *
     * @param User $admin
     * @param $institution
     * @param int $action
     */
    public function __construct(User $admin, $institution, int $action)
    {
        $this->institution = $institution;
        $this->admin = $admin;
        $this->action = $action;
    }
}
