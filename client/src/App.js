import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./styles/main.css";

import Header from "./components/Header";
import Footer from "./components/Footer";
import Hero from "./components/Hero";

function App() {
  return (
    <Router className="App">
      <Header />
      <Hero />
      <Footer />
      <Switch>
        <Route path="/" />
      </Switch>
    </Router>
  );
}

export default App;
