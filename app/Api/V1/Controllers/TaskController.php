<?php

namespace App\Api\Controllers;

use App\Approval;
use App\Http\Controllers\Controller;
use App\Notification;
use App\Task;
use Dingo\Api\Exception\DeleteResourceFailedException;
use Dingo\Api\Exception\StoreResourceFailedException;
use Illuminate\Http\Request;
use Symfony\Component\HttpKernel\Exception\NotFoundHttpException;


class TaskController extends Controller
{
    /**
     * Display a listing of the resource (get all task approvals that belong to me, or that I need to approve)
     *
     * @param Request $request
     * @return Task
     */
    public function index(Request $request)
    {
        $search = null;
        if ($request->input('search') != null) {
            $search = $request->input('search');
        }
        $task = Task::query();
        if (!is_null($search)) {
            $task = $task->where(function ($query) use ($search) {
                $query->where('description', 'like', '%' . $search . '%');
            });
        }

        return $task->owned()->with('approval.approvalDetails')
            ->with('module')
            ->with('taskType')
            ->withDates()
            ->get();
    }

    /**
     * Display task by id (get-task-approval-status)
     *
     * @param string $id
     * @return Task
     */
    public function show($id)
    {
        if ($task = Task::query()->owned()->with('approval.approvalDetails')
            ->with('module')
            ->with('taskType')
            ->find($id)) {
            return $task;
        }

        return $this->withMessage('Task not found', 404);
    }


    /**
     * create new task (request-for-approval)
     *
     * @param Request $request
     * @param Notification $notification
     * @return Task
     * @throws \Illuminate\Validation\ValidationException
     */
    public function store(Request $request, Notification $notification)
    {
        $this->validate($request->all(), [
            'description' => 'required|string',
            'task_type_id' => 'required',
            'approval_id' => 'required',
            'module_id' => 'required'
        ]);

        //clone the approval and approval details
        //there might be a more elegant way of doing this tru a many - many relationship
        $defaultApproval = Approval::with('approvalDetails')->findOrFail($request->approval_id);
        $approval = $defaultApproval->replicate();
        $approval->original = 0;
        $approval->save();

        foreach ($defaultApproval->approvalDetails as $defaultApprovalDetail) {
            $approvalDetail = $defaultApprovalDetail->replicate();
            $approvalDetail->original = 0;
            if ($approvalDetail->push()) {
                $approval->approvalDetails()->save($approvalDetail);
            }
        }

        $data = $request->only('description', 'task_type_id', 'module_id');
        $data['approval_id'] = $approval->id;

        $task = new Task($data);
        if ($approval->tasks()->save($task)) {
            //send notification to 1st approving officer
            $allApprovalDetails = $approval->approvalDetails()->with('approvingOfficer')->get();
            $sortOrders = $allApprovalDetails->pluck('approval_order')->toArray();
            $data = [
                'title' => 'An action requires your approval.',
                'body' => 'Goto "Approval Requests" for details.',
            ];
            $allApprovalDetails->each(function ($approvalDetail) use ($notification, $data, $sortOrders) {
                if ($approvalDetail->approval_order == min($sortOrders)) {
                    //send notification to approvingOfficer
                    $notification->notifyUsers($data, [$approvalDetail->approvingOfficer->id]);
                }
            });

            return $task;
        }

        throw new StoreResourceFailedException('approval request couldn\'t be created');
    }

    /**
     * Delete an approval request (should be just for admin)
     *
     * @param string $id
     * @return json
     * @throws \Exception
     */
    public function destroy($id)
    {
        if (!$task = Task::query()->find($id)) {
            throw new NotFoundHttpException('approval request not found');
        }
        //delete approval request
        if ($task->delete()) {
            return $this->withJson(['status' => 'approval request deleted'], 201);
        }
        //approval request not deleted
        throw new DeleteResourceFailedException('approval request delete request failed');
    }


}
