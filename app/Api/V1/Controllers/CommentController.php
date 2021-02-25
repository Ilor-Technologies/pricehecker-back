<?php

namespace App\Api\Controllers;

use App\Comment;
use App\Http\Controllers\Controller;
use App\SurveyReport;
use Illuminate\Http\Request;
use Dingo\Api\Http\Response;
use Dingo\Api\Exception\StoreResourceFailedException;
use Dingo\Api\Exception\DeleteResourceFailedException;

class CommentController extends Controller
{
    /**
     * create a comment
     *
     * @param Request $request
     * @return Comment
     * @throws \Illuminate\Validation\ValidationException
     */
    public function store(Request $request)
    {
        $rules = [
            'comment' => 'required',
            'model_id' => 'required',
            //'model' => 'string'
        ];
        $this->validate($request, $rules);

        if (! $surveyReport = SurveyReport::find($request->model_id)) {
            throw new StoreResourceFailedException('survey report not found');
        }
        $comment = new Comment();
        $comment->body = $request->comment;
        $comment->created_by = auth()->id();
        if ($surveyReport->comments()->save($comment)) {
            return $comment;
        }
        
        throw new StoreResourceFailedException('couldn\'t save comment');
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
        if (! $comment = Comment::find($id)) {
            throw new DeleteResourceFailedException('comment not found');
        }
        if ($comment->delete()) {
            return new Response(['status'=>  'comment deleted'], 201);
        }
        throw new DeleteResourceFailedException('comment couldn\'t be deleted');
    }
}
