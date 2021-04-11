import React from "react";
import { Route } from "react-router-dom";
import Navbar from "./componets/navbar/navbar";
import Header from "./componets/header/header";
import DialogsContainer from "./componets/dialogs/DialogsContainer";
import UsersContainer from "./componets/Users/UsersContainer";
import ProfileContainer from "./componets/profile/ProfileContainer";
import HeaderContainer from "./componets/header/HeaderContainer";
import "./App.css";

const App = (props) => {
  return (
    <div className="App">
      <HeaderContainer />
      <div className="container">
        <div className="wrapper">
          <div className="navbar-block">
            <Navbar />
          </div>
          <div className="content-block">
            <Route path="/profile/:userId" render={() => (<ProfileContainer />)} />
            <Route path="/dialogs/" render={() => (<DialogsContainer />)} />
            <Route path="/users/" render={() => (<UsersContainer />)} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
