<?php

namespace App\Http\Controllers;
use App\Models\TeacherApplication;
use Illuminate\Http\Request;
use DB;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;

class TeachersController extends Controller
{
    public function techIndex()
    {
        $userId = Auth::id();
        $teacherRequest = TeacherApplication::join('users', 'users.id', '=', 'teacher_applications.user_id')
            ->where('teacher_applications.user_id', $userId)
            ->select('teacher_applications.*', 'users.name', 'users.email')
            ->first();
        return Inertia::render('Techonit/Techonitbd', compact('teacherRequest'));
    }
    public function storeTeacherReq(Request $request)
    {
        $request->validate([
            'name' => 'required|string|max:255',
            'title' => 'required',
            'cv_url' => 'required',
            'bio' => 'required',
        ]);

        $teacherData = ([
            'user_id' => Auth::id(),
            'cv_url' => $request->cv_url,
            'bio' => $request->bio,
            'applied_at' => now(),
            'created_at' => now(),
            'updated_at' => now(),
        ]);
        // dd($teacherData);
        DB::table('teacher_applications')->insert($teacherData);
        return redirect('/')->with('success', 'Teacher request post successfully.');
    }
}
