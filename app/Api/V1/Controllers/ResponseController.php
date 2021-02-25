<?php

namespace App\Api\Controllers;

use App\Events\FeedbackRespondedTo;
use App\Http\Controllers\Controller;
use App\Response;
use Illuminate\Http\Request;
use Dingo\Api\Http\Response as DingoResponse;
use Dingo\Api\Exception\StoreResourceFailedException;
use Dingo\Api\Exception\DeleteResourceFailedException;
use Symfony\Component\HttpKernel\Exception\NotFoundHttpException;

class ResponseController extends Controller
{
    /**
     * Display a listing of the resource
     *
     * @param Request $request
     * @return Response
     */
    public function index(Request $request) {
        $search = null;
        if ($request->input('search') != null) {
            $search = $request->input('search');
        }
        $response = Response::query();
        if (!is_null($search)) {
            $response = $response->with('feedback.creator')->with('responder')->where(function ($query) use ($search) {
                $query->where('content', 'like', '%' . $search . '%');
            });
        }
        
        //date range
        $response->withDates();
        
        return $response->get();
    }

    /**
     * create new Response
     *
     * @param Request $request
     * @return Response
     * @throws \Illuminate\Validation\ValidationException
     */
    public function store(Request $request) {
        $this->validate($request, [
            'feedback_id' => 'required|exists:feedbacks,id',
            'content' => 'required|string'
        ]);
        
        $data = $request->only('feedback_id', 'content');

        $data['created_by'] = auth()->id();
        
        $response = new Response($data);
        if ($response->save()) {
            //if request has feedback_status, save it
            if ($request->feedback_status === 'resolved' || $request->feedback_status === 'closed') {
                $feedback = $response->feedback()->first();
                $feedback->status = $request->feedback_status;
                $feedback->save();
            }
            
            //send email to feedback owner
            event(new FeedbackRespondedTo($response->feedback()->first(), $response));
            
            return $response;
        }
        
        throw new StoreResourceFailedException('Response couldn\'t be stored');
    }
    
    /**
     * Display Response by id
     *
     * @param string $id
     * @return Response
     */
    public function show($id) {
        if ($response = Response::with('feedback.creator')->with('responder')->find($id)) {
            return $response;
        }
        
        return $this->notFound('Feedback response not found.');
    }

    /**
     * Update response by id
     *
     * @param Request $request
     * @param integer $id
     * @return Response
     * @throws \Illuminate\Validation\ValidationException
     */
    public function update(Request $request, $id) {
        if (!$response = Response::query()->find($id)) {
            throw new NotFoundHttpException('Response not found');
        }
        $rules = [
            'feedback_id' => 'required',
            'content' => 'required|string'
        ];
        
        //validation
        $this->validate($request, $rules);
        //assign
        $response->feedback_id = $request->feedback_id;
        $response->content = $request->get('content');
        if ($response->save()) {
            return $response;
        }
        
        throw new StoreResourceFailedException('response update failed');
    }

    /**
     * Delete a Response
     *
     * @param string $id
     * @return json
     * @throws \Exception
     */
    public function destroy($id) {
        if (!$response = Response::query()->find($id)) {
            throw new NotFoundHttpException('Response not found');
        }
        //delete Response
        if ($response->delete()) {
            return $this->withMessage('Deleted successfully.');
        }
        //Response not deleted
        throw new DeleteResourceFailedException('Response delete request failed');
    }
    
}
