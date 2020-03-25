import React, { Component } from "react";
import { Link } from "react-router-dom";

import Hero from "./Hero";
import Footer from "./Footer";

import movie from "../assets/videos/BrainStation.mp4";
import study from "../assets/images/study.jpg";
import saveMoney from "../assets/images/save-money.jpg";
export default class LandingPage extends Component {
  render() {
    return (
      <>
        <Hero />
        <main className="landing-page">
          <h3 className="landing-page__header">
            Get University matches based on test scores, majors, location,
            culture, and tuition
          </h3>
          <h5 className="landing-page__para">
            Tell us about yourself and we'll provide you with a list of
            universities we think you ought to check out.
          </h5>
          <div className="landing-page__major">
            <div className="landing-page__major--flex">
              <Link to="/uChoosenow" className="button">
                <h5 className="button__text">uChoose now</h5>
              </Link>
              <h3 className="smaller">
                SPEND LESS TIME SEARCHING, AND MORE TIME MAKING IT HAPPEN
              </h3>
            </div>
            <div className="landing-page__major--flex-vid">
              <video controls src={movie} className="video"></video>
            </div>
          </div>
          <div className="landing-page__holder">
            <div className="landing-page__holder--left">
              <h3 className="bold-header">
                Discover which universities match your price range
              </h3>
              <h5 className="para">
                We'll help you save money on university by finding schools that
                match your preferred tuition's net price.
              </h5>
            </div>
            <div className="landing-page__holder--right">
              <img src={saveMoney} alt="save-money" className="img" />
            </div>
          </div>
          <div className="landing-page__holder">
            <div className="landing-page__holder--left">
              <h3 className="bold-header">
                Learn more about the admission process
              </h3>
              <h5 className="para">
                We'll compare your chance of admission with other previously
                accepted students and help you achieve your goals.
              </h5>
            </div>
            <div className="landing-page__holder--right">
              <img src={study} alt="planning" className="img" />
            </div>
          </div>
        </main>
        <Footer />
      </>
    );
  }
}
