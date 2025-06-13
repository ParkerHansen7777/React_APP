import React from 'react';
import './App.css';
import Landing from './components/Landing/landing';
import About from './components/About/about';
import Projects from './components/Projects/projects';
import Resume from './components/Resume/resume';
import Contact from './components/Contact/contact';

export default function App(){

    return(
        <>
            <Landing />
            
            <About />
            
            <Projects />

            <Resume />

            <Contact />
            
            
        </>
    )
}