<?php

namespace App\Http\Controllers\Auth;

use Illuminate\Auth\Events\Registered;

use Laravel\Fortify\Contracts\CreatesNewUsers;

use Laravel\Fortify\Contracts\RegisterResponse as RegisterResponseContract;

use App\Http\Responses\RegisterResponse;



use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Laravel\Fortify\Http\Controllers\RegisteredUserController;

class RegisterController extends RegisteredUserController
{
    /**
     * Create a new registered user.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Laravel\Fortify\Contracts\CreatesNewUsers  $creator
     * @return \Laravel\Fortify\Contracts\RegisterResponse
     */
    public function store(Request $request,
                          CreatesNewUsers $creator): RegisterResponseContract
    {
        event(new Registered($user = $creator->create($request->all())));

        $this->guard->login($user);   
                
        $response = new RegisterResponse;
        $response->user = $user;
        return $response;   

    }
}
