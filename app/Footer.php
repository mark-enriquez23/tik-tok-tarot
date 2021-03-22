<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Footer extends Model
{
    protected $fillable = [
        'social_media_links',
        'terms_and_condition_id',
        'refund_policy_id',
        'copyright_id',
        'contact_support',
        'accredited_icons',
        'additional_footer_info_id',
        'purchased_readings',
        'metadata',
    ];

    protected $casts = [
        'social_media_links' => 'array',
        'accredited_icons' => 'array',
        'purchased_readings' => 'array',
    ];

    public function additionalFooterDetails()
    {
        return $this->hasMany(AdditionalFooterDetail::class);
    }

    public function copyrights()
    {
        return $this->hasMany(Copyright::class);
    }

    public function refundPolicies()
    {
        return $this->hasMany(RefundPolicy::class);
    }

    public function termAndCondition()
    {
        return $this->hasMany(TermAndCondition::class);
    }
}
