import React, { Component } from "react";
import map from "../assets/images/map.jpg";
import tuitionPiggyBank from "../assets/images/tuition.jpg";
import testScores from "../assets/images/test-scores.jpg";

import Footer from "./Footer";
export default class SearchNow extends Component {
  render() {
    return (
      <>
        <main>
          <h1>How would you like to search?</h1>
          <section>
            <card>
              <h3>Location</h3>
              <img src={map} alt="map" />
            </card>
            <card>
              <h3>Tuition</h3>
              <img src={tuitionPiggyBank} alt="piggybank" />
            </card>
            <card>
              <h3>Test Scores</h3>
              <img src={testScores} alt="pencils" />
            </card>
          </section>
        </main>
        <Footer />
      </>
    );
  }
}
