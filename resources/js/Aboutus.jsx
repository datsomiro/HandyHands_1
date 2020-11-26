import React, { useState, useEffect, createContext } from 'react';

import Header from '../Header/Header.jsx';
import Footer from '../Footer/Footer.jsx';
import Creatapost from '../Creatapost/Creatapost.jsx';


export default function Aboutus() {

    const [user, setUser] = useState(null);
    const UserContext = createContext(user);
    
    return (
                                 
                    <main className="aboutUs-main">
                        <h1>HandyHands</h1>
                        <div className="text">"If you are feeling helpless, help someone else. If you are feeling alone, don’t ignore another person’s loneliness. If you are afraid, be brave for someone else. Things feel more doable if they are not about you.<br/>
                        fearlessness isn’t the absence of fear, but rather the mastery of it.<br/>
                        HandyHands is here to help you connect people who feel ready to help or to get helped."
                        <Creatapost /> 
                        If you believe in these difficult times of <strong>covid pandemy</strong> that it it relevant to help people and particularly your neighbours, the people of your quarter, village, come and <strong>join us</strong> to improve mutual support.</div>
                    </main>               
            )
}