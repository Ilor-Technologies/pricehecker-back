<?php

namespace App\Api\Controllers;

use App\Feedback;
use App\Http\Controllers\Controller;
use Exception;
use Validator;
use Carbon\Carbon;
use Tymon\JWTAuth\JWTAuth;
use Illuminate\Http\Request;
use Dingo\Api\Exception\StoreResourceFailedException;
use Dingo\Api\Exception\DeleteResourceFailedException;
use Dingo\Api\Exception\UpdateResourceFailedException;
use Symfony\Component\HttpKernel\Exception\NotFoundHttpException;

class FeedbackController extends Controller
{
    /**
     * get all feedbacks
     *
     * @return Feedback
     */
    public function index(Request $request)
    {
        $search = null;
        if ($request->input('search') != null) {
            $search = $request->input('search');
        }
        $feedback = Feedback::query();
        if (!is_null($search)) {
            $feedback = $feedback->with('responses.responder')->with('creator')->where(function ($query) use ($search) {
                $query->where('content', 'like', '%' . $search . '%')
                    ->orWhere('email', 'like', '%' . $search . '%')
                    ->orWhere('first_name', 'like', '%' . $search . '%')
                    ->orWhere('last_name', 'like', '%' . $search . '%')
                    ->orWhere('phone', 'like', '%' . $search . '%');
            });
        }

        return $feedback->latest()->withDates()->paginate();
    }

    /**
     * get a particular feedback by id
     *
     * @param string $id
     * @return Feedback
     */
    public function show($id)
    {
        if ($feedback = Feedback::with('responses.responder')->with('creator')->find($id)) {
            return $feedback;
        }

        return $this->notFound('Feedback not found.');
        // return $this->response->array($item->toArray());
    }

    /**
     * create new feedback
     *
     * @param JWTAuth $token
     * @param Request $request
     * @return Feedback
     */
    public function store(Request $request)
    {
        $this->validate($request, [
            'content' => 'required|string',
            'first_name' => 'required|string',
            'last_name' => 'required|string',
            'email' => 'required|email',
            'phone' => 'numeric|nullable'
        ]);

        $data = $request->only('content', 'email', 'phone', 'first_name', 'last_name');

        $feedback = new Feedback($data);

        if ($feedback->save()) {
            return $feedback;
        }

        throw new StoreResourceFailedException('Unable to submit feedback at the moment, try again.');
    }

    /**
     * delete feedback by id
     *
     * @param integer $id
     * @return Response
     * @throws Exception
     */
    public function destroy($id)
    {
        if (!$feedback = Feedback::find($id)) {
            throw new NotFoundHttpException('Feedback not found');
        }
        //delete feedback
        if ($feedback->delete()) {
            return response()->json(['status' => 'Feedback deleted'], 201);
        }
        //feedback not deleted
        throw new DeleteResourceFailedException('feedback delete request failed');
    }

    /**
     * get feedback status: 'open', 'closed' etc
     *
     * @return json
     */
    public function getFeedbackStatus()
    {
        return collect(config('constants.feedback_status'));
    }
}
