<?php

namespace App;


use Yajra\Auditable\AuditableTrait;
use Illuminate\Support\Facades\File;
use Illuminate\Support\Facades\Config;
use Illuminate\Database\Eloquent\Model;
use App\Api\Traits\HandlesEventLogging;

class MessageTemplate extends BaseModel
{
    
    protected $table = 'message_templates';
        
    protected $fillable = ['id', 'slug', 'subject', 'description', 'template'];

    public function variables() {
        return $this->belongsToMany(Variable::class);
    }

    //all message templates that need to be created should be added here
    public static function defaultMessageTemplates() {
        $view_path = Config::get('view.paths');
        $view_path = $view_path[0]. "/email_template/";
//        $mainTemplate = File::get($view_path . 'activation_email_template.blade.php');
        $activation_email = File::get($view_path . 'activation_email_template.blade.php');
        $password_reset_email = File::get($view_path . 'password_reset_email_template.blade.php');
        $feedback_response_email = File::get($view_path . 'feedback_response_email_template.blade.php');
        $survey_report_email = File::get($view_path . 'survey_report_email_template.blade.php');
        $feedback_email = File::get($view_path . 'feedback_email_template.blade.php');
        $goodsUpdateEmail = File::get($view_path . 'goods_update_email_template.blade.php');
        $userRegistrationEmail = File::get($view_path . 'user_registration_notification_email_template.blade.php');

        return [
            [
                'slug'=>'activation_email',
                'description'=>'email sent to new user',
                'subject' => 'Welcome to Price Checker',
                'template' => $activation_email,
                'variables' => ['first_name']
            ],
            [
                'slug'=>'password_reset_email',
                'description'=>'email sent to user for password reset',
                'subject' => 'Password reset request',
                'template' => $password_reset_email,
                'variables' => []
            ],
            [
                'slug'=>'feedback_response_email',
                'description'=>'email sent to user when their feedback is responded to',
                'subject' => 'Feedback response',
                'template' => $feedback_response_email,
                'variables' => ['first_name', 'feedback_content', 'response_content']
            ],
            [
                'slug'=>'survey_report_email',
                'description'=>'email sent to internal users after survey report was created or reviewed',
                'subject' => 'Survey Report',
                'template' => $survey_report_email,
                'variables' => ['first_name', 'message']
            ],
            [
                'slug'=>'feedback_email',
                'description'=>'email sent to internal users on receipt of feedback from users',
                'subject' => 'Feedback received',
                'template' => $feedback_email,
                'variables' => ['first_name', 'message']
            ],
            [
                'slug'=>'goods_update_notification',
                'description'=>'email sent to vendors when they have not updated their goods for a while',
                'subject' => 'Goods detail update request',
                'template' => $goodsUpdateEmail,
                'variables' => ['goods', 'vendor_name']
            ],
            [
                'slug'=>'user_registration_email',
                'description'=>'email sent to administrator when a new user registers',
                'subject' => 'User registration notification',
                'template' => $userRegistrationEmail,
                'variables' => ['full_name', 'username', 'institution_name', 'parastatal_name']
            ]
        ];
    }
    /**
    * Automatically snake case and UpperCase the slug.
    *
    * @param  string  $value
    * @return void
    */
    /*  public function setSlugAttribute($value)
    {
        $this->attributes['slug'] = strtoupper(snake_case($value));
    } */
}
