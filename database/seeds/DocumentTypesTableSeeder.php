<?php

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Maatwebsite\Excel\Facades\Excel;
use App\Category;
use App\DocumentType;

class DocumentTypesTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        // Disable Foreign key check for this connection before running seeder
        //DB::statement('SET FOREIGN_KEY_CHECKS=0;');
        DB::table( 'document_types' )->truncate();
        
        //create document types
        $types = [
            [
                'name' => 'Vendors Supporting Documents',
                'description' => 'These are the documents vendors upload during registration. This type should never be deleted.'
            ],
            [
                'name' => 'Proposal Document',
                'description' => 'Document submitted by xyz for xyz purpose'
                
            ],
            [
                'name' => 'Others',
                'description' => 'Other types of documents'                
            ]
        ];

        foreach ($types as $type) {
            $documentFormat = new DocumentType($type);
            $documentFormat->save();
        };

        // enable Foreign key check 
        //DB::statement('SET FOREIGN_KEY_CHECKS=1;');
    }
}
