import React from 'react';
import './Npp.css';
import profile from './components/Home/linkedinPfp.jpg';
import tmPic from './pictures/task-manager.png'
import laPic from './pictures/luxury-autos.png'
import ctPic from './pictures/chess-tracker.png'
import mPPic from './pictures/minecraft-pizza.png'
import resumePDF from "./components/Resume/ParkerHansenResume.pdf";
import SinglePage from './components/Resume/SinglePage/SinglePage';

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
                    <img src={profile} style={{height: '400px', width: "400px", padding: "10px"}} alt="Parker"/>
                    <div style={{display: "grid"}}>
                        <h1 style={{display: "inline", justifySelf: "center"}}>About me</h1>
                        <p>I'm a software developer based in Los Angeles, California. I have experience with languages and frameworks such as, C, C++, Python, JavaScript, Java, React.JS, Node.JS, SQL. I'm currently freelancing, training AI with a focus on software development. I've created multiple projects with React with some using the MERN stack, I've even made a Minecraft mod with Java! I love to problem solve. I love to build things. I'm passionate about programming, and I love the process of solving smaller problems to lead to a solution to a big problem, thus building something great!</p>
                    </div>
                </div>
            </section>
            
            <section style={{justifyContent: "space-around"}}>
                <h1>Projects i've worked on</h1>
                <div className='container-row'>
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
                        <h2>Car Dealership Catalog</h2>
                        <img src={laPic} alt="Car Dealership Catalog"/>
                        <a className='link' href='https://cardealer-frontend.onrender.com/' style={{display: 'block'}}>Deployed HERE *CLICK ME*</a>
                        
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
            <section>
                <h1>My Resume</h1>
                <SinglePage pdf={resumePDF}/>
            </section>
            <section>
                <h1>Contact Me</h1>
                <ul>
                    <li>Email (preferred): parkerhansen7777@gmail.com</li>
                    <li>Phone: 817-404-9343</li>
                </ul>
            </section> 
        </>
    )
}