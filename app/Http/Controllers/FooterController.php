<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Footer;
use App\AdditionalFooterDetail;
use App\Copyright;
use App\RefundPolicy;
use App\TermAndCondition;

class FooterController extends Controller
{
    public function fetchFooter()
    {
        $footer = Footer::orderBy('created_at', 'DESC')->first();

        // get additional footer detail last inserted
        $additionalFooterDetail = AdditionalFooterDetail::orderBy('created_at', 'DESC')->first();

        // get copyright last inserted
        $copyright = Copyright::orderBy('created_at', 'DESC')->first();

        // get RefundPolicy last inserted
        $refundPolicy = RefundPolicy::orderBy('created_at', 'DESC')->first();

        // get terms and condition last inserted
        $termAndCondition = TermAndCondition::orderBy('created_at', 'DESC')->first();

        $footer['terms_and_condition'] = $termAndCondition;
        $footer['refund_policy'] = $refundPolicy;
        $footer['copyright'] = $copyright;
        $footer['additional_footer_detail'] = $additionalFooterDetail;

        return response()->json([
            'success'   => true,
            'footer'    => $footer
        ]);
    }

    public function save(Request $request)
    {
        $footer = Footer::where('id', $request->id)->first();

        if ( isset( $footer ) ) {

            $data = [
                'title'         => "",
                'content'       => "",
                'phone_number'  => "",
                'address'       => "",
            ];

            // update footer data
            // check if the data in terms_and_condition changed
            $termAndCondition = TermAndCondition::where('id', $request->terms_and_condition_data['id'])->first();
            
            $data['title'] = $request->terms_and_condition_data['title'];
            $data['content'] = $request->terms_and_condition_data['content'];

            if ($termAndCondition->title != $request->terms_and_condition_data['title']
                || $termAndCondition->content != $request->terms_and_condition_data['content']
            ) {
                $termAndCondition = TermAndCondition::create($data);
            }

            // check if the data in additional footer detail changed
            $additionalFooterDetail = AdditionalFooterDetail::orderBy('created_at', 'DESC')->first();
            
            $data['title'] = $request->additional_footer_detail_data['title'];
            $data['phone_number'] = $request->additional_footer_detail_data['phone_number'];
            $data['address'] = $request->additional_footer_detail_data['address'];

            if ($additionalFooterDetail->title != $request->additional_footer_detail_data['title']
                || $additionalFooterDetail->phone_number != $request->additional_footer_detail_data['phone_number']
                || $additionalFooterDetail->address != $request->additional_footer_detail_data['address']
            ) {
                $additionalFooterDetail = AdditionalFooterDetail::create($data);
            }

            // get copyright last inserted
            $copyright = Copyright::orderBy('created_at', 'DESC')->first();

            $data['title'] = $request->copyright_data['title'];
            $data['content'] = $request->copyright_data['content'];

            if ($copyright->title != $request->copyright_data['title']
                || $copyright->content != $request->copyright_data['content']
            ) {
                $copyright = Copyright::create($data);
            }

            // get RefundPolicy last inserted
            $refundPolicy = RefundPolicy::orderBy('created_at', 'DESC')->first();

            $data['title'] = $request->refund_policy_data['title'];
            $data['content'] = $request->refund_policy_data['content'];

            if ($refundPolicy->title != $request->refund_policy_data['title']
                || $refundPolicy->content != $request->refund_policy_data['content']
            ) {
                $refundPolicy = RefundPolicy::create($data);
            }

            $footer->terms_and_condition_id         = $termAndCondition->id;
            $footer->additional_footer_detail_id    = $additionalFooterDetail->id;
            $footer->copyright_id                   = $copyright->id;
            $footer->refund_policy_id               = $refundPolicy->id;
            $footer->social_media_links             = $request->social_media_links;
            $footer->contact_support                = $request->contact_support;
            $footer->accredited_icons               = $request->accredited_icons;
            $footer->purchased_readings             = $request->purchased_readings;
            $footer->save();
        }

        return response()->json([
            'success'   => true,
            'data'      => $footer
        ]);
    }
}
