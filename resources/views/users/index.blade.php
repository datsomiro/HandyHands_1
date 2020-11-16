<h1>Users Management</h1>

<a href="{{ action('UserController@create') }}">Create new user</a>
@foreach($users as $user)
    <p>
        <a href="{{ action('UserController@show', $users->id) }}">
            <strong>{{ $user->first_name }}</strong>
        </a>

    </p>
@endforeach