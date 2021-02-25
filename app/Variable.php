<?php

namespace App;

class Variable extends BaseModel
{
    protected $table = 'variables';
        
    protected $fillable = ['id', 'name', 'description'];

    public $timestamps = false;

    public function message_templates()
    {
        return $this->belongsToMany('App\MessageTemplate');
    }

     //all variables that need to be created should be added here
    public static function defaultVariables()
    {
        return [
            ['name'=>'first_name', 'description'=>'A person\'s first name'],
            ['name'=>'last_name', 'description'=>'A person\'s last name'],
            ['name'=>'phone_number', 'description'=>'A person\'s phone number'],
            ['name'=>'email_address', 'description'=>'A person\'s email address'],
            ['name'=>'office_address', 'description'=> 'a person\'s office address'],
            ['name'=>'feedback_content', 'description'=> 'the content of a feedback'],
            ['name'=>'response_content', 'description'=> 'the content of a response'],
        ];
    }
}
