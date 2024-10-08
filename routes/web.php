<?php

use App\Http\Controllers\DashboardController;
use App\Http\Controllers\HomeController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\TeachersController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return Inertia::render('Home/Home');
})->name('/');
Route::get('/allClasses', [HomeController::class, 'allclassIndex'])->name('all.class');
Route::get('/faq', [HomeController::class, 'faqIndex'])->name('faq');
Route::get('/condition', [HomeController::class, 'conditionIndex'])->name('terms.condition');
Route::get('/Privecy', [HomeController::class, 'privecyIndex'])->name('privecy.policy');
Route::get('/contact', [HomeController::class, 'contactIndex'])->name('contact.us');


Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

Route::group(['middleware' => ['auth']], function () {
    Route::get('/aboutUs', [HomeController::class, 'aboutIndex'])->name('about.us');
    Route::get('/techIt', [HomeController::class, 'techIndex'])->name('tech.it');
    Route::post('/techIt', [TeachersController::class, 'storeTeacherReq'])->name('store.teacherReq');
    Route::get('/dashboard', [DashboardController::class, 'dashboard'])->name('dashboard');
});

require __DIR__ . '/auth.php';
