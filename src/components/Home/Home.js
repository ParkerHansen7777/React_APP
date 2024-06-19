import React from 'react';
import './Home.css';
import profile from './linkedinPfp.jpg';


class Home extends React.Component{
render(){
    return(
    
        <div class='p-body'>
                <div class='flex-item'>
                    <h1>Hello, my name is Parker Hansen</h1>
                </div>
                
                <div class='flex-item'>              
                    <img src ={profile} alt="of Parker"/>
                    <p>I'm a software developer based in Los Angeles, California. I have experience with languages and frameworks such as, C, C++, Python, JavaScript, Java, React.JS, Node.JS, SQL. 
                        I currently freelancing, training AI with a focus on software development. I've created multiple projects React with some being full stack, i've even made a minecraft mod with Java!. 
                        I love to problem solve. </p>
                </div>    
                <div class='flex-item'>    
                    <button class="button1"><a href = "https://github.com/ParkerHansen7777?tab=repositories" target="_blank" rel="noreferrer">GitHub</a></button>
                    <button class="button2"><a href = "https://github.com/ParkerHansen7777/React_APP" target="_blank" rel="noreferrer">Portfolio App Repo</a></button>
                    <button class="button3"><a href = "https://www.linkedin.com/in/parkerhansen/" target="_blank"rel="noreferrer">LinkedIn</a></button>
                
                
                
                    <h2 class="links">Links to my other projects:</h2>
                    <a href = "https://cardealer-frontend.onrender.com">Luxury Autos Car Dealership</a>
                    <a href = "https://taskmanager-frontend-8dip.onrender.com">Task Manager</a>
                    <a href = "https://gametracker-frontend.onrender.com">Game Tracker</a>
                </div>  
                
                <footer className="Page-footer"><span>Created by Parker (© 2021)</span></footer>
        </div>
    
    );
 }   
}

export default Home
