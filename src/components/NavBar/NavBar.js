import React from 'react';
import './NavBar.css';
import { NavLink } from 'react-router-dom';
export default function NavBar(){
  
    return (
           
      <ul id="navbar">
        <NavLink className = "link" activeClassName="selected" to="/Home">Home</NavLink>
        <NavLink className = "link" activeClassName="selected" to="/Resume">Resume</NavLink>
        
      </ul>
            
    );
  
}

