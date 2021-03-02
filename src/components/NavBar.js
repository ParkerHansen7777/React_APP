import React from 'react';
import './NavBar.css';
import { NavLink } from 'react-router-dom';
 class NavBar extends React.Component{
    render() {
        return (
            <header>
            <div>
              <ul id="navbar">
                <div id ="barbutton"><NavLink to="/">Home</NavLink></div>
                <div id = "barbutton"><NavLink to="./Resume">Resume</NavLink></div>
                <div id = "barbutton"><NavLink to="/Portfolio">Portfolio</NavLink></div>
                
              </ul>
            </div>
            </header>
        );
    }
}

export default NavBar;