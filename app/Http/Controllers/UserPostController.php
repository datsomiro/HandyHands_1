<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class UserPostController extends Controller
{
    public function index()
    {  
         $allpost = UserPost::get();

         return view();
        //
    }

    public function create()
    
    {
        return view('post.reactApp');
    }


    public function store(Request $request)
    {
        $post = new posts;
        $post->user_id  = $request->input('user_id ');
        $post->location  = $request->input('location');
        $post->uploaded_photo_path = $request->input('uploaded_photo_path');
        $post->description  = $request->input('description');
        $post->volunteer  = $request->input(' volunteer ');
        $post->cost = $request->input('cost');

        
         	
        $post->save();

        post::create($request);
        //return view ('users.show');
        return redirect(action('UserPostController@show'));
    }

   
    public function show(UserPost $userPost)
    {
        
    }

    
}
