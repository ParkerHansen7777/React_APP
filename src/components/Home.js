import React from 'react';
import './Home.css';
import './linkedinPfp.jpg'


class Home extends React.Component{
render(){
    return(
    
        <body>
                <h1>Hello, my name is Parker Hansen</h1>
                <img src="linkedinPfp.jpg" alt="Picture of Parker Hansen"/>
                <br/>
                <p>I'm a software developer based in Los Angeles, California.</p>
                <button class="button1"><a href = "https://github.com/ParkerHansen7777?tab=repositories" target="_blank" rel="noreferrer">GitHub</a></button>
                <button class="button2"><a href = "https://github.com/ParkerHansen7777/React_APP" target="_blank" rel="noreferrer">React App Repo</a></button>
                <button class="button3"><a href = "https://www.linkedin.com/in/parkerhansen/" target="_blank"rel="noreferrer">LinkedIn</a></button>
                <h2 class="links">Links to my other projects:</h2>
                    <a href = "https://cardealer-frontend.onrender.com">Luxury Autos Car Dealership</a>
                    <a href = "https://taskmanager-frontend-8dip.onrender.com">Task Manager</a>
                    <a href = "https://gametracker-frontend.onrender.com">Game Tracker</a>
                    <footer className="Page-footer"><span>Created by Parker (© 2021)</span></footer>
        </body>
    
    );
 }   
}

export default Home
