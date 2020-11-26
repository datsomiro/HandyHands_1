import React, { useState, useEffect } from 'react';
import ApiClient from '../ApiClient';
import { useHistory} from "react-router-dom";


export default function Logout() {
    const history = useHistory();

    const handleSubmit = async (event) => {

        event.preventDefault();
        const response = await ApiClient.post('/logout');
      
        //history.push('/');  
        window.location.href = "/";
      


    }

    return (
        <a className="logout" href="/" onClick={handleSubmit}><button className="float">logout</button></a>
    )

}