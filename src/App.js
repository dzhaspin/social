import React from "react";
import { Route } from "react-router-dom";
import Navbar from "./componets/navbar/navbar";
import Header from "./componets/header/header";
import Profile from "./componets/profile/profile";
import DialogsContainer from "./componets/dialogs/DialogsContainer";
import UsersContainer from "./componets/Users/UsersContainer";
import "./App.css";

const App = (props) => {
  return (
    <div className="App">
      <Header />
      <div className="container">
        <div className="wrapper">
          <div className="navbar-block">
            <Navbar />
          </div>
          <div className="content-block">
            <Route path="/profile" render={() => (<Profile />)} />
            <Route path="/dialogs" render={() => (<DialogsContainer />)} />
            <Route path="/users" render={() => (<UsersContainer />)} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
