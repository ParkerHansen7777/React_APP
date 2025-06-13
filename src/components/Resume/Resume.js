import React from 'react';
//import './Resume.css';
import SinglePage from "./SinglePage/singlePage";
import resumePDF from "./ParkerHansenResume.pdf";


export default function Resume(){

    
    return(
    
        <section>
                <h1>My Resume</h1>
                <SinglePage pdf={resumePDF}/>
            </section>
     );


    
}
