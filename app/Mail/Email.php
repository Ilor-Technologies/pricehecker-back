<?php

namespace App\Mail;

use Illuminate\Http\Request;
use Illuminate\Bus\Queueable;
use Illuminate\Mail\Mailable;
use Illuminate\Queue\SerializesModels;
use Illuminate\Contracts\Queue\ShouldQueue;
use App\Api\Traits\CustomBladeCompiler;

class Email extends Mailable
{
    use Queueable, SerializesModels, CustomBladeCompiler;

    public $array;

    /**
     * Create a new message instance.
     *
     * @return void
     */
    public function __construct($array)
    {
        $this->array = $array;
    }

    /**
     * Build the message.
     *
     * @return $this
     */
    public function build()
    {
        $this->mailData = [
            'email' => $this->array['email'],
            'subject' => $this->array['subject'],
            'body' => $this->array['body']
        ];
        $this->getView('', $this->array['subject'], 'Sir/Madam,<br/>{{ $subject }} <br/><br/>{{ $body }}');
    }
}
