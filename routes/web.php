<?php

//use Illuminate\Support\Facades\Route;

Route::post('/password-reset', 'UserController@update');
Route::post('/password-update', 'UserController@update');

Route::get('/users', 'UserController@index');
Route::get('/users/create', 'UserController@create');

Route::post('/users', 'UserController@store');
//Route::get('/users/{id}', 'UserController@show');

Route::get('/users/{id}/edit', 'UserController@edit');
Route::post('/api/update', 'UserController@update');
Route::get('/api/update', 'UserController@index');

Route::get('/user', 'UserController@edit');
Route::get('/api/profile', 'UserController@show');
Route::post('/api/profile', 'UserController@show');

Route::get('/users/{id}/delete', 'UserController@delete');
Route::delete('/users/{id}', 'UserController@destroy');

Route::get('/', 'Auth\WelcomeController@index');

Route::post('/register', 'Auth\RegisterController@store')->middleware(['guest']);

Route::get('/api/allposts', 'PostController@index');

//Route::get('/post_helped', 'PostController@store');
//Route::get('/post_help', 'PostController@store');

Route::post('/api/post_help', 'PostController@store');
Route::post('/api/post_helped', 'PostController@store');
Route::get('/api/post_help', 'PostController@index');
Route::get('/api/post_helped', 'PostController@index');

Route::get('/api/messages', 'MessageController@index');
Route::post('/messages', 'MessageController@store');

Route::get('/{path?}', 'IndexController@index')->name('index')
    ->where('path', '.*');
