import React from 'react';
import './NavBar.css';
import { NavLink } from 'react-router-dom';
 class NavBar extends React.Component{
    render() {
        return (
            <header>
            <div>
              <ul id="nav">
                <NavLink to="/">Home</NavLink>
                <NavLink to="./Resume">Resume</NavLink>
                <NavLink to="/Portfolio">Portfolio</NavLink>
              </ul>
            </div>
            </header>
        );
    }
}

export default NavBar;