import React from 'react';
import NavBar from './components/NavBar/NavBar';

export default function Npp(){

    return(
        <>
            <div className='container'>
                <h1>Hello, my name is Parker Hansen....</h1>
                <span>Scroll down</span>
                <span>\/</span>
            </div>
            
            <div className='container'>
                <img />
                <h1>About me</h1>
                <p>this is all about me</p>
            </div>
            
            <div className='container'>
                <h1>Projects i've worked on</h1>
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
        </>
    )
}