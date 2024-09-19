import React from 'react';
//import NavBar from './components/NavBar/NavBar';
import './Npp.css';
import profile from './components/Home/linkedinPfp.jpg';
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
                    <img src={profile} style={{width: "400px", padding: "10px"}}/>
                    <div style={{width: "400px", padding: "10px"}}>
                        <h1>About me</h1>
                        <p>this is all about me</p>
                    </div>
                </div>
            </section>
            
            <section>
                <h1>Projects i've worked on</h1>
                <div className='container-row'>
                <img />
                <ul>
                    <li><a>im a link</a></li>
                </ul>
                <img />
                <ul>
                    <li><a>im a link</a></li>
                </ul>
                <img />
                <ul>
                    <li><a>im a link</a></li>
                </ul>
                <img />
                <ul>
                    <li><a>im a link</a></li>
                </ul>
                </div>
                <a href = "https://github.com/ParkerHansen7777?tab=repositories" target="_blank" rel="noreferrer">Github</a>
                <a href = "https://www.linkedin.com/in/parkerhansen/" target="_blank"rel="noreferrer">LinkedIn</a>
                <a href = "https://github.com/ParkerHansen7777/React_APP" target="_blank" rel="noreferrer">Portfolio Repository</a>
            </section> 
        </>
    )
}