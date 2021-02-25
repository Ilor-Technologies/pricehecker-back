<?php

namespace App\Events;

use Illuminate\Broadcasting\InteractsWithSockets;
use Illuminate\Foundation\Events\Dispatchable;
use Illuminate\Queue\SerializesModels;

class EmailSent
{
    use Dispatchable, InteractsWithSockets, SerializesModels;

    public $email;
    /**
     * Create a new event instance.
     *
     * @return void
     */
    public function __construct(array $email)
    {
        $this->email = $email;
    }
}
