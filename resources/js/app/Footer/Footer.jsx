import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {

    return (
        <footer>


            <div className="footer">               
                <nav>
                    <Link to="/post_helped"><button className="float">Need help</button></Link>
                    <Link to="/post_help"><button className="float">Can help</button></Link>
                    <Link to="/"><button className="float">About us</button></Link>
                    <Link to="/post"><button className="float">Post</button></Link>
                    <Link to="/profile"><button className="float">Profile</button></Link>
                    <Link to="/update"><button className="float">update</button></Link>
                    <Link to="/"><button className="logout">Logout</button></Link>
                </nav>
                <img src="/img/logo.png" alt="logo" className="logo" />
            </div>

        </footer>
    )

}
