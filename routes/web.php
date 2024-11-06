<?php

use App\Http\Controllers\HomeController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\SendEmailController;
use App\Notifications\SendContactForm;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

// Route::get('/', function () {
//     return Inertia::render('Welcome', [
//         'canLogin' => Route::has('login'),
//         'canRegister' => Route::has('register'),
//         'laravelVersion' => Application::VERSION,
//         'phpVersion' => PHP_VERSION,
//     ]);
// });

Route::get('/', [HomeController::class, 'index']);
Route::get('/privacy_policy', [HomeController::class, 'privacy']);
Route::get('/cookie_policy', [HomeController::class, 'cookie']);
// Route::post('/send_email', [HomeController::class, 'sendEmail']);


//Send Email
//->middleware('throttle:5,1') This will limit requests to 5 per minute per IP address.
Route::resource('/send_email', SendEmailController::class)->only([
    'store'
])->middleware('throttle:5,1');
Route::get('/thank_you', [HomeController::class, 'thank_you']);


// Route::get('/dashboard', function () {
//     return Inertia::render('Dashboard');
// })->middleware(['auth', 'verified'])->name('dashboard');

// Route::middleware('auth')->group(function () {
//     Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
//     Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
//     Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
// });

require __DIR__.'/auth.php';
