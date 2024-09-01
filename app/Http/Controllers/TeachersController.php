<?php

namespace App\Http\Controllers;
use Illuminate\Http\Request;
use DB;
use Illuminate\Support\Facades\Auth;

class TeachersController extends Controller
{
    public function storeTeacherReq(Request $request)
    {
        $request->validate([
            'name' => 'required|string|max:255',
            'title' => 'required',
            'experience' => 'required',
            'category' => 'required',
        ]);

        $teacherData = ([
            'name' => $request->name,
            'title' => $request->title,
            'phone' => Auth::user()->phone,
            'email' => Auth::user()->email,
            'photo' => Auth::user()->profilePhoto,
            'experience' => $request->experience,
            'category' => $request->category,
        ]);
        // dd($teacherData);
        DB::table('teacherreqs')->insert($teacherData);
        return redirect('/')->with('success', 'Teacher request post successfully.');
    }
}
