import React, { Component } from "react";

export default class LandingPage extends Component {
  render() {
    return (
      <main className="landing-page">
        <h3 className="landing-page__header">
          Get University matches based on test scores, majors, location,
          culture, and tuition
        </h3>
        <h5 className="landing-page__para">
          Tell us about yourself and we'll provide you with a list of
          universities we think you ought to check out.
        </h5>
        <button className="landing-page__button">
          <h5 className="landing-page__button--text">uChoose now</h5>
        </button>
        <div className="landing-page__iframe">
          <iframe
            title="iframe"
            className="landing-page__iframe--map"
            src="https://www.google.com/maps/embed/v1/place?key=AIzaSyA_JOFNWwvsXhy3dsmSRX7nqi9KQy5Db7U&q=NYS"
          ></iframe>
        </div>
      </main>
    );
  }
}
