<?php

namespace App\Mail;

use App\Api\Traits\CustomBladeCompiler;
use Illuminate\Bus\Queueable;
use Illuminate\Mail\Mailable;
use Illuminate\Queue\SerializesModels;
use Illuminate\Contracts\Queue\ShouldQueue;

class UserRegistrationMail extends Mailable
{
    use Queueable, SerializesModels, CustomBladeCompiler;

    public $user;

    /**
     * Create a new message instance.
     *
     * @return void
     */
    public function __construct($user)
    {
        $this->user = $user;
    }

    /**
     * Build the message.
     *
     * @return $this
     */
    public function build()
    {
        $this->mailData = [
            'full_name' => $this->user->full_name,
            'user_name' => $this->user->username,
            'institution_name' => ($this->user->internalUser && $this->user->internalUser->institution)
                ? $this->user->internalUser->institution->name : '',
            'parastatal_name' => ($this->user->internalUser && $this->user->internalUser->parastatal)
                ? $this->user->internalUser->parastatal->name : '',
        ];

        return $this->getView('user_registration_email');
    }
}
