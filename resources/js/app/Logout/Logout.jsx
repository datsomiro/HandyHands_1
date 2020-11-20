import React, { useState, useEffect } from 'react';
import ApiClient from '../ApiClient';
import {Redirect} from "react-router-dom";


export default function Logout() {

    const handleSubmit = async (event) => {

        event.preventDefault();
        const response = await ApiClient.post('/logout');
      
            return <Redirect to = "/" />
        


    }

    return (
        <a href="/" onClick={handleSubmit}>Logout</a>
    )

}