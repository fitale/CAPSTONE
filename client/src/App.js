import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./styles/main.css";

import Header from "./components/Header";
import LandingPage from "./components/LandingPage";
import SearchNow from "./components/SearchNow.js";

function App() {
  return (
    <Router className="App">
      <Header />
      <Switch>
        <Route path="/" component={LandingPage} exact />
        <Route path="/uChoosenow" component={SearchNow} exact />
      </Switch>
    </Router>
  );
}

export default App;
