import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class MenuSlider extends Component {
  render() {
    return (
      <main className="menu-slider">
        <Link to="/uChoosenow" className="menu-slider__link">
          <h5 className="menu-slider__link--text">Search Now</h5>
        </Link>
        <Link to="/about" className="menu-slider__link">
          <h5 className="menu-slider__link--text">About</h5>
        </Link>
        <Link to="/data" className="menu-slider__link">
          <h5 className="menu-slider__link--text">Data</h5>
        </Link>
        <Link to="/news" className="menu-slider__link">
          <h5 className="menu-slider__link--text">News</h5>
        </Link>
        <Link to="/contact" className="menu-slider__link">
          <h5 className="menu-slider__link--text">Contact Us</h5>
        </Link>
      </main>
    );
  }
}
