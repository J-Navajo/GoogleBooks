import React from 'react';
import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Route, Switch } from "react-router-dom"
import Home from "./Pages/home"
import Save from "./Pages/save"
import NavBar from "./Components/navBar"


function App() {
  return (
    <Router>
     <NavBar />
      <Switch>

        
        <Route exact path = {["/", "/search"]}>

          <Home />

        </Route>
        <Route exact path = {["/save"]}>
          <Save />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
