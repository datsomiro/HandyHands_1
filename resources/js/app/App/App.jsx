import React, { useState, useEffect, createContext } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from '../Header/Header.jsx';
import Footer from '../Footer/Footer.jsx';
import Update from '../Update/Update.jsx';
import Profile from '../Profile/Profile.jsx';
import Aboutus from '../Aboutus/Aboutus.jsx';
import Welcome from '../Welcome/Welcome.jsx';
import Logout from '../Logout/Logout.jsx';
import Post_helped from '../Post_helped/Post_helped.jsx';
import Post_help from '../Post_help/Post_help.jsx'; 
import AllPosts from '../AllPosts/AllPosts.jsx';
import Messages from '../Messages/Messages.jsx';



export default function App() {

    const [user, setUser] = useState(null);

       
    return (
        <Router>
            <Header />
                <div className="main">
                    <img className="background" src="/img/hands.jpg"  alt="hands"/>
                    <main>                   
                        <Switch>                           
                            <Route exact path="/aboutus" children={<Aboutus />} />
                            <Route path="/welcome" children={<Welcome />} />                       
                            <Route path="/profile" children={<Profile />} />
                            <Route path="/update" children={<Update />} /> 
                            <Route path="/logout" children={<Logout />} />
                            <Route path="/post_helped" children={<Post_helped />} />
                            <Route path="/post_help" children={<Post_help />} />
                            <Route path="/AllPosts" children={<AllPosts />} />
                            <Route exact path="/messages" children={<Messages />} />
                        </Switch>
                    </main>
                </div>
           <Footer /> 
        </Router>
    )
}