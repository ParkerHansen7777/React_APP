import React from 'react';
import {BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import './App.css'
import NavBar from './components/NavBar/NavBar';
import Home from './components/Home/Home';
import Resume from './components/Resume/Resume';

export default function App() {
  return (
    <BrowserRouter> 
        <Redirect from='/' to='/Home' />
        <div class='App'>
          <NavBar />
          <Switch>
            <Route path ="/Home">
              <Home />
            </Route>
            <Route path ="/Resume">
              <Resume />
            </Route>
          </Switch>
        </div>
    </BrowserRouter> 
    );
  }
