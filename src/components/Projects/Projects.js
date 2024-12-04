import React from 'react'
import tmPic from '../../pictures/task-manager.png'
import laPic from '../../pictures/luxury-autos.png'
import ctPic from '../../pictures/chess-tracker.png'
import mPPic from '../../pictures/minecraft-pizza.png'
import wCPic from '../../pictures/wordle-clone.png'
export default function Projects(){
    return(
        <section style={{justifyContent: "space-around"}}>
            <h1>Projects i've worked on</h1>
            <div className='container-row'>
                <div className='item'>
                    <h2>Wordle Clone</h2>
                    <img src={wCPic}alt="Wordle Clone"/>
                </div>
                <div className='item'>
                    <h2>Car Dealership Catalog</h2>
                    <img src={laPic} alt="Car Dealership Catalog"/>
                    <a className='link' href='https://cardealer-frontend.onrender.com/' style={{display: 'block'}}>Deployed HERE *CLICK ME*</a>
                    
                </div>
                <div className='item'>
                    <h2>Chess Game Tracker</h2>
                    <img src={ctPic} alt="Chess Game Tracker"/>
                    
                    <a className='link' href='https://gametracker-frontend.onrender.com/' style={{display: 'block'}}>Deployed HERE *CLICK ME*</a>
                    
                </div>
                <div className='item'>
                    <h2>Task Manager</h2>
                    <img src={tmPic} alt="Task Manager"/>
                    <a className='link' href='https://taskmanager-frontend-8dip.onrender.com/' style={{display: 'block'}}>Deployed HERE *CLICK ME*</a>
                    
                </div>
                <div className='item'>
                    <h2>Minecraft: Pizza Mod</h2>
                    <img src={mPPic}alt="Minecraft: Pizza Mod"/>
                </div>
            </div>
            <div>
                <button className='button1'><a href = "https://github.com/ParkerHansen7777?tab=repositories" target="_blank" rel="noreferrer">Github</a></button>
                <button className='button2'><a href = "https://www.linkedin.com/in/parkerhansen/" target="_blank"rel="noreferrer">LinkedIn</a></button>
                <button className='button3'><a href = "https://github.com/ParkerHansen7777/React_APP" target="_blank" rel="noreferrer">Portfolio Repository</a></button>
            </div>
        </section>
    )
}