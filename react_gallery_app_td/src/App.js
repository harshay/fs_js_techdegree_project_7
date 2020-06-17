/*********************************************************************************************************
 * Techdegree 
 * Project 7 - Gallery React App 
 * Exceeds Expectation Grade
 * Full Stack Javascript - Treehouse
 * Component - Main app container
 * Harshay 
 *********************************************************************************************************/


//constructing a url to retrieve images : https://farm{farm-id}.staticflickr.com/{server-id}/{id}_{secret}.jpg    

 /******************************************************************************************************** */
import React, { Component } from 'react';
import SearchForm from './components/SearchForm';
import Nav from './components/Nav';
import PhotoContainer from './components/PhotoContainer';
import apiKey from './components/Config';
import {

  BrowserRouter,
  Route

} from 'react-router-dom';

export default class App extends Component {

  constructor() {

    super();

    this.state =  {

      photos:[]

    };

  };

  componentDidMount() {

    fetch(``)
      .then(response => response.json())
      .then(data => this.setState({photos:data.photos.photo}));
 
  };

  performSearch = (query) =>  {

    fetch(``)
      .then(response => response.json())
      .then(data => this.setState({photos:data.photos.photo}));

  };

  render() {

    return (
      <BrowserRouter>
          <Route exact path = '/' render={ () =>  (
            <div className="container">
              <SearchForm onSearch={this.performSearch} /> 
              <Nav />
              <PhotoContainer data={this.state.photos}/>
          </div> )}/>
                  
      </BrowserRouter> 

    );
  
  };  

};
 