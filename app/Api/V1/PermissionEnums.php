<?php
/**
 * Created by PhpStorm.
 * User: gemda
 * Date: 18/06/2019
 * Time: 10:06 PM
 */

namespace App\Api;


class PermissionEnums
{
    public static $permissions = [
//        note: 0=>super_admin, 1=>admin, 2=>internal_user, 3=>vendor
        'view_settings' => [0],
        'add_settings' => [0],
        'edit_settings' => [0],
        'delete_settings' => [0],

        'manage_states' => [0],

//        about roles and permissions
        'view_roles' => [0, 1], 'view_permissions' => [0, 1],
        'add_roles' => [0, 1], 'add_permissions' => [],
        'edit_roles' => [0, 1], 'edit_permissions' => [],
        'delete_roles' => [0, 1], 'delete_permissions' => [],

//        manage events
        'view_events' => [0],
        'add_events' => [0],
        'edit_events' => [0],
        'delete_events' => [0],

        //manage institutions
        'view_institution' => [0, 1, 2], 'view_institutions' => [0, 1, 2],
        'add_institution' => [0], 'add_institutions' => [0],
        'edit_institution' => [0], 'edit_institutions' => [0],
        'delete_institution' => [0], 'delete_institutions' => [0],
        'view_institution_code' => [0],

        //manage institutions
        'view_parastatal' => [0, 1, 2], 'view_parastatals' => [0, 1, 2],
        'add_parastatal' => [0], 'add_parastatals' => [0],
        'edit_parastatal' => [0], 'edit_parastatals' => [0],
        'delete_parastatal' => [0], 'delete_parastatals' => [0],
        'view_parastatals_code' => [0],

//        manage message templates
        'view_message_templates' => [0],
        'add_message_templates' => [0],
        'edit_message_templates' => [0],
        'delete_message_templates' => [0],

//        manage faqs
        'view_faqs' => [0, 1, 2, 3],
        'add_faqs' => [0, 1],
        'edit_faqs' => [0, 1],
        'delete_faqs' => [0, 1],

//        manage goods review
        'view_goods_review' => [0, 1, 2, 3],
        'add_goods_review' => [0, 1, 2],
        'edit_goods_review' => [0, 1, 2],
        'delete_goods_review' => [0, 1, 2],

//        manage goods for vendors, and super admins
        'view_goods' => [0, 2, 3],
        'add_goods' => [0, 3],
        'edit_goods' => [0, 3],
        'delete_goods' => [0, 3],

        'view_goods_by_other_users' => [0, 2],

//        Survey reports, for admins and super admins
        "view_survey_report" => [0, 1, 2],
        "edit_survey_report" => [0, 1, 2],
        "delete_survey_report" => [0, 1],
        "approve_survey_report" => [0, 1],
        "review_survey_report" => [0, 1],
        "create_survey_report" => [0, 1, 2],
        "update_survey_report" => [0, 1, 2],

//
        //"vendor_update_own_account" => [3],
        "vendor_get_subscribed_category" => [3],
        "vendor_subscribe_to_category" => [3],
        "vendor_view_subscribed_category_detail" => [3],
        "delete_vendor_subscribed_category" => [0, 3],

        "view_vendors_categories" => [0, 1],

//        user management
        "view_internal_users" => [0, 1],
        "view_vendors" => [0, 1, 2],
        "lock_users" => [0, 1],
        "view_locked_users" => [0, 1],
        "delete_users" => [0, 1],
        "change_others_password" => [0, 1],
        "create_internal_users" => [0, 1],
        "create_vendors" => [0],
        "update_vendors" => [0],
        "update_internal_users" => [0, 1],

        "view_goods_category" => [0, 1, 3],
        "update_goods_category" => [0, 1],
        "create_goods_category" => [0, 1],
        "delete_goods_category" => [0, 1],

        "update_job_titles" => [0, 1, 2],
        "create_job_titles" => [0, 1, 2],
        "delete_job_titles" => [0, 1, 2],

        //feedbacks
        "view_feedbacks" => [0, 1],
        "delete_feedbacks" => [0],
        "create_feedbacks" => [0, 1, 3],

        //responses to feedbacks
        "respond_to_feedbacks" => [0, 1],
        "view_responses" => [0, 1, 2],
        "update_responses" => [0],
        "delete_responses" => [0],

        "send_emails" => [0],

        //goods search
        "view_search" => [0, 1, 2],

        //notification management
        "view_notifications" => [0, 1, 2, 3],
        "delete_notifications" => [0],
        "create_notifications" => [0],
        'view_admin_notifications' => [0],

        //warehouses
        'view_warehouses_by_other_users' => [0],
        'view_warehouses' => [0, 3],
        'add_warehouses' => [0, 3],
        'edit_warehouses' => [0, 3],
        'delete_warehouses' => [0, 3],

        //faq
        'add_faq' => [0],
        'edit_faq' => [0],
        'delete_faq' => [0],

        //pictures
        'add_pictures' => [0],
        'edit_pictures' => [0],
        'delete_pictures' => [0],
        'view_pictures' => [0],

        //documents
        'view_others_documents' => [0],

        //doc formats
        'create_document_formats' => [0],
        'view_document_formats' => [0],
        'edit_document_formats' => [0],
        'delete_document_formats' => [0],

        //doc types
        'view_document_types' => [0],
        'create_document_types' => [0],
        'edit_document_types' => [0],
        'delete_document_types' => [0],

        //task types
        'view_task_types' => [0],
        'create_task_types' => [0],
        'edit_task_types' => [0],
        'delete_task_types' => [0],

        //approvals
        'view_approvals' => [0],
        'create_approvals' => [0],
        'edit_approvals' => [0],
        'delete_approvals' => [0],

        //approval details
        'view_approval_details' => [0],
        'create_approval_details' => [0],
        'edit_approval_details' => [0],
        'delete_approval_details' => [0],

        //tasks
        'view_approval_requests' => [0, 1, 2],
        'view_all_approval_requests' => [0],
        'create_approval_requests' =>  [0, 1, 2],
        'delete_approval_requests' => [0],

        //grades
        'create_grades' =>  [0, 1],
        'delete_grades' => [0, 1],
        'update_grades' => [0, 1],

        //on created goods
        'approve_created_goods' => [0],
        'delete_created_goods' => [0],
        'update_created_goods' => [0],
    ];
}
