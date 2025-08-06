import React from 'react';
import './App.css';
import Landing from './components/Landing/Landing';
import About from './components/About/About';
import Projects from './components/Projects/Projects';
import Resume from './components/Resume/Resume';
import Contact from './components/Contact/Contact';

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