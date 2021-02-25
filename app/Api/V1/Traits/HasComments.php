<?php

namespace App\Api\Traits;

use App\Comment;

trait HasComments
{
    /**
     * comment relationship
     */
    public function comments()
    {
        return $this->morphMany(Comment::class, 'commentable')->with('commentor');
    }
    /**
     * function to delete comments related to the particular model
     */
    public function deleteComments()
    {
        if ($comments = $this->comments()->get()) {
            $comments->delete();
        }

        return;
    }
    /**
     * function to save comment related to the particular model
     */
    public function saveComment($request)
    {
        if ($body = $request->get('comment')) {
            $comment = new Comment();
            $comment->body = $body;
            
            $this->comments()->save($comment);
        }

        return;
    }
}
