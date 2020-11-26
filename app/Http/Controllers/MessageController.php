<?php

namespace App\Http\Controllers;

use App\Models\Message;
use App\Models\UserPost;
use Auth;
use Illuminate\Http\Request;

class MessageController extends Controller
{
    
    public function index()
    {   
        $messages = Message::where('to_users_id', Auth::id())->orderBy('created_at','desc')->get();
        //$message ->load('users');

        return $messages;
    }

    public function create()
   
    {Validator::make($input, [
            'message_content' => ['required', 'string', 'max:255'],
            'created_at' => ['timestamp','string', 'max:255'],
            'updated_at'=>['timestamp','string', 'max:255'],
            'from_users_id' => ['required','integer'],
            'to_users_id' =>['required','integer'],
        ])->validate();

        return Message::create([
            'message_content' => $input['message_content'],
            'created_at' => $input['created_at'],
            'updated_at' => $input['updated_at'],
            'from_users_id' => $input['from_users_id'],
            'to_users_id' => $input['to_users_id'],
            

        ]);
    }

    public function store(Request $request)
    {
        $message = new Message;
        $message->message_content = $request->input('message_content');
        $message->from_users_id = Auth::id(); 
        $message->to_users_id =  $request-> input('to_users_id');

        
        $message->save();

        return $message;
    }
        public function update( Request $request)
    {
        $this->validate($request, [
            'message_content' => 'nullable|string|min:3|max:191',
            'created_at' => 'nullable|string|min:3|max:191',
            'updated_at' => 'nullable|string|min:3|max:191',
            'from_users_id'=> 'nullable|integer',
            'to_users_id' => 'nullable|integer',
        ]);


        $users = Auth::user();
        $messages->update($request->all());

        return redirect(action('MessageController@edit'));

    }
}
