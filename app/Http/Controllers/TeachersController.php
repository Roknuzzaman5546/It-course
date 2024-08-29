<?php

namespace App\Http\Controllers;
use Illuminate\Http\Request;

class TeachersController extends Controller
{
    public function storeTeacherReq(Request $request)
    {
        dd($request->all());
    }
}
