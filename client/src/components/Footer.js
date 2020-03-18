import React, { Component } from "react";
import { Link } from "react-router-dom";
export default class Footer extends Component {
  render() {
    return (
      <footer className="footer">
        <Link to="/">
          <h1 className="footer__title">uChoose</h1>
        </Link>
        <nav className="footer__nav">
          <Link to="/about">
            <h3 className="footer__nav--item">About</h3>
          </Link>
          <Link to="/data">
            <h3 className="footer__nav--item">Data</h3>
          </Link>
          <Link to="/news">
            <h3 className="footer__nav--item">News</h3>
          </Link>
          <Link to="/contact">
            <h3 className="footer__nav--item">Contact Us</h3>
          </Link>
        </nav>
      </footer>
    );
  }
}
