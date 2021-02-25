<?php

namespace App\Api\Controllers;

use App\Http\Controllers\Controller;
use Carbon\Carbon;
use Dingo\Api\Http\Request;
use Dingo\Api\Http\Response;
use App\Event;
use App\Events\AutoClearOldEvents;
use Dingo\Api\Exception\DeleteResourceFailedException;
use Symfony\Component\HttpKernel\Exception\NotFoundHttpException;

use Symfony\Component\HttpKernel\Exception\BadRequestHttpException;

class EventController extends Controller
{
    /**
     * Save events to db.
     *
     * @param string event
     * @param integer event_enum_id
     * @param string information
     * @param string thread
     *
     * @return void
     */
    public static function save($event, $event_enum_id, $information = null, $thread = null)
    {
        $data = [
            'event' => $event,
            'event_enum_id' => $event_enum_id,
            'information' => $information,
            'thread' => $thread,
        ];
        Event::create($data);
    }

    public static function clearOldEvents()
    {
        $maxEventAge = 30;
        $age = Carbon::now()->subDays($maxEventAge);
        if (Event::query()->where('created_at', '<', $age)->delete()) {
            self::save('Old Event deleted', 2, 'Old events were automatically deleted.', __FILE__);
        }
    }

    public function triggerClearOldEvent()
    {
        $autoClearOldEvents = false;
        if ($autoClearOldEvents) {
            event(new AutoClearOldEvents());
        }
    }


    public function index(Request $request)
    {
        $search = null;
        if ($request->input('search') != null) {
            $search = $request->input('search');
        }
        $events = Event::query();
        if (!is_null($search)) {
            $events = $events->where(function ($query) use ($search) {
                $query->where('event', 'like', '%' . $search . '%')
                    ->orWhere('event_enum_id', 'like', '%' . $search . '%')
                    ->orWhere('information', 'like', '%' . $search . '%')
                    ->orWhere('thread', 'like', '%' . $search . '%')
                        //->orWhere('created_at', 'like', '%' . $search . '%')
                    ->orWhereHas('eventEnum', function ($new_query) use ($search) {
                        $new_query->where('name', 'like', '%' . $search . '%');
                    });
            });
        }

        //date range
        $events->withDates();

        $events = $events->with('eventEnum')->latest()->paginate();

        return $events;
    }

    public function destroy($id)
    {
        if (Event::findOrFail($id)->delete()) {
            return $this->withJson(['status' => 'ok']);
        }
        //single event not deleted
        throw new DeleteResourceFailedException('Delete request failed');
    }

    public function destroyByDates(Request $request)
    {
        if ($request->has('from_date') && $request->has('to_date')) {
            $from_date = $request->from_date;
            $to_date = $request->to_date;
            if (Event::query()->whereBetween('created_at', [$from_date, $to_date])->delete()) {
                //logs the event
                self::save('Old Event deleted', 2, 'Old events between ' . $from_date . ' and ' . $to_date . ' were manually deleted', __FILE__);
                return new Response(['status' => 'Event deleted'], 201);
            }
            //events not deleted
            throw new DeleteResourceFailedException('Delete request failed');
        } else {
            throw new BadRequestHttpException('Invalid arguments');
        }
    }
}
