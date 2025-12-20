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
        $string = "Hello, World!";
        $reversedString = strrev($string);
        
        function isPrime($num){
            if($num <= 1) return false;
            for($i = 2; $i <= sqrt($num); $i++){
                if($num % $i == 0) return false;
            }
            return true;
        }
        
        $itsPrime = [];
        for ($n = 0; $n <= 40; $n++) {

            if (isPrime($n)) {
                $itsPrime[] = $n;
            }
        }


        $input = "Laravel Interview";
        $reverse = [];
        for ($i = strlen($input) -1; $i >=0; $i --){
            $reverse[] = $input[$i];
        }


        $numbers = [12, 7, 9, 20, 33, 42, 55];

        $result =[
            'even' => 0,
            'odd' => 0
        ];

        foreach ($numbers as $number){
            if ($number % 2 ==0){
                $result['even']++;
            } else {
                $result['odd']++;
            }
        }


        print_r($result);


        $str = "Interview";
        $rev = [];
        for ($i = 0; $i < strlen($str); $i++) {
            $char = $str[$i];
            $rev[$char] = ($rev[$char] ?? 0) + 1;
        }

        $classesData = DB::table('courses')->get();
        return Inertia::render('AllClass/Allclasses', compact('classesData'));
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
