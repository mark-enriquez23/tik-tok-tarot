<?php

namespace App\Mail;

use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Mail\Mailable;
use Illuminate\Queue\SerializesModels;

class SendEmail extends Mailable
{
    use Queueable, SerializesModels;

    public $data;

    /**
     * Create a new message instance.
     *
     * @return void
     */
    public function __construct($data)
    {
        $this->data = $data;
    }

    /**
     * Build the message.
     *
     * @return $this
     */
    public function build()
    {
        $address = 'testingmine4@gmail.com'; // Main SendGrid Account
        $subject = 'New User!'; // Subject of the email
        $name = $this->data['fullName']; // Name of the new user

        return $this->view('emails.test') // template of email
                    ->from($address, $name) // email of the sender
                    ->cc($address, $name)
                    ->bcc($address, $name)
                    ->replyTo($address, $name)
                    ->subject($subject)
                    ->with([
                        'fullName' => $this->data['fullName'],
                        'userName' => $this->data['userName'],
                        'email' => $this->data['email'],
                        'phoneNumber' => $this->data['phone_number'],
                        'verificationCode' => $this->data['verification_code']
                    ]); // data pass to template
    }
}
