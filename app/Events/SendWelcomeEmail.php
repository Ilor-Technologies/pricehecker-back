<?php

namespace App\Events;

use Illuminate\Broadcasting\InteractsWithSockets;
use Illuminate\Foundation\Events\Dispatchable;
use Illuminate\Queue\SerializesModels;
use Illuminate\Support\Facades\Mail;
use App\User;
use App\Mail\WelcomeMail;

class SendWelcomeEmail
{
    use Dispatchable, InteractsWithSockets, SerializesModels;

    public $user;

    /**
     * Create a new event instance.
     *
     * @param User $user
     * @param $activation_link
     */
    public function __construct($user, $activation_link)
    {
        $this->user = $user;
        $activation_link = url('/activate/' . $activation_link);
        Mail::to($user->email)->queue(new WelcomeMail($user, $activation_link));
    }
}
