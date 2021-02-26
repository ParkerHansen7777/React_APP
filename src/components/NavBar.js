import React from 'react';
import './NavBar.css';

 class NavBar extends React.Component{
    render() {
        return (
            <div>
              <ul id="nav">
                <li><a href="/">Home</a></li>
                <li><a href="./Resume">Resume</a></li>
                <li><a href="/Portfolio">Portfolio</a></li>
                <li><a href="/Contact">Contact</a></li>
              </ul>
            </div>
        );
    }

}

export default NavBar;