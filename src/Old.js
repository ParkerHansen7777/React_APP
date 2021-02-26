import React from 'react';
import logo from './logo.png';
import './App.css';

function Old() {
  return (
    <div className="App">
      <header className="App-header">
        <div class="topnav">
          <a class="active" href="#home">Home</a>
          <a href="#news">News</a>
          <a href="#contact">Contact</a>
          <a href="#about">About</a>
        </div>
        <div className="Main_Logo">
          <img src={logo} className="App-logo" alt="logo" />
        </div>
      </header>
    <main className="App-main">
    <a
          className="App-link"
          href="https://tracker.gg/valorant/profile/riot/Pramado%236946/overview"
          target="_blank"
          rel="noopener noreferrer"
        >
          Valorant
        </a>
        <a
          className="App-link"
          href="https://cod.tracker.gg/warzone/profile/battlenet/Pramado%231231/overview"
          target="_blank"
          rel="noopener noreferrer"
        >
          Warzone
        </a>
		<a
          className="App-link"
          href="https://r6.tracker.network/profile/pc/Pramado"
          target="_blank"
          rel="noopener noreferrer"
        >
          Rainbow Six Siege 6
        </a>
    </main>
    </div>
  );
}

export default Old;