
/*********************************************************************************************************
 * Techdegree 
 * Project 7 - Gallery React App 
 * Exceeds Expectation Grade
 * Full Stack Javascript - Treehouse
 * Component - Main app container
 * Harshay 
 *********************************************************************************************************/
 
import React, { Component } from 'react';
import Photo from './components/Photo.js';

//js interpolation example
//href=`http://localhost:3000/project/${i}`
//`${about_linkedin_link}`

const PhotoContainer = (props) => {

    const results = props.data; 
    let imgs = results.map( img => 

        <Photo url={`https://farm${img.farm}.staticflickr.com/${img.server}/${img.id}_${img.secret}.jpg`} /> 

    ); 

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