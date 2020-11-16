<?php

namespace App\Http\Controllers;

class IndexController extends Controller
{
    public function index()
    {
        // prepare something for the react app

        return view('index.index');
    }
}
