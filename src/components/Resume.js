import React from 'react';
import './Resume.css';
import SinglePage from "./SinglePage.js";
import resumePDF from "./ParkerHansenResume.pdf";


class Resume extends React.Component{

    render(){
    return(
    
        <body>
            
            <h1>Welcome to my Resume</h1>
            <SinglePage pdf={resumePDF} />
            
        </body>
     );


    }   
}

export default Resume