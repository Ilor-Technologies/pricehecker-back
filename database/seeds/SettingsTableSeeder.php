<?php

use App\Setting;
use Illuminate\Database\Seeder;
use Illuminate\Support\Arr;
use Illuminate\Support\Facades\Config;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\File;
use App\Variable;
use App\MessageTemplate;

class SettingsTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        //delete old table and add new default settings
        DB::table('settings')->truncate();
        DB::table('message_template_variable')->truncate();
        DB::table('variables')->truncate();
        DB::table('message_templates')->truncate();

        foreach ([
                     ['key' => 'default_email', 'value' => 'App@allthenthic.com'],
                     ['key' => 'reply_to_address', 'value' => 'App@allthenthic.com'],
                     ['key' => 'default_name', 'value' => 'Price Checker Team'],
                     ['key' => 'default_phone', 'value' => '08012345678'],
                     ['key' => 'auto_delete_stale_event', 'value' => 'false'],
                     ['key' => 'auto_delete_stale_event_duration', 'value' => '30']
                 ] as $seting) {
            Setting::query()->firstOrCreate($seting);
        }

        //add variables
        $variables = Variable::defaultVariables();
        foreach ($variables as $v) {
            Variable::query()->firstOrCreate($v);
        }
        $this->command->info('Default variables added.');

        //add message templates
        $messageTemplates = MessageTemplate::defaultMessageTemplates();
        $view_path = Config::get('view.paths');
        $view_path = $view_path[0]. "/email_template/";

        $mainTemplate = File::get($view_path . 'mail_main.blade.php');
        foreach ($messageTemplates as $m) {
            $variables = Arr::pull($m, 'variables');
            $t = $m['template'];
            $m['template'] = str_replace('{!! $body !!}', $t, $mainTemplate);
            $messageTemplate =  MessageTemplate::query()->firstOrCreate($m);
            if (count($variables)) {
                foreach ($variables as $vv) {
                    Variable::query()->firstOrCreate(['name' => $vv], ['description' => '']);
                }
                $v = Variable::query()->whereIn('name', $variables)->get();
                $messageTemplate->variables()->attach($v);
            }
        }
        $this->command->info('Default message templates added.');
    }
}
