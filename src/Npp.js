import React from 'react';
//import NavBar from './components/NavBar/NavBar';
import './Npp.css';
import profile from './components/Home/linkedinPfp.jpg';
import tmPic from './pictures/task-manager.png'
import laPic from './pictures/luxury-autos.png'
import ctPic from './pictures/chess-tracker.png'
export default function Npp(){

    return(
        <>
            <section>
                <h1>Hello, my name is Parker Hansen....</h1>
                <span>Scroll down</span>
                <span>\/</span>
            </section>
            
            <section>
                <div className='container-row'>
                    <img src={profile} style={{height: '400px', width: "400px", padding: "10px"}}/>
                    <div >
                        <h1>About me</h1>
                        <p>this is all about me</p>
                    </div>
                </div>
            </section>
            
            <section>
                <h1>Projects i've worked on</h1>
                <div className='container-row'>
                    <div className='item'>
                        <h2>Chess Game Tracker</h2>
                        <img src={ctPic} alt="Chess Game Tracker"/>
                        
                        <a href='https://gametracker-frontend.onrender.com/' style={{display: 'block'}}>Deployed HERE *CLICK ME*</a>
                        
                    </div>
                    <div className='item'>
                        <h2>Task Manager</h2>
                        <img src={tmPic} alt="Task Manager"/>
                        <a href='https://taskmanager-frontend-8dip.onrender.com/' style={{display: 'block'}}>Deployed HERE *CLICK ME*</a>
                        
                    </div>
                    <div className='item'>
                        <h2>Car Dealership Catalog</h2>
                        <img src={laPic} alt="Car Dealership Catalog"/>
                        <a href='https://cardealer-frontend.onrender.com/' style={{display: 'block'}}>Deployed HERE *CLICK ME*</a>
                        
                    </div>
                    <div className='item'>
                        <h2>Minecraft: Pizza Mod</h2>
                        <img alt="Minecraft: Pizza Mod"/>
                    </div>
                </div>
                <a href = "https://github.com/ParkerHansen7777?tab=repositories" target="_blank" rel="noreferrer">Github</a>
                <a href = "https://www.linkedin.com/in/parkerhansen/" target="_blank"rel="noreferrer">LinkedIn</a>
                <a href = "https://github.com/ParkerHansen7777/React_APP" target="_blank" rel="noreferrer">Portfolio Repository</a>
            </section> 
        </>
    )
}