import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import Nav from "./components/Nav/Nav"
import Register from "./components/RegisterLogin/Register";
import Login from "./components/RegisterLogin/Login";
import Home from "./components/Home/Home";
import AdminDiv from "./components/AdminDiv";
import Story from "./components/Story"

class App extends Component {
  render() {
    return (
     
     <div className="App">
        <Nav />
        <Switch>
          <Route exact path ="/" component = { Home } />
          <Route exact path ="/story" component = { Story } />
          <Route path = "/login" component = { Login } />
          <Route path = "/register" component = { Register } />
          <Route path = "/admin" component= { AdminDiv } />
        </Switch>
      </div>
    
    );
  }
}

export default App;
