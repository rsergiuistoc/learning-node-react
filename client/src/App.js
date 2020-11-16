
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
import Footer from "./components/common/footer/Footer"

class App extends Component{
  render(){
    return(
      <div className="App">
        <Router>
           <Header />
           <Route exact path="/" component={Home}></Route>
           <Route path="/login"><h1> Login </h1></Route>
           <Route path="/cart"><h1> Cart </h1></Route>
        </Router>
        <Footer />
      </div>
    );
  }
}

export default hot(module)(App);