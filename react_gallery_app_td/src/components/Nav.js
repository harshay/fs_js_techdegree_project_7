/*********************************************************************************************************
 * Techdegree 
 * Project 7 - Gallery React App 
 * Exceeds Expectation Grade
 * Full Stack Javascript - Treehouse
 * Component - Main app container
 * Harshay 
 *********************************************************************************************************/

import React from 'react'; 
import {

    BrowserRouter,
    Route,
    NavLink
  
  } from 'react-router-dom';
import apiKey from './Config';

const Nav = () => {

    return (

        <nav className="main-nav">
            <ul>
                <li><NavLink to ='#'>Cats</NavLink></li>
                <li><NavLink to ='#'>Dogs</NavLink></li>
                <li><NavLink to ='#'>Computers</NavLink></li>
            </ul>
        </nav>
    );

};



export default Nav; 

