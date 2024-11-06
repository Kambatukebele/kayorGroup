<?php

namespace App\Http\Controllers;

// use Notification;

use App\Mail\ContactFormMail;
use Illuminate\Http\Request;
use App\Notifications\SendContactForm;
use Illuminate\Support\Facades\Mail;

class HomeController extends Controller
{
    public function index (){
        return inertia("Home");
    }

    public function privacy (){
        return inertia("PrivacyPolicy");
    }

    public function cookie (){
        return inertia("CookiePolicy");
    }

    public function thank_you (){
        if (!session('form_submitted')) {
            return redirect('/');
        }

        // Remove the session variable to prevent revisits
        session()->forget('form_submitted');
        return inertia("ThankYou");
    }
}
