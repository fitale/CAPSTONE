import React, { Component } from "react";

export default class Footer extends Component {
  render() {
    return (
      <footer className="footer">
        <h1 className="footer__title">uChoose</h1>
        <nav className="footer__nav">
          <h3 className="footer__nav--item">About</h3>
          <h3 className="footer__nav--item">Data</h3>
          <h3 className="footer__nav--item">News</h3>
          <h3 className="footer__nav--item">Contact Us</h3>
        </nav>
      </footer>
    );
  }
}
