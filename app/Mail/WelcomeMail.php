<?php

namespace App\Mail;

use App\Api\Traits\CustomBladeCompiler;
use App\MessageTemplate;
use App\User;
use Illuminate\Bus\Queueable;
use Illuminate\Mail\Mailable;
use Illuminate\Queue\SerializesModels;

//use Illuminate\Contracts\Queue\ShouldQueue;

class WelcomeMail extends Mailable
{
    use Queueable, SerializesModels, CustomBladeCompiler;

    public $user;
    //public properties are automtically made available in the view
    public $activation_link;


    /**
     * Create a new message instance.
     *
     * @param User $user
     * @param $activation_token
     */
    public function __construct($user, $activation_link)
    {
        $this->user = $user;
        $this->activation_link = $activation_link;
    }

    /**
     * Build the message.
     *
     * @return $this
     */
    public function build()
    {
        $this->mailData = [
            'first_name' => $this->user->first_name,
            'activation_link' => $this->activation_link,
            'user' => $this->user
        ];

        return $this->getView('activation_email');
    }
}
