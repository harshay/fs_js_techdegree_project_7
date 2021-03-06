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

  Route,
  Switch

} from 'react-router-dom';
import { withRouter } from "react-router";

//give searchform component access to the history object 
const SearchFormWithRouter = withRouter(SearchForm);

//https://stackoverflow.com/questions/53539314/what-is-withrouter-for-in-react-router-dom

//import { createBrowserHistory } from 'history';
//let history = createBrowserHistory();

class App extends Component {

  constructor() {

    super();

    this.state =  {

      photos:[],
      cats:[],
      loading: true

    };

  };
  
  performSearch = (query,propname) =>  {

    fetch(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${query}&per_page=24&format=json&nojsoncallback=1`)
      .then(response => response.json())
      .then(data => this.setState({
        [propname]:data.photos.photo,loading:false}))
      .then(this.setState({loading:true}));
        

  };

  componentDidMount() {    
    
   
      this.performSearch('aircraft','photos');      

  };
  
  componentDidUpdate(prevProps, prevState) {
        
      if ((this.props.location.pathname !== prevProps.location.pathname)) { 

        if  ((this.props.location.pathname).includes('/cats') === true ||
             (this.props.location.pathname).includes('/dogs') === true ||
             (this.props.location.pathname).includes('/cars') === true) {
              
              this.performSearch((this.props.location.pathname).slice(1),'photos');

        } else if ((this.props.location.pathname).includes('/search')) {

              let search_chk = (this.props.location.pathname).substring(1,7);
              let search_chk_len = search_chk.length + 2;        

              this.performSearch((this.props.location.pathname).slice(search_chk_len),'photos');          

        } else {

              this.performSearch('aircraft','photos');

        };        

      };
        
    };    
   
  render() {

    return (      

      <>
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
              {
                
                (this.state.loading)
                ? <h3>Loading</h3>            
                :<PhotoContainer  data={this.state.photos}/>    
              }                                                       
              </div> 
            )}/>
            <Route exact path = '/cats' render={ () =>  (
              <div className="container"> 
              {
                
                (this.state.loading)
                ? <h3>Loading</h3>            
                :<PhotoContainer data={this.state.photos}/>  
              }                                                        
              </div> 
            )}/> 
            <Route exact path = '/dogs' render={ () =>  (
              <div className="container">      
              {                
                (this.state.loading)
                ? <h3>Loading</h3>                              
              :<PhotoContainer data={this.state.photos}/>
              }                                              
              </div> 
            )}/>
             <Route exact path = '/cars' render={ () =>  (
              <div className="container">                
              {
                (this.state.loading)
                ? <h3>Loading</h3>                    
              :<PhotoContainer data={this.state.photos}/>
              }                                              
              </div> 
            )}/>
            <Route render={ () =>  (
              <div className="container">                      
              <NotFound />                                               
              </div> 
            )}/>
        </Switch>
        </>
    );
  
  };  

};

//Lastly, export App through withRouter at bottom of App.js
export default withRouter(App);