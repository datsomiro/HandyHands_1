import React, { useState, useEffect, createContext } from 'react';
import UploadPic from '../UploadPic/UploadPic.jsx';

export default function Post_helped() {
    const [values, setValues] = useState({
        location: '',
        user_id: '',
        cost: '',
        description: '',
        uploaded_photo_path: '',
        volunteer: '',
        time:'',

    });

    const [errors, setErrors] = useState({});

    const handleChange = (event) => {
        const allowed_names = [
            'location',
            'cost',
            'description',
            'uploaded_photo_path',
            'volunteer',
            'service_categories',
            'time'],
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
        const response = await fetch('/api/post_helped', {
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
        
    }

    return (
        <div className="Post_helped-box">

            <form action="/helped" className="Post_helped" method="post" onSubmit={handleSubmit}>                
                        <div className="help_label">
                            <label htmlFor="object"></label>
                            <select id="service_categories" name="service_categories" onChange={handleChange} value={values.service_categories} >
                                <option value="food">Food</option>
                                <option value="handyman">Handy Man</option>
                                <option value="drive">A drive</option>
                                <option value="Shopping">Shopping</option>
                                <option value="other">Other</option>
                            </select>
                            <label htmlFor="when"></label>
                            <input type="text" id="time" name="time"
                                onChange={handleChange} placeholder="When?" value={values.time} />
                            <label htmlFor="location"></label>
                            <select id="location" name="location" onChange={handleChange} value={values.location}>
                                <option name="location">Prague1</option>
                                <option name="location">Prague2</option>
                                <option name="location">Prague3</option>
                                <option name="location">Prague4</option>
                                <option name="location">Prague5</option>
                                <option name="location">Prague6</option>
                                <option name="location">Prague7</option>
                                <option name="location">Prague8</option>
                                <option name="location">Prague9</option>
                                <option name="location">Prague10</option>
                                <option name="location">Unetice</option>
                                <option name="location">Suchdol</option>
                                <option name="location">Roztoky</option>
                                <option name="location">Troja</option>
                                <option name="location">Radotin</option>
                                <option name="location">Dolni Chriby</option>
                            </select>   
                            <label htmlFor="cost"></label>
                            <input type="text" id="cost" placeholder="what in exchange" name="cost" onChange={handleChange} value={values.cost} /><br />
                            <input type="hidden" id="volunteer" name="volunteer" onChange={handleChange} value="0"></input>
                        </div>              
                        <div className="textaera">
                            <textarea id="textarea" cols="40" rows="5" name="description" onChange={handleChange} value={values.description} >
                            </textarea>
                        </div>                   
                        <UploadPic />                   
                        <button className="submit" type="submit" value="submit" onChange={handleChange}>SUBMIT</button>
                    
               
            </form>
        </div>
    )
}