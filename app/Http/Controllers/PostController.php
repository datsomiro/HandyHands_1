<?php

namespace App\Http\Controllers;

use App\Models\UserPost;
use Illuminate\Http\Request;
use App\Models\Post;
use App\Models\Users;
use Illuminate\Support\Facades\Auth;


class PostController extends Controller
{
    
     public function create()
   
    {Validator::make($input, [
            'uploaded_photo_path' => ['required', 'string', 'max:255'],
            'location' => ['required','string', 'max:255'],
            'description'=>['required','string', 'max:255'],
            'cost' => ['required','string', 'max:255'],
            'volunteer' =>['required','integer'],
            'service_categories' => ['required','string', 'max:255'], 
            'time' => ['required','string', 'max:255'],
            'user_id' => ['required','integer'],
        ])->validate();

        return User::create([
            'uploaded_photo_path' => $input['uploaded_photo_path'],
            'location' => $input['location'],
            'description' => $input['description'],
            'cost' => $input['cost'],
            'volunteer' => $input['volunteer'],
            'service_categories' => $input['service_categories'],
            'time' => $input['time'],
            'user_id' => $input['user_id'],

        ]);
    
        return view();
    }
  
    public function store(Request $request)
    {
        $post = new Post;
        $post->uploaded_photo_path = $request->input('uploaded_photo_path');
        $post->location  = $request->input('location');
        $post->description = $request->input('description');
        $post->cost  = $request->input('cost');
        $post->volunteer = $request->input('volunteer');
        $post->service_categories = $request->input('service_categories');
        $post->time = $request->input('time');
        $post->user_id = Auth::id();

        $post->save();    
        
        return redirect(action('PostController@index'));
    }
       
    public function index()
    {
        
        $post = Post::orderBy('created_at','desc')->get();
        
        return $post;
    }     
}