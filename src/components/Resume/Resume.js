import React from 'react';
import SinglePage from "./SinglePage/SinglePage";
import resumePDF from "./ParkerHansenResume.pdf";


export default function Resume(){

    
    return(
       <section className="resume-section">
            <div className="resume-card">
                <h1 className="resume-title">My Resume</h1>
                <SinglePage pdf={resumePDF} />
            </div>
        </section>
     );


    
}
