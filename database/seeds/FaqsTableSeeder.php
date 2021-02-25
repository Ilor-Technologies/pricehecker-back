<?php

use App\Faq;
use Illuminate\Database\Seeder;

class FaqsTableSeeder extends Seeder {
	/**
	 * Run the database seeds.
	 *
	 * @return void
	 */
	public function run() {
        $id = config('apiauth.start_user_id');
		DB::table( 'faqs' )->delete();
        foreach(array(
                    [
                        'id'   => '1',
                        'question' => 'How do I register as a Vendor?',
                        'answer' => 'Go to the vendor registration page, fill the and submit the provided form with the correct information of your company and representative.',
                        'created_by' => $id
                    ],
                    [
                        'id'   => '2',
                        'question' => 'As a vendor, how do I add my goods/products?',
                        'answer' => 'Before you add a good, make sure you have added at least one Warehouse and location, as it is compulsory that you enter specify a warehouse when adding a particular good.',
                        'created_by' => $id
                    ],
                    [
                        'id'   => '3',
                        'question' => 'I have so many goods how do I upload them at once?',
                        'answer' => 'To upload many goods at once, use the batch upload feature. Go to the add goods page, click on \'download sample\' to get a sample excel document containing the right format to be followed. Do not delete any lines from the downloaded original document. Enter your goods row by row, specifying the information indicated by each column. Please note that the maximum size allowed for the excel file is 2MB.',
                        'created_by' => $id
                    ],
                    [
                        'id'   => '4',
                        'question' => 'After entering my goods in the excel file, it has exceeded 2MB, what do I do?',
                        'answer' => 'Our maximum allowed file upload size is 2MB. If you have a document that exceeds this size, please split the document and upload them seperately.',
                        'created_by' => $id
                    ],
                ) as $faq) {
            unset($faq['id']);
            Faq::create($faq);
        }
	}
}
