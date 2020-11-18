import React, { useState, useEffect, createContext } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Link } from 'react-router-dom';


export default function Aboutus() {

    const [user, setUser] = useState(null);
    const UserContext = createContext(user);

    return (
        <div className="create_button">
            <Link to="/post_help"><button className="create_button-help">I want to help</button></Link>
            <Link to="/post_helped"><button className="create_button-helped">I need help</button></Link>
        </div>
    )

}