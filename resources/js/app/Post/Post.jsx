import React, { useState, useEffect, createContext } from 'react';

import Header from '../Header/Header.jsx';
import Footer from '../Footer/Footer.jsx';


export default function Post() {

    const [user, setUser] = useState(null);
    const UserContext = createContext(user);

    return (
        <div>
            

            <h1>hello</h1>

            
        </div>
    )
}