/*********************************************************************************************************
 * Techdegree 
 * Project 7 - Gallery React App 
 * Exceeds Expectation Grade
 * Full Stack Javascript - Treehouse
 * Component - Main app container
 * Harshay 
 *********************************************************************************************************/


//constructing a url to retrieve images : https://farm{farm-id}.staticflickr.com/{server-id}/{id}_{secret}.jpg 

//redirects
//https://knowbody.github.io/react-router-docs/api/Redirect.html   
//https://scotch.io/courses/using-react-router-4/using-history

 /******************************************************************************************************** */
import React, { Component } from 'react';
import SearchForm from './components/SearchForm';
import Nav from './components/Nav';
import PhotoContainer from './components/PhotoContainer';
import NotFound from './components/NotFound';
import apiKey from './Config';
import {

  BrowserRouter,
  Route,
  Switch

} from 'react-router-dom';
import { withRouter } from "react-router";

//give searchform component access to the history object 
const SearchFormWithRouter = withRouter(SearchForm);

//https://stackoverflow.com/questions/53539314/what-is-withrouter-for-in-react-router-dom

//import { createBrowserHistory } from 'history';
//let history = createBrowserHistory();


export default class App extends Component {

  constructor() {

    super();

    this.state =  {

      photos:[],
      cats:[],
      dogs:[],
      cars:[],
      loading: true

    };

  };

  
  performSearch = (query,propname) =>  {

    fetch(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${query}&per_page=24&format=json&nojsoncallback=1`)
      .then(response => response.json())
      .then(data => this.setState({
        [propname]:data.photos.photo,loading:false}));

        

  };

  componentDidMount() {    
    
   
      this.performSearch('cats','cats');
      this.performSearch('dogs','dogs');
      this.performSearch('cars','cars');
      this.performSearch('aircraft','photos');
     

  };

  render() {

    return (
      <BrowserRouter>  
      <SearchFormWithRouter onSearch={this.performSearch}/> 
      <Nav />      
        <Switch>
            <Route exact path = '/' render={ () =>  (
              <div className="container">                      
                {
                
                  (this.state.loading)
                  ? <h3>Loading</h3>
                  : <PhotoContainer data={this.state.photos}/>                
                  
                }                                 
              </div> 
            )}/>
            <Route exact path = '/search/:query' render={ () =>  (
              <div className="container">                      
              <PhotoContainer data={this.state.photos}/>                                                          
              </div> 

            )}/>
            <Route exact path = '/cats' render={ () =>  (
              <div className="container">                      
              <PhotoContainer data={this.state.cats}/>                                                          
              </div> 

            )}/>
            <Route exact path = '/dogs' render={ () =>  (
              <div className="container">                      
              <PhotoContainer data={this.state.dogs}/>                                              
              </div> 

            )}/>
             <Route exact path = '/cars' render={ () =>  (
              <div className="container">                      
              <PhotoContainer data={this.state.cars}/>                                              
              </div> 

            )}/>
            <Route render={ () =>  (
              <div className="container">                      
              <NotFound />                                               
              </div> 
            )}/>
        </Switch>
      </BrowserRouter> 
    );
  
  };  

};
 
