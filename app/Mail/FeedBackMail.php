<?php

namespace App\Mail;

use Illuminate\Bus\Queueable;
use Illuminate\Mail\Mailable;
use Illuminate\Queue\SerializesModels;
use App\Api\Traits\CustomBladeCompiler;

class FeedBackMail extends Mailable
{
    use Queueable, SerializesModels, CustomBladeCompiler;

    public $user;
    public $message;

    /**
     * Create a new message instance.
     *
     * @param $user
     * @param $message
     */
    public function __construct($user, $message)
    {
        $this->user = $user;
        $this->message = $message;
    }

    /**
     * Build the message.
     *
     * @return $this
     */
    public function build() {
        $this->mailData = ['first_name' => $this->user->first_name, 'message' => $this->message];
        return $this->getView('feedback_email');
    }
}
