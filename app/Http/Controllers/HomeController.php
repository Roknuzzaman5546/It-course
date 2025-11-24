<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Inertia\Inertia;

class HomeController extends Controller
{
    public function home()
    {
        $classData = DB::table('courses')->limit(6)->get();
        return Inertia::render('Home/Home', compact('classData'));
    }
    public function allclassIndex()
    {
        $classesData = DB::table('courses')->get();
        return Inertia::render('AllClass/Allclasses', compact( 'classesData'));
    }
    public function techIndex()
    {
        return Inertia::render('Techonit/Techonitbd');
    }
    public function aboutIndex()
    {
        return Inertia::render('About/AboutUs');
    }
    public function faqIndex()
    {
        return Inertia::render('Faq/Faq');
    }
    public function conditionIndex()
    {
        return Inertia::render('Terms&Condition/Condition');
    }
    public function privecyIndex()
    {
        return Inertia::render('PrivecyPolicy/Privecy');
    }
    public function contactIndex()
    {
        return Inertia::render('Contact/ContactUs');
    }
}
