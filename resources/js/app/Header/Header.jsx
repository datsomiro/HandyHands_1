import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function Header() {

    return (
        <header>

           
            <div className="header">
                <img src="{{ asset('img/logo.png') }}" alt="logo" className="logo" />
            
                <nav className="header_nav">
                    <Link to="/"><button className="float">About us</button></Link>
                    <Link to="/post"><button className="float">Post</button></Link>
                    <Link to="/profile"><button className="float">Profile</button></Link>
                    <Link to="/update"><button className="float">update</button></Link>
                    <Link to="/"><button className="float">Logout</button></Link>
                </nav>
            </div>

        </header>
    )

}
