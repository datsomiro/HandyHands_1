<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Users;
use Illuminate\Support\Facades\Auth;

class UserController extends Controller
{
    public function index()
    {
        
        $users = Users::get();

        if($users->count() === 0){
            return 'no users';
        }

        return view('users/index', compact('users'));
    }

    public function show()
    {
        $user = Auth::user();
        $user->load('posts');

        return $user;
    }

    public function create()
    {
        return view('users/create');
    }

    public function store(Request $request)
    {

        $user = new Users;
        $user->firstname = $request->input('firstname');
        $user->lastname = $request->input('lastname');
        $user->email = $request->input('email');
        $user->save();


        Users::create($request);
        //return view ('users.show');
        return redirect(action('UserController@show'));
    }

    public function edit()
    {
        $user = Auth::user();
        
        return $user;

    }

    public function update( Request $request)
    {
        $this->validate($request, [
            'firstname' => 'nullable|string|min:3|max:191',
            'lastname' => 'nullable|string|min:3|max:191',
            'email' => 'nullable|string|min:3|max:191',
            'password'=> 'nullable|string|min:8|max:191',
            
        ]);


        $users = Auth::user();
        $users->update($request->all());

        return redirect(action('UserController@edit'));
    }
}
