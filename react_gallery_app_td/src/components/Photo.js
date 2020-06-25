
/*********************************************************************************************************
 * Techdegree 
 * Project 7 - Gallery React App 
 * Exceeds Expectation Grade
 * Full Stack Javascript - Treehouse
 * Component - Main app container
 * Harshay 
 *********************************************************************************************************/

import React from 'react';


const Photo = (props) => { 

    return(

        <li><img src={props.url} alt = ''/></li> 

    );

};

export default Photo;