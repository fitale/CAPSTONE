import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import axios from "axios";

import "./styles/main.css";
import loadingImg from "./assets/icons/loading.svg";

import Header from "./components/Header.js";
import LandingPage from "./components/LandingPage.js";
import SearchNow from "./components/SearchNow.js";
import Locations2 from "./components/Locations2.js";
import Tuition from "./components/Tuition.js";
import UniversityPage from "./components/UniversityPage.js";
import TestScores from "./components/TestScores.js";
import About from "./components/About.js";
import Data from "./components/Data.js";
import News from "./components/News.js";
export default class App extends Component {
  state = {
    udata: []
  };

  // retrieve data and set state - data is then passed down to child components that use it
  componentDidMount() {
    axios
      .get("/api/udata")
      .then(res => {
        this.setState({
          udata: res.data
        });
      })
      .catch(err => {
        console.log(err);
      });
  }

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
            <Route path="/about" component={About} exact />
            <Route path="/data" component={Data} exact />
            <Route path="/news" component={News} exact />

            <Route
              path="/searchbylocation"
              render={routerProps => (
                <Locations2 {...routerProps} uData={this.state.udata} />
              )}
            />
            <Route
              path="/searchbytuition"
              render={props => <Tuition {...props} uData={this.state.udata} />}
              exact
            />
            <Route
              path="/searchbytest-scores"
              render={props => (
                <TestScores {...props} uData={this.state.udata} />
              )}
            />
            <Route
              path="/:_id"
              render={props => (
                <UniversityPage {...props} uData={this.state.udata} />
              )}
              exact
            />
          </Switch>
        </Router>
      );
    }
  }
}
