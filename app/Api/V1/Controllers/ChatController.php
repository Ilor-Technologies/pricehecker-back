<?php

namespace App\Api\Controllers;

use App\Api\Requests\ChatGroupCreateRequest;
use App\ChatGroup;
use App\ChatGroupParticipant;
use App\ChatMessage;
use App\Http\Controllers\Controller;
use App\Role;
use App\User;
use Dingo\Api\Http\Response;
use Illuminate\Http\Request;
use Illuminate\Support\Arr;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Str;
use LRedis;

class ChatController extends Controller
{

    public function sendBatchMessage(Request $request) {
        try {
            $messages = (array) json_decode($request->messages, true);
        } catch(\Exception $e) {
            $messages = [];
        }
        foreach ($messages as $mes) {
            $message = ChatMessage::query()->create([
                'chat_group_id' => $mes['group_id'],
                'content' => $mes['message'],
                'picture_id' => isset($mes['upload']) ? $mes['upload'] : null,
                'created_by' => auth()->id(),
                'parent_id' => isset($mes['replying_to']) ? $mes['replying_to'] : null,
                'signature' => isset($mes['signature']) ? $mes['signature'] : Str::orderedUuid()
            ]);
            $message->load('replyingTo.file', 'file');

            $obj = json_encode([
                'type' => 'chat',
                'content' => $message
            ]);

            $redis = LRedis::connection();
            $redis->publish('message', $obj);
        }


        return $this->withJson(['data' => $message, 'message' => 'Sent']);
    }
    public function sendMessage(Request $request)
    {
        $message = ChatMessage::query()->create([
            'chat_group_id' => $request->group_id,
            'content' => $request->message,
            'picture_id' => $request->upload ? $request->upload : null,
            'created_by' => auth()->id(),
            'parent_id' => $request->replying_to ? $request->replying_to : null,
            'signature' => $request->signature ? $request->signature : Str::orderedUuid()
        ]);
        $message->load('replyingTo.file', 'file');

        $obj = json_encode([
            'type' => 'chat',
            'content' => $message
        ]);

        $redis = LRedis::connection();
        $redis->publish('message', $obj);

        return $this->withJson(['data' => $message, 'message' => 'Sent']);
    }

    public function fetchParticipants(Request $request)
    {
        $search = $request->input('search');

        $userIds = DB::table('vendors')->where('business_name', 'like', '%' . $search . '%')
            ->orWhere('rc_number', 'like', '%' . $search . '%')
            ->orWhere('tax_identification_number', 'like', '%' . $search . '%')
            ->orWhere('business_description', 'like', '%' . $search . '%')->pluck('user_id')->toArray();

        $users = User::with('internalUser.institution', 'vendor')->where('id', '!=', auth()->id())->where(function ($query) use ($userIds, $search) {
            $query->where('is_vendor', true)->where(function ($q) use ($userIds, $search) {
                $q->whereIn('id', $userIds)->orWhere(function ($innerQuery) use ($search) {
                    $innerQuery->where('first_name', 'like', '%' . $search . '%')
                        ->orWhere('last_name', 'like', '%' . $search . '%')
                        ->orWhere('middle_name', 'like', '%' . $search . '%')
                        ->orWhere('email', 'like', '%' . $search . '%')
                        ->orWhere('username', 'like', '%' . $search . '%')
                        ->orWhere('phone', 'like', '%' . $search . '%');
                });
            });
        })->orWhere(function ($query) use ($search) {
            $query->where('is_vendor', false)
                ->where(function ($q) use ($search) {
                    $q->where('first_name', 'like', '%' . $search . '%')
                        ->orWhere('last_name', 'like', '%' . $search . '%')
                        ->orWhere('middle_name', 'like', '%' . $search . '%')
                        ->orWhere('email', 'like', '%' . $search . '%')
                        ->orWhere('username', 'like', '%' . $search . '%')
                        ->orWhere('phone', 'like', '%' . $search . '%');
                });
        });

        return $users->get();
    }

