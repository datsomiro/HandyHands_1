import React, { useState, useEffect, createContext } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from '../Header/Header.jsx';
import Footer from '../Footer/Footer.jsx';
import Post from '../Post/Post.jsx';
import Update from '../Update/Update.jsx';
import Profile from '../Profile/Profile.jsx';
import Aboutus from '../Aboutus/Aboutus.jsx';
import Welcome from '../Welcome/Welcome.jsx';
import ApiClient from '../ApiClient.js';



export default function App() {

    const [user, setUser] = useState(null);
    
    return (
        <Router>
            <Header />
                <div className="main">
                    <img src="/img/hands.jpg"  alt="hands"/>
                    <main>                   
                        <Switch>                           
                            <Route exact path="/" children={<Aboutus />} />
                            <Route path="/welcome" children={<Welcome />} />                       
                            <Route path="/post" children={<Post />} />
                            <Route path="/profile" children={<Profile />} />
                            <Route path="/update" children={<Update />} />   
                        </Switch>
                    </main>
                </div>
           <Footer /> 
        </Router>
    )
}