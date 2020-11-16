<?php
use App\Models\User;


namespace App\Http\Controllers;

class HomeController extends Controller
{
    public function index()
    {
        
        return view('home.index');
        //return redirect()->route('user.edit', $user->id)
        //return redirect()->route('user.edit', $user->id)
         //   ->with('success_message', 'user saved');

    }

    public function ReactComponent(){
        return view('Posts/post-show');
    }
}
