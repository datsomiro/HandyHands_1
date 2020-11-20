<form action="/update" className="update-form" method="post" onSubmit={handleSubmit}>
          
          <div className="form-group">
              <label htmlFor="firstname">First Name</label>
              <input type="text" name="firstname" value={values.firstname} onChange={handleChange} />



          </div>
          <div className="form-group">
              <label htmlFor="lastname">Last Name</label>
              <input type="text" name="lastname" value={values.lastname} onChange={handleChange} />
          </div>
          <div className="form-group">
              <label htmlFor="name">Email</label>

              <input type="email" name="email" value={values.email} onChange={handleChange} />
          </div>

          <div className="form-group">
              <label htmlFor="password">Password</label>

              <input type="password" name="password" value={values.password} onChange={handleChange} />
          </div>

          <div className="profile_photo_path">
              <label htmlFor="profile_photo_path">Photo</label>

              <input type="profile_photo_path" name="profile_photo_path" value={values.profile_photo_path} onChange={handleChange} />
          </div>
          <div className="profile_photo_path">
              <label htmlFor="profile_photo_path">Photo</label>

              <input type="profile_photo_path" name="profile_photo_path" value={values.profile_photo_path} onChange={handleChange} />
          </div>
          <div className="form-group">
              <button>Update</button>
          </div>
      </form>



{{-- <a href="{{ action('UserController@edit', [$users->id]) }}">Update</a> --}}

{{-- <a href="{{ action('UserController@delete', [$users->id]) }}">Delete</a> --}}

{{-- <form action="{{ action('UserController@destroy', [$users->id]) }}" method="POST">
    @csrf
    @method('DELETE')
    <input type="submit" value="Delete without asking">
</form>
<a href="{{ action('UserController@index') }}">Back to index</a>
 --}}