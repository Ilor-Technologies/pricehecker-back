<?php

namespace App\Api\Controllers;

use App\Events\GoodsSearchEvent;
use App\Events\SurveyReportEvent;
use App\Good;
use App\Http\Controllers\Controller;
use App\InternalUser;
use App\SurveyReport;
use App\User;
use Dingo\Api\Exception\DeleteResourceFailedException;
use Dingo\Api\Exception\UpdateResourceFailedException;
use Exception;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Validator;
use Symfony\Component\HttpKernel\Exception\NotFoundHttpException;
use Tymon\JWTAuth\JWTAuth;

class SurveyReportController extends Controller
{
    public function index(JWTAuth $auth, Request $request)
    {
        $user = $this->authUser();
        if (!$user || $user->is_vendor) {
            return $this->withMessage("This page is for admins.", 403);
        }

        $det = UserController::getAdminDetails($user);
        if (!$det) {
            return $this->withMessage("User authentication failed.", 403);
        }

        $search = null;
        if ($request->input('search') != null) {
            $search = $request->input('search');
        }
        $surveyReports = SurveyReport::query();
        if (!is_null($search)) {
            $surveyReports = $surveyReports->where(function ($query) use ($search) {
                $query->where('description', 'like', '%' . $search . '%')
                    ->orWhere('title', 'like', '%' . $search . '%');
            });
        }

        //date range
        $surveyReports->withDates();

        if ($user->isSuperAdmin()) {
            return $surveyReports->latest()->paginate();
        }

        if ($user->can('review_survey_report') || $user->can('approve_survey_report') || $user->can('delete_survey_report')) {
            return $surveyReports->where('institution_id', $det->institution_id)
                ->latest()->paginate();
        } elseif ($user->can('create_survey_report')) {
            //return SurveyReport::where('created_by', $det->institution_id)
            return $surveyReports->where('created_by', $det->id)
                ->latest()->paginate();
        } else {
            return $this->withMessage("Not enough permission", 403);
        }
    }

    public function indexNoPagination(JWTAuth $auth, Request $request)
    {
        $user = $this->authUser();
        if (!$user || $user->is_vendor) {
            return $this->withMessage("This page is for admins.", 403);
        }

        $det = UserController::getAdminDetails($user);
        if (!$det) {
            return $this->withMessage("User authentication failed.", 403);
        }

        $search = null;
        if ($request->input('search') != null) {
            $search = $request->input('search');
        }
        $surveyReports = SurveyReport::query();
        if (!is_null($search)) {
            $surveyReports = $surveyReports->where(function ($query) use ($search) {
                $query->where('description', 'like', '%' . $search . '%')
                    ->orWhere('title', 'like', '%' . $search . '%');
            });
        }

        //date range
        $surveyReports->withDates();

        if ($user->isSuperAdmin()) {
            return $surveyReports->latest()->get();
        }

        if ($user->can('review_survey_report') || $user->can('approve_survey_report') || $user->can('delete_survey_report')) {
            return $surveyReports->where('institution_id', $det->institution_id)
                ->latest()->get();
        } elseif ($user->can('create_survey_report')) {
            //return SurveyReport::where('created_by', $det->institution_id)
            return $surveyReports->where('created_by', $det->id)
                ->latest()->get();
        } else {
            return $this->withMessage("Not enough permission", 403);
        }
    }

    public function show(JWTAuth $auth, $id)
    {
        $user = $this->authUser();
        if (!$user || $user->is_vendor) {
            return $this->withMessage("This page is for admins.", 403);
        }

        $det = InternalUser::query()->where('user_id', $user->id)->first();
        $isSuperAdmin = $user->isSuperAdmin();
        if (!$det && !$isSuperAdmin) {
            return $this->withMessage("User authentication failed.", 403);
        }

        if ($user->can('create_survey_report') || $user->can('review_survey_report') ||
            $user->can('approve_survey_report') || $user->can('update_survey_report') ||
            $user->can('delete_survey_report')) {
            if ($user->can('create_survey_report') && (!$user->can('review_survey_report') ||
                    !$user->can('approve_survey_report')) && $user->can('update_survey_report') &&
                $user->can('delete_survey_report')) {
                $report = SurveyReport::query()->with('creator', 'reviewer', 'approver', 'comments')->where('id', $id)->where('created_by', $user->id)->first();
            } else {
                $report = SurveyReport::query()->with('creator', 'reviewer', 'approver', 'comments')->where('id', $id)->first();
            }
            return $report ? $report : $this->notFound("Survey report not found.");
        }

        return $this->withMessage("Not enough permission to access the survey report.", 403);
    }

