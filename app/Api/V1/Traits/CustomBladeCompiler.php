<?php
/**
 * Created by PhpStorm.
 * User: Gemdajs
 * Date: 12-Dec-18
 * Time: 01:54 PM
 */

namespace App\Api\Traits;;


use App\MessageTemplate;
use Illuminate\Support\Facades\Blade;
use Symfony\Component\Debug\Exception\FatalThrowableError;

trait CustomBladeCompiler {
    public $mailTemplate;
    public $mailData;
    public $mailSubject;
    
    public function getView($slug, $subject = '', $body = '') {
        $this->mailData['year'] = date('Y');
        $default_email = env('APP_DEFAULT_EMAIL', 'info@ilortech.com');
        $default_name = 'Pricechecker Platform';
        $reply_to_address = env('APP_DEFAULT_EMAIL', 'info@ilortech.com');

        $template = MessageTemplate::query()->where('slug', $slug)->first();

        if ($template) {
            $this->mailSubject = $template->subject;
            $this->mailTemplate = $template->template;
        } else {
            $this->mailSubject = $subject;
            $this->mailTemplate = $body;
        }


    
        $mail_body = $this->compileTemplate($this->mailTemplate, $this->mailData);
    
        $view = $this->from($default_email, $default_name)
                     ->subject($this->mailSubject)
                     ->view('mails.default', compact('mail_body'));
        return $view;
    }
    
    public function compileTemplate($blade, array $data) {
        $php = Blade::compileString($blade);
        return $this->customRender($php, $data);
    }

    function customRender($__php, $__data)
    {
        $obLevel = ob_get_level();
        ob_start();
        extract($__data, EXTR_SKIP);
        try {
            eval('?' . '>' . $__php);
        } catch (\Exception $e) {
            while (ob_get_level() > $obLevel) ob_end_clean();
            throw $e;
        } catch (\Throwable $e) {
            while (ob_get_level() > $obLevel) ob_end_clean();
            throw new FatalThrowableError($e);
        }
        return ob_get_clean();
    }
}
