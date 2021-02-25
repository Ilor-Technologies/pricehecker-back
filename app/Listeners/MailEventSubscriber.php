<?php

namespace App\Listeners;

use App\Api\Controllers\EventController;
use App\Events\SurveyReportEvent;

class MailEventSubscriber {
    /**
     * Handle email events.
     */
    public function onEmailSent($event) {
        $email = $event->email;
        EventController::save('Email sent', 2,
            'An email was sent to (' . $email['email'] . '). ' . 'Subject "' . $email['subject'] . '"', __FILE__
        );
    }

    public function onWelcomeEmailSent($event) {
        EventController::save('Welcome email sent', 2,
            'A welcome email was sent to ' . $event->user->first_name . ' (' . $event->user->email . ').', __FILE__
        );
    }

    public function onSurveyReportEmailSent(SurveyReportEvent $event) {
        EventController::save('Survey report email sent', 2,
            'A notification email was sent to ' . $event->user->first_name . ' (' . $event->user->email . ') on ' . $event->type . ' of survey report titled "' . $event->item->title . '".', __FILE__
        );
    }

    /**
     * Register the listeners for the subscriber.
     *
     * @param  \Illuminate\Events\Dispatcher $events
     */
    public function subscribe($events) {
        $events->listen(
            'App\Events\EmailSent',
            'App\Listeners\MailEventSubscriber@onEmailSent'
        );
        $events->listen(
            'App\Events\SendWelcomeEmail',
            'App\Listeners\MailEventSubscriber@onWelcomeEmailSent'
        );

        $events->listen(
            'App\Events\SurveyReportEvent.php',
            'App\Listeners\MailEventSubscriber@onSurveyReportEmailSent'
        );
    }
}