    public function store(JWTAuth $token, Request $request)
    {
        $user = $this->authUser();

        if (!$user) {
            return $this->withMessage("User authentication failed.", 403);
        }

        $validator = Validator::make($request->all(), [
            'description' => 'required|string',
            'title' => 'required|string',
            'structure' => 'required|json'
        ]);

        if ($validator->fails()) {
            return $this->validationError($validator->errors());
        }

        $det = InternalUser::where('user_id', $user->id)->first();
        if (!$det) {
            return $this->withMessage("User authentication failed.", 403);
        }

        $data = $request->only('description', 'title');
        $data['structure'] = $this->processAddOthersToStructure($request->structure);
        $data['created_by'] = $user->id;
        $data['institution_id'] = $det->institution_id;

        $survey = new SurveyReport($data);

        if ($survey->save()) {
            event(new SurveyReportEvent($user, $survey, SurveyReportEvent::CREATED));
            return $this->withJson(['message' => 'Survey report created successfully.']);
        }
        return $this->withMessage("Unable to save survey report at the moment, try again.", 500);
    }

    public function update(JWTAuth $token, Request $request, $id)
    {
        $validator = Validator::make($request->all(), [
            'description' => 'required|string',
            'title' => 'required|string',
            'structure' => 'required|json'
        ]);

        if ($validator->fails()) {
            return response()->json([
                'error' => [
                    'errors' => $validator->errors(),
                    'message' => '422 Unprocessable Entity'
                ]
            ], 422);
        }

        $user = $this->authUser();

        if (!$user) {
            return $this->withMessage("User authentication inavlid.", 403);
        }

        if (!$user->can('update_survey_report')) {
            return $this->withMessage("You do not permission to update survey report.", 403);
        }

        $det = UserController::getAdminDetails($user);
        $isSuperUser = $user->isSuperAdmin();

        $survey = SurveyReport::where('id', $id)->first();

        if (!$survey) {
            return $this->notFound("Survey report not found.");
        }

        if ($survey->approved_by != null) {
            return $this->withMessage("Survey report has been earlier approved.", 400);
        }

        if (!$isSuperUser && $survey->institution_id != $det->institution_id) {
            return $this->withMessage("You cannot modify this survey report.", 403);
        }

        $data = $request->only('description', 'structure', 'title');
        $data['updated_by'] = $user->id;

        $survey_updated = $survey->update($data);
        if ($survey_updated) {
            return $this->withJson(['message' => 'Survey updated.']);
        }

        throw new UpdateResourceFailedException('Unable to update survey report at the moment, try again');
    }

    public function review(JWTAuth $token, Request $request, $id)
    {
        $validator = Validator::make($request->all(), [
            'description' => 'required|string',
            'title' => 'required|string',
            'structure' => 'required|json'
        ]);

        if ($validator->fails()) {
            return $this->validationError($validator->errors());
        }

        $user = $this->authUser();

        if (!$user) {
            return $this->withMessage('User authentication invalid.', 403);
        }

        if (!$user->can('approve_survey_report')) {
            return $this->withMessage("You do not permission to review survey report.", 403);
        }

        $det = UserController::getAdminDetails($user);
        $isSuperUser = $user->isSuperAdmin();

        if ($isSuperUser) {
            $survey = SurveyReport::where('id', $id)->first();
        } else {
            $survey = SurveyReport::where('id', $id)->where('institution_id', $det->institution_id)->first();
        }

        if (!$survey) {
            return $this->notFound("Survey report not found.");
        }

        if ($survey->approved_by != null) {
            return $this->withMessage("Survey report has been earlier approved.", 400);
        }

        if (!$isSuperUser && $survey->institution_id != $det->institution_id) {
            return $this->withMessage("You cannot modify this survey report.", 403);
        }

        $data = $request->only('description', 'structure', 'title');
        $data['updated_by'] = $user->id;
        $data['reviewed_by'] = $user->id;

        $survey_updated = $survey->update($data);
        if ($survey_updated) {
            return $this->withMessage('updated.');
        }

        throw new UpdateResourceFailedException('Unable to update survey report at the moment, try again');
    }

