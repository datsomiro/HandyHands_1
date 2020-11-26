import React, { useState, useEffect, createContext } from 'react';
import UploadPic from '../UploadPic/UploadPic.jsx';

export default function Update() {
    const [values, setValues] = useState({
        firstname: '',
        lastname: '',
        email: '',
        profile_photo_path: '',
        
    });

    const [errors, setErrors] = useState({});

    const handleChange = (event) => {
        const allowed_names = ['firstname', 'lastname', 'email', 'profile_photo_path'],
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
        const response = await fetch('/api/update', {
            method: 'post',
            body: JSON.stringify(values),
            headers: {
                'Accept': 'application/json',
                'Content-type': 'application/json',
                'X-CSRF-TOKEN': document.querySelector('meta[name="csrf-token"]').
                getAttribute('content')
            }
        })
        const response_data = await response.json()
        if (response_data.errors) {
            setErrors(response_data.errors);
        }
        console.log(response_data);
    }
    useEffect(() => {
        fetchUser();
    }, [])
    const fetchUser = async () => {
        try {
            const response = await fetch(
                '/user'
            );
            const user = await response.json();
            setValues({
                firstname: user.firstname,
                lastname: user.lastname,
                email: user.email,
                profile_photo_path: user.profile_photo_path,
        
            })
            console.log(u);
        } catch (error) { }
    }
    
    return (
 
      <form action="/update" className="update-form" method="post" onSubmit={handleSubmit}>
          
          <div className="updateName">
              <label htmlFor="firstname">First Name</label>
              <input type="text" name="firstname" value={values.firstname} onChange={handleChange} />
              <label htmlFor="lastname">Last Name</label>
              <input type="text" name="lastname" value={values.lastname} onChange={handleChange} />
          </div>

          <div className="updateDetails">
              <label htmlFor="email">Email</label>
              <input type="email" name="email" value={values.email} onChange={handleChange} />
              <label htmlFor="password">Password</label>
              <input type="password" name="password" value={values.password} onChange={handleChange} />
          </div > 

          <div className="profile_photo_path">
          <UploadPic />
          </div>

          <div className="form-group">
              <button>Update</button>
          </div>
      </form>



    )
}