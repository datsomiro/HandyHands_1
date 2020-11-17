import React, { useState, useEffect, createContext } from 'react';

import Header from '../Header/Header.jsx';
import Footer from '../Footer/Footer.jsx';


export default function Aboutus() {

    const [user, setUser] = useState(null);
    const UserContext = createContext(user);
    
    return (
                <div>
                 
    
                    <main>
                        <h1>Lyyybout us</h1>
                    </main>
    
                    
                </div>
            )
}