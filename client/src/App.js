
import React, { Component} from "react";
import {hot} from "react-hot-loader";
import "./App.scss";

import Header from "./components/common/Header"
import Footer from "./components/common/Footer"

class App extends Component{
  render(){
    return(
      <div className="App">
        <Header />
        <div>
          <h1> Hello, {this.props.name} </h1>
        </div>
        <Footer />
      </div>
    );
  }
}

export default hot(module)(App);