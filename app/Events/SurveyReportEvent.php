<?php

namespace App\Events;

use Illuminate\Broadcasting\Channel;
use Illuminate\Broadcasting\InteractsWithSockets;
use Illuminate\Broadcasting\PrivateChannel;
use Illuminate\Foundation\Events\Dispatchable;
use Illuminate\Queue\SerializesModels;
use Illuminate\Support\Facades\Mail;
use App\Api\Controllers\SysNotificationController;
use App\InternalUser;
use App\SurveyReport;
use App\User;
use App\Mail\SurveyReportNotificationMail;

class SurveyReportEvent
{
    use Dispatchable, InteractsWithSockets, SerializesModels;

    const CREATED = 'creation', REVIEWED = 'review', APPROVED = 'approval';

    public $user;
    public $item;
    public $type;

    /**
     * Create a new event instance.
     *
     * @param User $user
     * @param SurveyReport $survey
     * @param $type
     */
    public function __construct(User $user,  SurveyReport $survey, $type)
    {
        $this->user = $user;
        $this->item = $survey;
        $this->type = $type;

        if($type == self::APPROVED) {
            $message = 'A survey report titled '.$survey->title.' has just been approved by <strong>'. $user->username .'</strong>';
        } else if($type == self::CREATED) {
            $message = 'A new survey report titled <strong>'.$survey->title.'</strong> created by <strong>'. $user->username .'</strong> is awaiting review and approval.';
        }else if($type == self::REVIEWED) {
            $message = 'Survey report titled <strong>'.$survey->title.'</strong> reviewed by <strong>'. $user->username .'</strong> is awaiting approval.';
        } else {
            return;
        }
//        switch()
        foreach(InternalUser::query()->where('institution_id', $user->internalUser->institution_id)->get() as $iUser) {
            if($iUser->user->can('approve_survey_report') || ($iUser->user->can('review_survey_report') && $type == self::CREATED)) {
                SysNotificationController::save($iUser->user, $message);
                Mail::to($iUser->user->email)->queue(new SurveyReportNotificationMail($iUser->user, $message));
            }
        }
    }
}
