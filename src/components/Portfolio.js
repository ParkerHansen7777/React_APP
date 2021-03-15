import React from 'react';
import './Portfolio.css';


class Portfolio extends React.Component{
render(){
    return(
    
    <div class = "head1">
                <h1>Welcome to my Portfolio</h1>
                <button class="button1"><a href = "https://github.com/ParkerHansen7777/Portfolio" target="_blank">GitHub Portfolio</a></button>
                <button class="button2"><a href = "https://github.com/ParkerHansen7777/React_APP" target="_blank">React App Repo</a></button>
                <button class="button3"><a href = "https://www.linkedin.com/in/parkerhansen/" target="_blank">LinkedIn</a></button>
    </div>
    
     );


    }   
}

export default Portfolio