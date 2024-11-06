<?php

namespace App\Http\Controllers;

// use Notification;
use Illuminate\Http\Request;
use App\Notifications\SendContactForm;
use Illuminate\Support\Facades\Notification;


class SendEmailController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        //
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $data = $request->validate([
            'name' => "required|string|max:100",
            'email'=> "required|email",
            'message' => "required|string|max:255",
            'checkbox' => 'required|accepted'
        ]);

        //Send the email notification
        Notification::route('mail', 'demo@mailto.com')->notify(new SendContactForm($data));
        //Set session variable to indicate successful form submission
        session(['form_submitted' => true]);
        return redirect('thank_you');
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        //
    }
}
