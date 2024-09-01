<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;

class HomeController extends Controller
{
    public function allclassIndex()
    {
        return Inertia::render('AllClass/Allclasses');
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
