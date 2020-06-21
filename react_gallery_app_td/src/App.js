/*********************************************************************************************************
 * Techdegree 
 * Project 7 - Gallery React App 
 * Exceeds Expectation Grade
 * Full Stack Javascript - Treehouse
 * Component - Main app container
 * Harshay 
 *********************************************************************************************************/


//constructing a url to retrieve images : https://farm{farm-id}.staticflickr.com/{server-id}/{id}_{secret}.jpg    

/*
reference code

<Route exact path = '/' render={ () =>  (
            <div className="container">
              <SearchForm onSearch={this.performSearch} /> 
              <Nav />
              <PhotoContainer data={this.state.photos}/>           
            </div> 
          )}/>

*/



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
      loading: true

    };

  };

  componentDidMount() {

    fetch(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=planets&per_page=24&format=json&nojsoncallback=1`)
      .then(response => response.json())
      .then(data => this.setState({photos:data.photos.photo}));
 
  };

  performSearch = (query) =>  {

    fetch(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${query}&per_page=24&format=json&nojsoncallback=1`)
      .then(response => response.json())
      .then(data => this.setState({
        photos:data.photos.photo,
        loading:false}));

  };

  render() {

    return (
      <BrowserRouter>
      <Switch>
          <Route exact path = '/' render={ () =>  (
            <div className="container">
              <SearchForm onSearch={this.performSearch} /> 
              <Nav />
              <div ClassName = 'hlcontain'>
              {
              
                (this.state.loading)
                ? <p3>Loading</p3>
                : <PhotoContainer data={this.state.photos}/>                
                
              }
              </div>                                      
            </div> 
          )}/>
          <Route path = '/cats' render={ () =>  (
            <div className="container">
              <SearchForm onSearch={this.performSearch('cats')} /> 
              <Nav />
              <PhotoContainer data={this.state.photos}/>
            </div> 
          )}/>
          <Route path = '/dogs' render={ () =>  (
            <div className="container">
              <SearchForm onSearch={this.performSearch('dogs')} /> 
              <Nav />
              <PhotoContainer data={this.state.photos}/>              
            </div> 
          )}/>
          <Route path = '/cars' render={ () =>  (
            <div className="container">
              <SearchForm onSearch={this.performSearch('cars')} /> 
              <Nav />
              <PhotoContainer data={this.state.photos}/>              
            </div> 
          )}/>
          <Route render={ () =>  (
            <div className="container">
              <SearchForm onSearch={this.performSearch} /> 
              <Nav />
              <NotFound />              
            </div> 
          )}/>
      </Switch>
      </BrowserRouter> 

    );
  
  };  

};
 