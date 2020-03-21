import React, { Component } from "react";
import { Link } from "react-router-dom";

import MenuSlider from "./MenuSlider.js";

export default class Header extends Component {
  state = {
    isShowing: false
  };

  // displays menu dropdown
  openMenuSlider = event => {
    this.setState({
      isShowing: true
    });
  };

  render() {
    return (
      <header className="header">
        <Link to="/">
          <h3 className="header__title">uChoose</h3>
        </Link>
        <nav className="header__nav">
          <h6 className="header__nav--tablet-desk-one">SIGN UP</h6>
          <h6 className="header__nav--tablet-desk">LOG IN</h6>
          <div className="header__nav--mobile">
            <svg
              onClick={this.openMenuSlider}
              xmlns="http://www.w3.org/2000/svg"
              height="24"
              width="24"
            >
              <path d="M0 0h24v24H0z" fill="none" />
              <path
                d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"
                className="svg"
              />
            </svg>
            {/* renders if event handler is clicked and state changes to true */}
            {this.state.isShowing && <MenuSlider />}
          </div>
        </nav>
      </header>
    );
  }
}
