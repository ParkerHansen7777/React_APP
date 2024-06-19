import React from 'react';
//import './Resume.css';
import SinglePage from "./SinglePage/SinglePage";
import resumePDF from "./ParkerHansenResume.pdf";


class Resume extends React.Component{

    render(){
    return(
    
        <div class="p-body">
            
            <h1>Welcome to my Resume</h1>
            <SinglePage pdf={resumePDF} />
            
            <footer className="Page-footer"><span>Created by Parker (© 2021)</span></footer>
        </div>
     );


    }   
}

export default Resume