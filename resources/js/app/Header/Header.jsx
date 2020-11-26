import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Logout from '../Logout/Logout.jsx';

export default function Header() {

    

    return (

        <header>
           
            <div className="header">
                <img src="/img/logo.png" alt="logo" className="logo" />
            
                <nav className="header_nav">
                    <Link to="/post_helped"><button className="float">Need help</button></Link>
                    <Link to="/post_help"><button className="float">Can help</button></Link>
                    <Link to="/aboutus"><button className="float">About us</button></Link>
                    <Link to="/allposts"><button className="float">Posts</button></Link>
                    <Link to="/profile"><button className="float">Profile</button></Link>
                    <Link to="/update"><button className="float">Update</button></Link>
                    <Link to="/messages"><button className="float">Messages</button></Link>
                    <Logout  className="logout"/>

                </nav>
            </div>

        </header>
    )

}
