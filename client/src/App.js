
import React, { Component} from "react";
import {hot} from "react-hot-loader";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom"

import "./App.scss";

import Header from "./components/common/header/Header"
import Home from "./components/pages/home/Home"
import Login from "./components/pages/login/Login"
import Footer from "./components/common/footer/Footer"

class App extends Component{
  render(){
    return(
      <div className="App">
        <Router>
          <Switch>
            <Route exact path="/">
              <Header />
              <Home />
              <Footer />
            </Route>
            <Route path="/login"><Login /></Route>
          </Switch>
        </Router>
      </div>
    );
  }
}

export default hot(module)(App);