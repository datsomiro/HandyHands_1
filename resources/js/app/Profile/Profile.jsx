import React, { useState, useEffect, createContext  } from 'react';

import Header from '../Header/Header.jsx';
import Footer from '../Footer/Footer.jsx';


export default function Profile() {

    const [user, setUser] = useState(null);
    const UserContext = createContext(user);

    return (
        <div>

            <main>
                <h1>Profile</h1>
            </main>

            
        </div>
    )
}