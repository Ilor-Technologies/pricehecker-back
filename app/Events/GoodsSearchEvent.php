<?php

namespace App\Events;

use Illuminate\Queue\SerializesModels;
use Illuminate\Foundation\Events\Dispatchable;
use Illuminate\Broadcasting\InteractsWithSockets;
use App\User;

class GoodsSearchEvent
{
    use Dispatchable, InteractsWithSockets, SerializesModels;

    /**
     * Create a new event instance.
     *
     * @param $searchResult
     * @param string $type
     */
    public function __construct($searchResult, $type = 'search')
    {
        if ($type == 'search') {
            foreach ($searchResult as $result) {
                $result->update(['times_in_search' => ($result->times_in_search + 1)]);
            }
        } else if($type == 'survey') {
            foreach ($searchResult as $result) {
                $result->update(['times_in_survey' => ($result->times_in_survey + 1)]);
            }
        }
    }
}
