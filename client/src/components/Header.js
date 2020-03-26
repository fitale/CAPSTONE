import React, { Component } from "react";
import { Link } from "react-router-dom";

import MenuSlider from "./MenuSlider.js";

export default class Header extends Component {
  state = {
    isShowing: false
  };

  // displays menu dropdown
openMenuSlider = event => {
  console.log('clicked from openMenuSlider')
  this.setState({
    isShowing: true
  })
}

// closes menu dropdown after page has been selected
closeMenu = event => {
  console.log('clicked from closeMenu')
  this.setState({
    isShowing: !true
  })
}

  render() {
    return (
      <header className="header">
        <Link to="/" className="header__link" >
          <h3 className="header__link--title">uChoose</h3>
        </Link>
        <nav className="header__nav">
          <Link to="/uChoosenow" className="header__nav--desk" >
            <h5 className="inner-text">Search Now</h5>
          </Link>

          <Link to="/about" className="header__nav--desk">
            <h5 className="inner-text">About</h5>
          </Link>
          <Link to="/data" className="header__nav--desk">
            <h5 className="inner-text">Data</h5>
          </Link>
          <Link to="/news" className="header__nav--desk">
            <h5 className="inner-text">News</h5>
          </Link>
          <div className="header__nav--mobile-tablet">
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
            {this.state.isShowing && <MenuSlider triggerCloseHeaderMenu={this.closeMenu}/>}
          </div>
        </nav>
      </header>
    );
  }
}
