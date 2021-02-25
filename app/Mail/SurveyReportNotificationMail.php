<?php

namespace App\Mail;

use Illuminate\Bus\Queueable;
use Illuminate\Mail\Mailable;
use Illuminate\Queue\SerializesModels;
use App\Api\Traits\CustomBladeCompiler;

class SurveyReportNotificationMail extends Mailable
{
    use Queueable, SerializesModels, CustomBladeCompiler;

    private $user;
    private $message;
    /**
     * Create a new message instance.
     *
     * @return void
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
    public function build()
    {
        $this->mailData = [
            'first_name' => $this->user->first_name,
            'message' => $this->message
        ];
        
        return $this->getView('survey_report_email');
    }
}
