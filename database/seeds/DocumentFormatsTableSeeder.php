<?php

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Maatwebsite\Excel\Facades\Excel;
use App\Category;
use App\DocumentFormat;

class DocumentFormatsTableSeeder extends Seeder
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
        DB::table( 'document_formats' )->truncate();
        
        //create document formats
        $types = [

            [
                'extension' => 'docx',
                'mime_type' => 'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
                'description' => 'Microsoft Office - OOXML - Word Document'
            ],
            [
                'extension' => 'doc',
                'mime_type' => 'application/msword',
                'description' => 'Microsoft Word'
                
            ],
            [
                'extension' => 'html',
                'mime_type' => 'text/html',
                'description' => 'HyperText Markup Language (HTML)'
                
            ],
            [
                'extension' => 'odt',
                'mime_type' => 'application/vnd.oasis.opendocument.text',
                'description' => 'OpenDocument Text'
                
            ],
            [
                'extension' => 'pdf',
                'mime_type' => 'application/pdf',
                'description' => 'Adobe Portable Document Format'
                
            ],
            [
                'extension' => 'xls',
                'mime_type' => 'application/vnd.ms-excel',
                'description' => 'Microsoft Excel'
                
            ],
            [
                'extension' => 'xlsx',
                'mime_type' => 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
                'description' => 'Microsoft Office - OOXML - Spreadsheet'
                
            ],
            [
                'extension' => 'ods',
                'mime_type' => 'application/vnd.oasis.opendocument.spreadsheet',
                'description' => 'OpenDocument Spreadsheet'
                
            ],
            [
                'extension' => 'ppt',
                'mime_type' => 'application/vnd.ms-powerpoint',
                'description' => 'Microsoft PowerPoint'
                
            ],
            [
                'extension' => 'pptx',
                'mime_type' => 'application/vnd.openxmlformats-officedocument.presentationml.presentation',
                'description' => 'Microsoft Office - OOXML - Presentation'
                
            ],
            [
                'extension' => 'txt',
                'mime_type' => 'text/plain',
                'description' => 'Text File'
                
            ]

        ];

        foreach ($types as $type) {
            $documentFormat = new DocumentFormat($type);
            $documentFormat->save();
        };

        // enable Foreign key check 
        //DB::statement('SET FOREIGN_KEY_CHECKS=1;');
    }
}
