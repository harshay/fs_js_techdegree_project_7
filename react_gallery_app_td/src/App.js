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
import NotFound from './components/NotFound';
import apiKey from './components/Config';
import {

  BrowserRouter,
  Route,
  Switch

} from 'react-router-dom';

export default class App extends Component {

  constructor() {

    super();

    this.state =  {

      photos:[],
      loading: true,

    };

  };

  
  performSearch = (query) =>  {

    fetch(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${query}&per_page=24&format=json&nojsoncallback=1`)
      .then(response => response.json())
      .then(data => this.setState({
        photos:data.photos.photo,loading:false}));

  };

  componentDidMount() {

    this.performSearch('planets');
 
  };


  render() {

    return (
      <BrowserRouter>
      <Switch>
          <SearchForm onSearch={this.performSearch()} /> 
          <Nav />
          <Route exact path = '/' render={ () =>  (
            <div className="container">              
              
              {
              
                (this.state.loading)
                ? <h3>Loading</h3>
                : <PhotoContainer data={this.state.photos}/>                
                
              }                                 
            </div> 
          )}/>
          
      </Switch>
      </BrowserRouter> 
    );
  
  };  

};
 