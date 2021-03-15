import React from "react";
import "./App.css";
import Navbar from "./componets/navbar/navbar";
import Header from "./componets/header/header";
import Profile from "./componets/profile/profile";
import DialogsContainer from "./componets/dialogs/DialogsContainer";
// import Footer from "./Footer";
import { Route } from "react-router-dom";

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
            <Route
              path="/profile"
              render={() => (
                <Profile
                  store={props.store}
                  // profilePage={props.state.profilePage}
                  // dispatch={props.dispatch}
                />
              )}
            />
            <Route
              path="/dialogs"
              render={() => (
                <DialogsContainer
                  store={props.store}
                  // profilePage={props.state.profilePage}
                  // dispatch={props.dispatch}
                />
              )}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
