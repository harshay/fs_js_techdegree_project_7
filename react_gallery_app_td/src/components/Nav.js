/*********************************************************************************************************
 * Techdegree 
 * Project 7 - Gallery React App 
 * Exceeds Expectation Grade
 * Full Stack Javascript - Treehouse
 * Component - Main app container
 * Harshay 
 *********************************************************************************************************/

import React, { Component } from 'react';
import {

    BrowserRouter,
    Route,
    NavLink
  
  } from 'react-router-dom';

import apiKey from './Config';

export default class Nav extends Component {

    render() {

        return (

            <nav className="main-nav">
                <ul>
                    <li><NavLink to = '/cats'>Cats</NavLink></li>
                    <li><NavLink to ='/dogs'>Dogs</NavLink></li>
                    <li><NavLink to ='/cars'>Cars</NavLink></li>
                </ul>
            </nav>
        );


    };

};