    public function getGroups(Request $request)
    {
//        return $this->withMessage($this->authUser()->chatGroups()->with('participants.internalUser', 'participants.vendor')->toSql(), 400);
        $data = ['users' => []];
        $user = $this->authUser();
        $data['groups'] = $user->chatGroups()->with('participants.internalUser', 'participants.vendor', 'creator')->get();
        if (!$user->hasRole(Role::VENDOR)) {
            $data['users'] = $this->fetchParticipants($request);
        }

        $data['claim'] = [
            'i' => auth()->id(),
            'id' => auth()->id(),
            'n' => "{$user->full_name}",
            'r' => $user->role,
            'd' => $user->picture
        ];
        return $this->withJson($data);
    }

    public function fetchMessages(Request $request, $group_id)
    {
        $user = $this->authUser();
        $group = $user->chatGroups()->find($group_id);
        if (!$group) {
            return $this->withMessage('Not found', 404);
        }

        $messages = $group->messages()->with('replyingTo.file', 'file')->where(function ($query) {
            $query->whereNull('deleted_at')->orWhereNotnull('deleted_at');
        })->latest()->paginate();
        $messages->appends($request->all());
        return $messages;
    }

    /**
     * create a comment
     *
     * @param ChatGroupCreateRequest $request
     * @return Comment|\Illuminate\Http\JsonResponse
     */
    public function store(ChatGroupCreateRequest $request)
    {
        $authUser = $this->authUser();
        $users = (array)$request->participants;
        $users[] = $authUser->id;
//        remove duplicated participants from
        $users = array_unique($users);

        $existingUserArray = Arr::sort($users);
        $existingUserArrayString = implode(',', $existingUserArray);
        $hasExistingGroup = ChatGroup::query()->where('user_list', $existingUserArrayString)->first();

        if ($hasExistingGroup) {
            return $this->withMessage('Conversation already exists', 400);
        }

        $data = $request->only('description');
        $data['name'] = $request->group_name;
        $data['is_group'] = count($users) > 1;
        $data['created_by'] = $authUser->id;
        $data['user_list'] = $existingUserArrayString;
        $data['signature'] = $request->signature ? $request->signature : Str::orderedUuid();

        $group = ChatGroup::query()->create($data);

        foreach ($users as $participant) {
            $participantRecord = ChatGroupParticipant::query()->firstOrCreate(['chat_group_id' => $group->id, 'user_id' => $participant]);
//            if ($participantRecord->wasRecentlyCreated) {
////            todo: notify participant for the created group
//            }
        }

        $group->load('participants.internalUser', 'participants.vendor', 'creator');

        $obj = json_encode([
            'type' => 'group',
            'content' => $group
        ]);
        $redis = LRedis::connection();
        $redis->publish('message', $obj);

//        $event = (new ChatGroupEvent($group));
//        broadcast($event);

        return $this->withJson(['message' => 'Group created successfully', 'data' => $group]);
    }

    /**
     * delete a comment by id
     *
     * @param Request $request
     * @param string $id
     * @return Response
     */
    public function destroy(Request $request, $id)
    {
        /* $this->validate($request, [
            'model_id' => 'required',
            'model' => 'string'
        ]); */
        /*  if (! $surveyReport = SurveyReport::find($request->id)) {
             throw new StoreResourceFailedException('survey report not found');
         } */
//        if (!$comment = Comment::find($id)) {
//            throw new DeleteResourceFailedException('comment not found');
//        }
//        if ($comment->delete()) {
//            return new Response(['status' => 'comment deleted'], 201);
//        }
//        throw new DeleteResourceFailedException('comment couldn\'t be deleted');
    }

    public function authenticateUser(Request $request) {
        $data = ['users' => []];
        $data['groups'] = [];
        $user = $this->authUser();
        $allGroups = $user->chatGroups()->with('participants.internalUser', 'participants.vendor', 'creator')->get();
        if (!$user->hasRole(Role::VENDOR)) {
            $data['users'] = $this->fetchParticipants($request);
        }

        $data['messages'] = [];

        $data['claim'] = [
            'i' => auth()->id(),
            'id' => auth()->id(),
            'n' => "{$user->full_name}",
            'r' => $user->role,
            'd' => $user->picture
        ];

        foreach ($allGroups as $group) {
            $messages = $group->messages()->with('replyingTo.file', 'file')->where(function ($query) {
                $query->whereNull('deleted_at')->orWhereNotnull('deleted_at');
            })->latest()->paginate(300);
            $messages->appends($request->all());
            $data['groups'][] = ['group' => $group, 'messages' => $messages];
        }
        return $this->withJson($data);
    }
}
