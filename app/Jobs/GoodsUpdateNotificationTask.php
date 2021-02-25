<?php

namespace Pricechecker\Jobs;

use Illuminate\Bus\Queueable;
use Illuminate\Queue\SerializesModels;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Foundation\Bus\Dispatchable;
use App\Good;
use App\Mail\GoodsNoticationReminderMail;

class GoodsUpdateNotificationTask implements ShouldQueue
{
    use Dispatchable, InteractsWithQueue, Queueable, SerializesModels;

    /**
     * Create a new job instance.
     *
     * @return void
     */
    public function __construct()
    {
    }

    /**
     * Execute the job.
     *
     * @return void
     */
    public function handle()
    {
        $goods = Good::query()->with('vendor', 'detail')->notUpdatedWithin('2 weeks ago')->get();
        error_log("All goods count: ". $goods->count());

        $batches = [];
        foreach ($goods as $good) {
            if(!array_key_exists($good->vendor_id, $batches)) {
                $batches[$good->vendor_id] = ['vendor' => $good->vendor, 'goods' => []];
            }
            $batches[$good->vendor_id]['goods'][] = $good;
        }

        foreach ($batches as $batch) {
            dispatch(new GoodsNoticationReminderMail($batch));
        }
    }
}
