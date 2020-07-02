
/*********************************************************************************************************
 * Techdegree 
 * Project 7 - Gallery React App 
 * Exceeds Expectation Grade
 * Full Stack Javascript - Treehouse
 * Component - Main app container
 * Harshay 
 *********************************************************************************************************/
 
import React from 'react';
import Photo from './Photo';
import NoImages from './NoImages'; 


import { createBrowserHistory } from 'history';

let history = createBrowserHistory();

const PhotoContainer = (props) => {
    

    const results = props.data; 
    let imgs;


    if (results.length > 0) {

        imgs = results.map(img => <Photo key={img.id} url={`https://farm${img.farm}.staticflickr.com/${img.server}/${img.id}_${img.secret}.jpg`} />);
        history.push('/');
       

    } else { 

        imgs = <NoImages />
        history.push('/');
        

    };

    return (

        <div className="photo-container">
            <h2>Results</h2>
            <ul>
                {imgs}             
                {/*inject page not found li tag here*/}  
            </ul>
        </div>    

    );

};



export default PhotoContainer; 