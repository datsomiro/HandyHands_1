import React, { useState, useEffect, createContext } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

export default function Welcome() {

    
    return ( 

            <div className="welcome">
                <div className="welcome_button">
                    <a href=""><button className="welcome_button-login">Login</button></a>
                    <a href=""><button className="welcome_button-register" >Register</button></a>
                </div>
                <div className="total">
                    <h1>NEIGHBORHOOD</h1>
                    <h2>mutual support</h2>
                    <p>That means for you?<br/>
                    Come and join us</p>
                </div>
            </div>
    )
}