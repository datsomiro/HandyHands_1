<h1>Edit Profile {{ $users->name }}</h1>

@if ($errors->any())
    <div class="alert alert-danger">
        <ul>
            @foreach ($errors->all() as $error)
                <li>{{ $error }}</li>
            @endforeach
        </ul>
    </div>
@endif

<form action="{{ action('UserController@update', [$users->id]) }}" method="POST">
    @csrf

    @method('PUT')

   
    <input type="text" name="name" value="{{ $users->email }}"/>
    
    <input type="submit" value="submit">
</form>