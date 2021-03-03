import React from 'react';
import './NavBar.css';
import { NavLink } from 'react-router-dom';
 class NavBar extends React.Component{
    render() {
        return (
            
            <div>
              <ul id="navbar">
                <NavLink className = "link" to="/">Home</NavLink>
                <NavLink className = "link" to="/Resume">Resume</NavLink>
                <NavLink className = "link" to="/Portfolio">Portfolio</NavLink>
                
              </ul>
            </div>
            
        );
    }
}

export default NavBar;