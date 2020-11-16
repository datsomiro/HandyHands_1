import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {

    return (
        <footer>


            <div className="footer">
                <img src="{{ asset('img/logo.png') }}" alt="logo" className="logo" />

                <nav>
                    <Link to="/"><button className="float">About us</button></Link>
                    <Link to="/post"><button className="float">Post</button></Link>
                    <Link to="/profile"><button className="float">Profile</button></Link>
                    <Link to="/update"><button className="float">update</button></Link>
                    <Link to="/"><button className="float">Logout</button></Link>
                </nav>
            </div>

        </footer>
    )

}
