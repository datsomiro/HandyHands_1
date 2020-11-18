<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Users;

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

    public function show($id)
    {
        $users = Users::findOrFail($id);

        return view('users/show', compact('users'));

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
        $user->phone_number = $request->input('phone_number');
        $user->save();


        Users::create($request);
        //return view ('users.show');
        return redirect(action('UserController@show'));
        


    }

    public function edit($id)
    {
        $users = Users::findOrFail($id);

        return view('users/edit', compact('users'));
    }

    public function update($id, Request $request)
    {
        $this->validate($request, [
            'firstname' => 'required|string|min:3|max:191',
            'lastname' => 'required|string|min:3|max:191',
            'email' => 'required|string|min:3|max:191',
            'password'=> 'required|string|min:8|max:191',
            'profile_photo_path'=> 'string',
            'handy_points'=> 'integer',

        ]);


        $users = Users::findOrFail($id);
        $users->update($request->all());

        return redirect(action('UserController@index'));
    }

    public function delete($id)
    {
        $users = Users::findOrFail($id);

        return view('categories/delete', compact('users'));
    }

    public function destroy($id)
    {
        $users = Users::findOrFail($id);

        $users->delete();

        return redirect(action('UserController@index'));
    }
}
