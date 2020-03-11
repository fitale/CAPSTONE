import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./styles/main.css";

import Header from "./components/Header";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import LandingPage from "./components/LandingPage";
import Locations from "./components/Locations";

function App() {
  return (
    <Router className="App">
      <Header />
      <Hero />
      <LandingPage />
      <Locations />
      <Footer />
      <Switch>
        <Route path="/" />
        <Route path="/uChoosenow" />
      </Switch>
    </Router>
  );
}

export default App;
