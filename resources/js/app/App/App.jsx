import React, { useState, useEffect, createContext } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Header from '../Header/Header.jsx';
import Footer from '../Footer/Footer.jsx';
import Post from '../Post/Post.jsx';
import Update from '../Update/Update.jsx';
import Profile from '../Profile/Profile.jsx';
import Aboutus from '../Aboutus/Aboutus.jsx';
//import Login from '../Login/Login.jsx';
//import Logout from '../Logout/Logout.jsx';


export default function App() {

    const [user, setUser] = useState(null);
    const UserContext = createContext(user);
    return (
//       <UserContext.Provider value={user}>
            <Router>

                <Header />



                <main>

                    <h1>Hello</h1>
                    <Switch>
                       
                        
                        <Route exact path="/" children={<Aboutus />} />
                        {/* <Route path="/login" children={<Login />} /> */}
                        <Route path="/post" children={<Post />} />
                        <Route path="/profile" children={<Profile />} />
                        <Route path="/update" children={<Update />} />
                        {/* <Route path="/" children={<Logout />} />  */}
                    </Switch>
                </main>

                <Footer />

            </Router>
 //       </UserContext.Provider>
    )
}