    public function approve(JWTAuth $token, Request $request, $id)
    {
        $validator = Validator::make($request->all(), [
            'description' => 'string',
            'title' => 'string',
            'structure' => 'json'
        ]);

        if ($validator->fails()) {
            return $this->validationError($validator->errors());
        }

        $user = $this->authUser();

        if (!$user) {
            return $this->withMessage('User authentication invalid.', 403);
        }

        if (!$user->can('approve_survey_report')) {
            return $this->withMessage("You do not permission to approve survey report.", 403);
        }

        $det = UserController::getAdminDetails($user);
        $isSuperUser = $user->isSuperAdmin();

        if ($isSuperUser) {
            $survey = SurveyReport::where('id', $id)->first();
        } else {
            $survey = SurveyReport::where('id', $id)->where('institution_id', $det->institution_id)->first();
        }

        if (!$survey) {
            return $this->notFound("Survey report not found.");
        }

        if ($survey->approved_by != null) {
            return $this->withMessage("Survey report has been earlier approved.", 400);
        }

        if (!$isSuperUser && $survey->institution_id != $det->institution_id) {
            return $this->withMessage("You cannot modify this survey report.", 403);
        }

        //$data = $request->only('description', 'structure', 'title');
        $data = [];
        $data['updated_by'] = $user->id;
        $data['approved_by'] = $user->id;
        $data['approved_at'] = \Carbon\Carbon::now()->toDateTimeString();

        $survey_updated = $survey->update($data);
        if ($survey_updated) {
            return $this->withMessage('updated successfully.');
        }

        throw new UpdateResourceFailedException('Unable to approve survey report at the moment, try again');
    }

    public function destroy(JWTAuth $token, $id)
    {
        $user = $this->authUser();

        if (!$user) {
            return $this->withMessage("User authentication failed.", 403);
        }

        $survey = SurveyReport::query()->find($id);
        if (!$survey) {
            return $this->notFound('survey report details not found.');
        }

        if (!$user->can('delete_survey_report')) {
            return $this->withMessage("You do not permission to delete survey report.", 403);
        }

        if ($survey->delete()) {
//            event(new InstitutionEvent($user, $survey, -1));
            return $this->withMessage('Survey deleted');
        }

        throw new DeleteResourceFailedException('Unable to delete the survey report details at the moment, try again.');
    }

    /**
     * get survey report by a particular user id
     *
     * @param string $userId
     * @return \Illuminate\Database\Eloquent\Builder[]|\Illuminate\Database\Eloquent\Collection|SurveyReport[]
     */
    public function showByUser($userId)
    {
        if (!$user = User::find($userId)) {
            throw new NotFoundHttpException('user not found');
        }
//        try {
            //  $surveyReport = SurveyReport::where('created_by', $userId)->get();
//        } catch (Exception $e) {
//        }

        return SurveyReport::where('created_by', $user->id)
            ->with('comments')
            ->with('creator')
            ->with('updater')
            ->with('reviewer')
            ->with('approver')
            ->get();
    }

    private function processAddOthersToStructure($rawStructure)
    {
//        return;
//        error_log($rawStructure);
        $structure = (array)json_decode($rawStructure, true);
        $newStructure = [];
        $actualGoods = collect([]);
        foreach ($structure as $struct) {
            $good_id = $struct['item']['id'] ;
            $all_good_id = $struct['item']['all_good_id'];;
            $struct['others'] = [];
            if ($good_id && $all_good_id) {
                $goods = Good::query()
                    ->with('detail.category', 'vendor.user', 'pictures', 'warehouse')
                    ->where('id', '!=', $good_id)->where('all_good_id', $all_good_id)->get();
                $actualGood = Good::query()
                    ->with('detail.category', 'vendor.user', 'pictures', 'warehouse')
                    ->where('id', $good_id)->first();
                if ($actualGood) {
                    $actualGoods->push($actualGood);
                }
                foreach ($goods as $g) {
                    $struct['others'][] = [
                        'id' => $g->id,
                        'category' => ($g->detail && $g->detail->category) ? $g->detail->category->name : '',
                        'name' => $g->detail ? $g->detail->name : '',
                        'price' => $g->price,
                        'price_formatted' => $g->price_formatted,
                        'vendor' => $g->vendor,
                        'sku' => $g->sku,
                        'properties' => $g->properties,
                        'pictures' => $g->pictures,
                        'warehouse' => $g->warehouse,
                        'short_description' => $g->detail ? $g->detail->short_description : '',
                        'full_description' => $g->full_description
                    ];
                }
            }

            $newStructure[] = $struct;
        }

        event(new GoodsSearchEvent($actualGoods, 'survey'));
        return json_encode($newStructure);
    }
}
