import React, { Component } from "react";
import { Link } from "react-router-dom";
export default class Footer extends Component {
  render() {
    return (
      <footer className="footer">
        <Link to="/" className="footer__link">
          <h1 className="footer__link--title">uChoose</h1>
        </Link>
        <nav className="footer__nav">
          <Link to="/uChoosenow" className="footer__nav--link">
            <h3 className="footer__nav--item">Search Now</h3>
          </Link>
          <Link to="/about" className="footer__nav--link">
            <h3 className="footer__nav--item">About</h3>
          </Link>
          <Link to="/data" className="footer__nav--link">
            <h3 className="footer__nav--item">Data</h3>
          </Link>
          <Link to="/news" className="footer__nav--link">
            <h3 className="footer__nav--item">News</h3>
          </Link>
        </nav>
      </footer>
    );
  }
}
