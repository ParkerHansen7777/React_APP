import React from 'react';
import './NavBar.css';
import { NavLink } from 'react-router-dom';
class NavBar extends React.Component{
  render() {
    return (
            
            
      <ul id="navbar">
        <NavLink className = "link" activeClassName="selected" to="/Home">Home</NavLink>
        <NavLink className = "link" activeClassName="selected" to="/Resume">Resume</NavLink>
        
      </ul>
            
    );
  }
}

export default NavBar;