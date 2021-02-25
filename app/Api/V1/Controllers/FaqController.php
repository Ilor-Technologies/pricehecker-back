<?php

namespace App\Api\Controllers;

use App\Faq;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Dingo\Api\Http\Response;
use Dingo\Api\Exception\StoreResourceFailedException;
use Dingo\Api\Exception\DeleteResourceFailedException;
use Symfony\Component\HttpKernel\Exception\NotFoundHttpException;

class FaqController extends Controller
{
    public function index(Request $request)
    {
        $search = null;
        if ($request->input('search') != null) {
            $search = $request->input('search');
        }
        $faqs = Faq::query();
        if (!is_null($search)) {
            $faqs = $faqs->where(function ($query) use ($search) {
                $query->where('question', 'like', '%' . $search . '%')
                    ->orWhere('answer', 'like', '%' . $search . '%');
            });
        }

        //date range            
        return $faqs->withDates()->get();
    }

    public function publicIndex()
    {
        return Faq::query()->get();
    }

    /**
     * Persist a newly created faq.
     *
     * @param  \Illuminate\Http\Request $request
     * @return \Dingo\Api\Http\Response
     * @throws \Illuminate\Validation\ValidationException
     */
    public function store(Request $request, Faq $faq)
    {
        $this->validate($request, [
            'question' => 'required',
            'answer' => 'required'
        ]);
 
        //validation passed
        if ($faq->create($request->only('question', 'answer'))) {
            return new Response(['status' => 'Faq created'], 201);
        }
        throw new StoreResourceFailedException('Faq couldn\'t be stored');
    }
    /**
     * Display the specified faq.
     *
     * @param \App\Faq $faq
     * @param  int $id
     *
     * @return  Dingo\Api\Http\Response
     */
    public function show(Faq $faq, $id)
    {
        if ($faq = $faq->find($id)) {
            return $faq;
        }
        throw new NotFoundHttpException('faq not found');
    }

    /**
     * Update a faq.
     *
     * @param \Illuminate\Http\Request   $request
     * @param \App\Faq   $faq
     * @param int $id
     *
     * @return json
     */
    public function update(Request $request, Faq $faq, $id)
    {
        $this->validate($request, [
            'question' => 'required',
            'answer' => 'required'
        ]);

        if (!$faq = $faq->find($id)) {
            return $this->notFound('No faq found');
        }

        if ($faq->update($request->only('question', 'answer'))) {
            return $this->withJson(['status' => 'faq updated successfully'], 201);
        }
        throw new StoreResourceFailedException('faq update failed');
    }

    /**
     * delete a faq
     *
     * @param \App\Faq $faq
     * @param int $id
     *
     * @return  Dingo\Api\Http\Response
     */
    public function destroy(Faq $faq, $id)
    {
        if (!$faq = $faq->find($id)) {
            throw new DeleteResourceFailedException('faq not found');
        }
        //delete faq
        if ($faq->delete()) {
            return new Response(['status' => 'faq deleted'], 201);
        }
        //faq not deleted
        throw new DeleteResourceFailedException('faq delete request failed');
    }
}
