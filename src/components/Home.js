import React from 'react';
import './Home.css';


class Home extends React.Component{
render(){
    return(
    
        <body>
                <h1>Hello, my name is Parker Hansen</h1>
                <br/>
                <p>I'm a software developer based in Los Angeles, California.</p>
                <button class="button1"><a href = "https://github.com/ParkerHansen7777?tab=repositories" target="_blank" rel="noreferrer">GitHub</a></button>
                <button class="button2"><a href = "https://github.com/ParkerHansen7777/React_APP" target="_blank" rel="noreferrer">React App Repo</a></button>
                <button class="button3"><a href = "https://www.linkedin.com/in/parkerhansen/" target="_blank"rel="noreferrer">LinkedIn</a></button>
                <h2 class="links">Links to my other projects:</h2>
                <ul>
                    <li>Luxury Autos Car Dealership</li>
                    <li>Task Manager</li>
                    <li>Game Tracker</li>
                </ul>
        </body>
    
    );
 }   
}

export default Home
