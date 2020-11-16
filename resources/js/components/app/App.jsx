import React, {useState, useEffect} from 'react';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";

import  TextContent from './Post/TextContent';
import  SelectCategory from './Post/SelectCategory';
import  Image from './Post/Image';

import '../../../scss/PostComponent/postStyle.scss'


export default function App() {

    return (
        <Router>

         <div className="post-container shadow-lg p-3  bg-white">
              <Image/>
    
              <SelectCategory />
    
                <main>
                    <Switch>
        <Route exact path="/post" children= {<TextContent/> }/>
                    </Switch>
                </main>
    
                
         </div>

        </Router>
    )
}