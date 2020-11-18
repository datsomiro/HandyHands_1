import React, { useState, useEffect, createContext } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

export default function Welcome() {

    const [user, setUser] = useState(null);
    const UserContext = createContext(user);

    return ( 


        <div className="total">
            <div className="scene">
                <div className="carousel">
                    <div className="carousel__cell" id="one"></div>
                    <div className="carousel__cell" id="two"></div>
                    <div className="carousel__cell" id="three"></div>
                    <div className="carousel__cell" id="four"></div>
                    <div className="carousel__cell" id="five"></div>
                    <div className="carousel__cell" id="six"></div>
                    <div className="carousel__cell"id="seven"></div>
                    <div className="carousel__cell"id="eight"></div>
                    <div className="carousel__cell"id ="nine"></div>
                </div>
            
                    <button className="previous-button">Previous</button>
                    <button className="next-button">Next</button>
                </div>
        </div>
    )
}