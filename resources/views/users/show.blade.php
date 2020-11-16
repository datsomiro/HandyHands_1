<h1>User Profile </h1>
<h2>Profile picture</h2>
<h2>First Name: {{ $users->first_name }}</h2>

<h2>Last Name: {{ $users->last_name }}</h2>

<h2>Email: {{ $users->email }}</h2>

<h2>Phone number: {{ $users->phone_number }}</h2>
<br/>
<br/>

<h2>About me: {{ $users->about }}</h2>
<h2>What do I need help with?: {{ $users->need_help }}</h2>
<h2>How can I help?: {{ $users->provide_help }}</h2>




{{-- <a href="{{ action('UserController@edit', [$users->id]) }}">Update</a> --}}

{{-- <a href="{{ action('UserController@delete', [$users->id]) }}">Delete</a> --}}

{{-- <form action="{{ action('UserController@destroy', [$users->id]) }}" method="POST">
    @csrf
    @method('DELETE')
    <input type="submit" value="Delete without asking">
</form>

<a href="{{ action('UserController@index') }}">Back to index</a>
 --}}
