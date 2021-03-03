import React from 'react';
import './App.css';
import {BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import NavBar from './components/NavBar';
import Home from './components/Home';
import Portfolio from './components/Portfolio';
import Resume from './components/Resume';
function App() {
  return (
    
  <BrowserRouter> 
    <Redirect from='/' to='/Home' />
    <NavBar />
      <Switch>
        <Route path ="/Home">
          <Home />
        </Route>
        <Route path = "/Resume">
          <Resume />
        </Route>
        <Route path = "/Portfolio">
          <Portfolio />
        </Route>
      </Switch>
    </BrowserRouter> 
  );
}

export default App;
