import React from "react";
import "./App.css";
import Navbar from "./componets/navbar/navbar";
import Header from "./componets/header/header";
import Profile from "./componets/profile/profile";
import Dialogs from "./componets/dialogs/dialogs";
// import Footer from "./Footer";
import { BrowserRouter, Route } from "react-router-dom";

const App = (props) => {
  return (
    <BrowserRouter>
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
                    profilePage={props.state.profilePage}
                    addPost={props.addPost}
                    updateNewPostText={props.updateNewPostText}
                  />
                )}
              />
              <Route
                exact
                path="/dialogs"
                render={() => <Dialogs state={props.state.dialogPage} />}
              />
            </div>
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
