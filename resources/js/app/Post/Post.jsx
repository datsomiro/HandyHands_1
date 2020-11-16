import React, { useState, useEffect, createContext } from 'react';

import Header from '../Header/Header.jsx';
import Footer from '../Footer/Footer.jsx';


export default function Post() {

    const [user, setUser] = useState(null);
    const UserContext = createContext(user);

    return (
        <div>
            

            <main>
                <h1>Post</h1>
            </main>

            
        </div>
    )
}