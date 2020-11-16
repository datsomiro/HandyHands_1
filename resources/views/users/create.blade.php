<h1>New User</h1>

@if ($errors->any())
    <div class="alert alert-danger">
        <ul>
            @foreach ($errors->all() as $error)
                <li>{{ $error }}</li>
            @endforeach
        </ul>
    </div>
@endif

<form action="{{ action('UserController@store') }}" method="POST">
    @csrf
    <label for="first_name">First Name</label>
    <input type="text" name="first_name" id="first_name"/>
    <br/>
    <label for="last_name">Last Name</label>
    <input type="text" name="last_name" id="last_name"/>
    <br/>
    <label for="email">Email</label>
    <input type="text" name="email" id="email"/>
    <br/>
    <label for="phone_number">Phone Number</label>
    <input type="text" name="phone_number" id="phone_number"/>
    <br/>
    <input type="submit" value="submit">
</form>