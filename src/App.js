import React from 'react';
import './App.css';
import {BrowserRouter, Switch, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import Home from './components/Home';
import Portfolio from './components/Portfolio';
import Resume from './components/Resume';
function App() {
  return (
  <BrowserRouter> 
    <NavBar />
    <div>
      <Switch>
        <Route exact path ="/">
          <Home />
        </Route>
        <Route path = "/Resume">
          <Resume />
        </Route>
        <Route path = "/Portfolio">
          <Portfolio />
        </Route>
      </Switch>
    </div>
    </BrowserRouter> 
  );
}

export default App;
