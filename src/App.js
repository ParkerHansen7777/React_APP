import React from 'react';
import {BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';
import Home from './components/Home/Home';
import Resume from './components/Resume/Resume';

export default function App() {
  return (
    <BrowserRouter> 
        <Redirect from='/' to='/Home' />
        <NavBar />
        <Switch>
          <Route path ="/Home">
            <Home />
          </Route>
          <Route path ="/Resume">
            <Resume />
          </Route>
        </Switch>
    </BrowserRouter> 
    );
  }
