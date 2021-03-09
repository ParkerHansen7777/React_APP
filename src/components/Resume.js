import React from 'react';
import './Resume.css';
import SinglePage from "./SinglePage.js";
import samplePDF from "./ParkerHansenResume.pdf";


class Resume extends React.Component{

    render(){
    return(
    
    <div class="head2">
            
                <h1>Welcome to my Resume</h1>
                <SinglePage pdf={samplePDF} />

                <hr />
            
            
        </div>
     );


    }   
}

export default Resume