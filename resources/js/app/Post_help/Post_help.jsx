import { post } from 'jquery';
import React, { useState, useEffect, createContext } from 'react';

export default function Post_help() {
    const [values, setValues] = useState({
        location: '',
        user_id: '',
        description: '',
        created_at :'',
        uploaded_photo_path: '',
        volunteer :'',

    });

    const [errors, setErrors] = useState({});

    const handleChange = (event) => {
        const allowed_names = ['location',
            'user_id',
            'description',
            'created_at',
            'uploaded_photo_path',
            'volunteer'],
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
                '/post'
            );
            const user = await response.json();
            setValues({
                location: post.location,
                user_id: post.user_id,
                description: post.description,
                created_at: post.created_at,
                uploaded_photo_path: post.uploaded_photo_path,
                volunteer: post.volunteer,
            })
            console.log(u);
        } catch (error) { }
    }


    return (
        <div className="Post_help-box">

            <form action="/helped" className="Post_helped" method="post" onSubmit={handleSubmit}>

                <div className="left">
                    <div className="label">
                        <label htmlFor="object"></label>
                        <select id="object" name="object">
                            <option value="food">Food</option>
                            <option value="handyman">Handy Man</option>
                            <option value="drive">A drive</option>
                            <option value="Shopping">Shopping</option>
                            <option value="other">Other</option>
                        </select>
                        <label htmlFor="when"></label>
                        <input type="text" id="when" name="when"
                            onChange={handleChange} placeholder="When?" />

                        <label htmlFor="location"></label>
                        <select id="location" name="location">
                            <option value="">Prague1</option>
                            <option value="">Prague2</option>
                            <option value="">Prague3</option>
                            <option value="">Prague4</option>
                            <option value="">Prague5</option>
                            <option value="">Prague6</option>
                            <option value="">Prague7</option>
                            <option value="">Prague8</option>
                            <option value="">Prague9</option>
                            <option value="">Prague10</option>
                            <option value="">Unetice</option>
                            <option value="">Suchdol</option>
                            <option value="">Roztoky</option>
                            <option value="">Troja</option>
                            <option value="">Radotin</option>
                            <option value="">Dolni Chriby</option>
                        </select>

                        <label htmlFor="gback"></label>
                        <input type="text" id="gback" name="gback" onChange={handleChange} placeholder="What you can give back?" />
                    </div>
                </div>

                <div className="profile_photo_path">
                    <div className="text">
                        <textarea id="textarea" name="Text1" cols="40" rows="5" name="Something to add.."  >
                        </textarea>
                    </div>
                    <div className="bottom">
                        <label htmlFor="profile_photo_path"></label>
                        <input type="profile_photo_path" name="profile_photo_path" placeholder="Any pic" onChange={handleChange} />
                        <button className="submit" type="submit" value="submit" onChange={handleChange}>SUBMIT</button>
                    </div>
                </div>
            </form>
        </div>   
    )

}