import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./styles/main.css";
import loadingImg from "./assets/icons/loading.svg";

import Header from "./components/Header";
import LandingPage from "./components/LandingPage.js";
import SearchNow from "./components/SearchNow.js";
import Locations from "./components/Locations.js";
import Tuition from "./components/Tuition";
import axios from "axios";

export default class App extends Component {
  state = {
    udata: []
  };

  componentDidMount() {
    axios.get("http://localhost:5000/api/udata").then(res => {
      console.log(res.data);
      this.setState({
        udata: res.data
      });
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
            <Route path="/searchbylocation" component={Locations} />

            <Route
              path="/searchbytuition"
              render={props => <Tuition {...props} uData={this.state.udata} />}
              exact
            />
            <Route path="/searchbytest-scores" />
          </Switch>
        </Router>
      );
    }
  }
}
