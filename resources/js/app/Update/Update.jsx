import React, { useState, useEffect, createContext } from 'react';




export default function Update() {
    const [values, setValues] = useState({
        firstname: '',
        laststname: '',
        email: '',
        profile_photo_path: '',
        handy_points: '',
    });

    const [errors, setErrors] = useState({});

    

    const handleChange = (event) => {
        const allowed_names = ['firstname', 'laststname', 'email', 'profile_photo_path', 'handy_points'],
            name = event.target.name,
            value = event.target.value

        if (-1 !== allowed_names.indexOf(name)) {
            setValues(prev_values => {
                return (
                    {
                        ...prev_values,
                        [name]: value
                    }
                );
            });
        }
    }
            const handleSubmit = async (event) => {
                event.preventDefault();
                const response = await fetch('/update', {
                    method: 'post',
                    body: JSON.stringify(values),
                    headers: {
                        'Accept': 'application/json',
                        'Content-type': 'application/json',
                        'X-CSRF-TOKEN': document.querySelector('meta[name="csrf-token"]').getAttribute('content')
                    }
                })
                const response_data = await response.json();

                if (response_data.errors) {
                    setErrors(response_data.errors);
                }
                console.log(response_data);
            }
    // useEffect(() => {
    //     fetchUser();
    // }, []);

    // const fetchUser = async () => {
    //     try {
    //         const response = await fetch(
    //             'auth:api'
    //         );
    //         console.log(response);
    //         const { email } = await response.json();
    //     } catch (error) { }
    // };

    // const { handleSubmit, errors, setValue } = useForm();

    
    // const { email } = await response.json();
    
    // setValue('email', email);
    

    
    return (

       
      <form action="/update" className="update-form" method="post" onSubmit={handleSubmit}>
          
          <div className="form-group">
              <label htmlFor="firstname">First Name</label>
              <input type="text" name="firstname" value={values.firstname} onChange={handleChange} />

                {/* {
                    errors.firstname !== undefined ? (
                        <div className="field-errors">
                            {
                                errors.name.map(error => (
                                    <div className="field-errors__error">{error}</div>
                                ))
                            }
                        </div>
                    ) : ''
                } */}

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



    )
}