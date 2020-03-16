import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./styles/main.css";
import loadingImg from "./assets/icons/loading.svg";

import Header from "./components/Header";
import LandingPage from "./components/LandingPage.js";
import SearchNow from "./components/SearchNow.js";
import Locations from "./components/Locations.js";
import Tuition from "./components/Tuition";

export default class App extends Component {
  state = {
    udata: [1]
  };
  render() {
    if ((this.state.udata.length || this.state.udata.length) === 0) {
      return (
        <div>
          <img src={loadingImg} alt="loading" />
        </div>
      );
    } else {
      return (
        <Router className="App">
          <Header />
          <Switch>
            <Route path="/" component={LandingPage} exact />
            <Route path="/uChoosenow" component={SearchNow} exact />
            <Route path="/searchbylocation" component={Locations} />

            <Route path="/searchbytuition" component={Tuition} />
            <Route path="/searchbytest-scores" />
          </Switch>
        </Router>
      );
    }
  }
}
