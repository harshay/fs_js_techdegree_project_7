/*********************************************************************************************************
 * Techdegree 
 * Project 7 - Gallery React App 
 * Exceeds Expectation Grade
 * Full Stack Javascript - Treehouse
 * Component - Main app container
 * Harshay 
 *********************************************************************************************************/

import React, { Component } from 'react';
import SearchForm from './components/SearchForm';
import Nav from './components/Nav';
import PhotoContainer from './components/PhotoContainer';
import apiKey from './components/Config.js';


export default class App extends Component {

  constructor() {

    super();

    this.state =  {

      imgs:[]

    };

  };

  componentDidMount() {

    fetch('http://flickr.photos.search?api_key=38ea721d9a8db6672afb43c9e1e1be58&text=dogs')
      .then(response => response.text())
      .then(data => console.log(data.results));

  };

  render() {

    return (
    
      <div className="container">
        <SearchForm /> 
        <Nav />
        <PhotoContainer />
      </div>

    );
  
  };

  

};
 