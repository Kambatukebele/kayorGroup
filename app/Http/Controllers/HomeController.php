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

    // public function sendEmail(Request $request){
    //     $data = $request->validate([
    //         'name' => "required|string|max:100",
    //         'email'=> "required|email",
    //         'message' => "required|string|max:255",
    //         'checkbox' => 'required'
    //     ]);

    //     // Mail::to('kayor+@inbox.mailtrap.io')->send(new ContactFormMail($data));

    //     // return response()->json(['message' => 'Your message has been sent!'], 200);
    //     //\Notification::route('mail', 'demo@mailo.com')->notify(new SendContactForm($data));
    //     // return redirect()
    // }

    public function thank_you (){
        return inertia("ThankYou");
    }
}
