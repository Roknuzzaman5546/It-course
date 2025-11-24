<?php

namespace App\Http\Controllers\Class;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class ClassController extends Controller
{
    //
    public function classDetails($id)
    {
        // Logic to get class details by $id
        
        return inertia('Class/ClassDetails', ['classId' => $id]);
    }
}
