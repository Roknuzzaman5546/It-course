<?php

namespace App\Http\Controllers\Class;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class ClassController extends Controller
{
    //
    public function classDetails($id)
    {
        $classData = DB::table('courses')->where('id', $id)->first();
        return inertia('AllClass/ClassDetails', ['classData' => $classData]);
    }
}
