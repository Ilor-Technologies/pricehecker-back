<?php

namespace App\Events;

use Illuminate\Support\Facades\Mail;
use Illuminate\Queue\SerializesModels;
use App\Mail\FeedbackResponseMail;
use Illuminate\Foundation\Events\Dispatchable;
use Illuminate\Broadcasting\InteractsWithSockets;

class FeedbackRespondedTo {
	use Dispatchable, InteractsWithSockets, SerializesModels;

	public $feedback;
	public $response;

	/**
	 * Create a new event instance.
	 *
	 * @param $ip
	 */
	public function __construct( $feedback, $response ) {
		$this->feedback = $feedback;
		$this->response = $response;
        Mail::to($this->feedback->email)->queue(new FeedbackResponseMail( $feedback, $response ));		
	}
}
