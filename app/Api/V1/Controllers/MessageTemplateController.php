<?php

namespace App\Api\Controllers;

use App\Http\Controllers\Controller;
use App\MessageTemplate;
use Illuminate\Http\Request;
use Dingo\Api\Http\Response;
use Dingo\Api\Exception\StoreResourceFailedException;
use Dingo\Api\Exception\DeleteResourceFailedException;
use Symfony\Component\HttpKernel\Exception\NotFoundHttpException;

class MessageTemplateController extends Controller
{
    public function index()
    {
        if ($messageTemplate = MessageTemplate::query()->get()) {
            return $messageTemplate;
        }
        throw new NotFoundHttpException( 'No message templates found' );
    }

    public function store(Request $request)
    {
        $this->validate($request, [
            'slug' => 'required|string|unique:message_templates,slug',
            'description' => 'required|string',
            'subject' => 'required|string',
            'template' => 'required|string'
        ]);

        if (MessageTemplate::query()->create($request->only('slug', 'description', 'subject', 'template'))) {
            return new Response(['status'=>  'message template created'], 201);
        }
        throw new StoreResourceFailedException('message template couldn\'t be stored');
    }


    public function show($id)
    {
        if ($messageTemplate = MessageTemplate::query()->find($id)) {
            return $messageTemplate;
        }
        throw new NotFoundHttpException('message template not found');
    }


    public function update(Request $request, $id)
    {
        $this->validate($request, [
            'description' => 'required|string',
            'subject' => 'required|string',
            'template' => 'required'
        ]);

        $messageTemplate = MessageTemplate::query()->findOrFail($id);

        $messageTemplate->description = $request->description;
        $messageTemplate->subject = $request->subject;
        $messageTemplate->template = $request->template;

        if ($messageTemplate->save()) {
            return $this->withJson(['status'=>  'Message template updated successfully'], 201);
        }
        throw new StoreResourceFailedException('message template update failed');
    }

    public function destroy($id)
    {
        if (! $messageTemplate = MessageTemplate::query()->find($id)) {
            throw new DeleteResourceFailedException('message template not found');
        }
        //delete message template
        if ($messageTemplate->delete()) {
            return $this->withJson(['status'=>  'message template deleted' ], 201);
        }
        
        //message template not deleted
        throw new DeleteResourceFailedException('message template delete request failed');
    }
}
