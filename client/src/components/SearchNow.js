import React, { Component } from "react";
import { Link } from "react-router-dom";

import map from "../assets/images/map.jpg";
import tuitionPiggyBank from "../assets/images/tuition.jpg";
import testScores from "../assets/images/test-scores.jpg";

export default class SearchNow extends Component {
  render() {
    return (
      <main className="search">
        <h1 className="search__title">How would you like to search?</h1>
        <section className="search__container">
          <Link to="/searchbylocation">
            <div className="search__container--card">
              <h3 className="heading">LOCATION</h3>
              <img className="image" src={map} alt="map" />
            </div>
          </Link>
          <Link to="/searchbytuition">
            <div className="search__container--card">
              <h3 className="heading">TUITION</h3>
              <img className="image" src={tuitionPiggyBank} alt="piggybank" />
            </div>
          </Link>
          <Link to="/searchbytest-scores">
            <div className="search__container--card">
              <h3 className="heading">TEST SCORES</h3>
              <img className="image" src={testScores} alt="pencils" />
            </div>
          </Link>
        </section>
      </main>
    );
  }
}
