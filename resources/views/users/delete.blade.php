<h1>Delete Profile {{ $users->name }}</h1>

<a href="{{ action('UserController@index') }}">Back to index</a>
<form action="{{ action('UserController@destroy', [$users->id]) }}" method="POST">
    @csrf
    @method('DELETE')
    <input type="submit" value="Delete">
</form>


