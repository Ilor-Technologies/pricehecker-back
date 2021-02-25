<?php

namespace App\Events;

use Illuminate\Broadcasting\Channel;
use Illuminate\Broadcasting\InteractsWithSockets;
use Illuminate\Broadcasting\PrivateChannel;
use Illuminate\Foundation\Events\Dispatchable;
use Illuminate\Queue\SerializesModels;
use Illuminate\Support\Facades\Mail;
use App\Api\Controllers\SysNotificationController;
use App\Feedback;
use App\User;
use App\Mail\FeedBackMail;

class FeedBackEvent
{
    use Dispatchable, InteractsWithSockets, SerializesModels;

    const CREATE = 'created', RESPONSE = 'responded';

    public $user;
    public $item;

    /**
     * Create a new event instance.
     *
     * @return void
     */
    public function __construct($user, Feedback $item)
    {
        $this->user = $user;
        $this->item = $item;

        $message = 'A feedback message was received from user ' . $item->first_name . ' ' . $item->last_name . '[' . $item->email . ']' . 'Follow link below to give a response.<br>Thank you.';

//        switch()
        foreach (User::query()->where('is_vendor', false)->where('is_active', true)->get() as $iUser) {
            if ($iUser->can('respond_to_feedbacks')) {
                SysNotificationController::save($iUser, $message);
                Mail::to($iUser->email)->queue(new FeedBackMail($iUser, $message));
            }
        }
    }
}
