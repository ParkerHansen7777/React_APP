import React from 'react';
import './Portfolio.css';


class Portfolio extends React.Component{
render(){
    return(
    
    <body>
                <h1>Welcome to my Portfolio</h1>
                <button class="button1"><a href = "https://github.com/ParkerHansen7777?tab=repositories" target="_blank" rel="noreferrer">GitHub</a></button>
                <button class="button2"><a href = "https://github.com/ParkerHansen7777/React_APP" target="_blank" rel="noreferrer">React App Repo</a></button>
                <button class="button3"><a href = "https://www.linkedin.com/in/parkerhansen/" target="_blank"rel="noreferrer">LinkedIn</a></button>
                <footer className="Page-footer"><span>Created by Parker (© 2021)</span></footer>
    </body>
    
     );


    }   
}

export default Portfolio