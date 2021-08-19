import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from "./Components/Header.js";
import Login from "./Components/Navigation/Login";
import SignUp from "./Components/Navigation/SignUp";
import About from "./Components/Navigation/About";
import Home from "./Components/Navigation/Main";
import "./App.css";

class App extends React.Component {
  render() {
    // Keep the user info in state
    // if they are logged in pass the user info as prop to your <Header />
    // conditionally render profile info or menu items depending on the users signin status
    return (
      <Router>
        <div className="App">
          <Header />
          <Route exact path="/" component={Home} />
          <Route exact path="/dashboard" component={Home} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/sign-up" component={SignUp} />
          <Route exact path="/about" component={About} />

          <footer>Copyright Remote Newbies 2020</footer>
        </div>
      </Router>
    );
  }
}

export default App;
