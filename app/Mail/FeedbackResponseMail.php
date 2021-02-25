<?php

namespace App\Mail;

use App\Api\Traits\CustomBladeCompiler;
use App\Feedback;
use Illuminate\Bus\Queueable;
use Illuminate\Mail\Mailable;
use Illuminate\Queue\SerializesModels;

//use Illuminate\Contracts\Queue\ShouldQueue;

class FeedbackResponseMail extends Mailable
{
    use Queueable, SerializesModels, CustomBladeCompiler;

    public $feedback;
    //public properties are automatically made available in the view
    public $response;


    /**
     * Create a new message instance.
     *
     * @param Feedback $feedback
     * @param $response
     */
    public function __construct(Feedback $feedback, $response)
    {
        $this->feedback = $feedback;
        $this->response = $response;
    }

    /**
     * Build the message.
     *
     * @return $this
     */
    public function build()
    {
        $this->mailData = [
            'first_name' => $this->feedback->first_name,
            'feedback_content' => $this->feedback->content,
            'response_content' => $this->response->content
        ];
        return $this->getView('feedback_response_email');
    }
}
