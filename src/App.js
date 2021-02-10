import "./App.css";
import Navbar from "./componets/navbar/navbar";
import Header from "./componets/header/header";
import Profile from "./componets/profile/profile";
import Dialogs from "./componets/dialogs/dialogs";
import Footer from "./Footer";
import { BrowserRouter, Route } from "react-router-dom";

const App = () => {
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
              <Route path="/profile" component={Profile} />
              <Route exact path="/dialogs" component={Dialogs} />
              <Footer />
            </div>
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
