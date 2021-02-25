<?php

namespace App\Mail;

use Illuminate\Bus\Queueable;
use Illuminate\Mail\Mailable;
use Illuminate\Queue\SerializesModels;
use Illuminate\Support\Facades\Blade;
use App\User;
use App\Api\Traits\CustomBladeCompiler;
use Symfony\Component\Debug\Exception\FatalThrowableError;

class RequestPasswordResetLinkMail extends Mailable {
    use Queueable, SerializesModels, CustomBladeCompiler;
    
    public $reset_link;
    public $user;
    
    /**
     * Create a new message instance.
     *
     * @param User $user
     * @param $reset_link
     */
    public function __construct($user, $reset_link) {
        $this->user = $user;
        $this->reset_link = $reset_link;
    }
    
    /**
     * Build the message.
     *
     * @return $this
     */
    public function build() {
        $this->mailData = ['first_name' => $this->user->first_name, 'reset_link' => $this->reset_link];
        return $this->getView('password_reset_email');
    }
}
