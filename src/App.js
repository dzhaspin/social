import "./App.css";
import Sidebar from "./componets/sidebar/Sidebar";
import Header from "./componets/header/header";
import Profile from "./componets/profile/profile";
import Footer from "./componets/Footer";

const App = () => {
  // function App() {
  return (
    <div className="App">
      <Header />
      <div className="container">
        <div className="wrapper">
          <Sidebar />
          <div className="main">
            <Profile />
            <Footer />
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
