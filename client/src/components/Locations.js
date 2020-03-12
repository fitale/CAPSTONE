import React, { Component } from "react";
// import axios from "axios";

const API_KEY = "AIzaSyA_JOFNWwvsXhy3dsmSRX7nqi9KQy5Db7U";
export default class Locations extends Component {
  state = {
    city: "US"
  };

  searchByLocation = event => {
    event.preventDefault();
    console.log(event.target.input.value);
    let location = event.target.input.value;
    this.setState({
      city: location
    });
  };

  render() {
    return (
      <main className="locations">
        <h3 className="locations__title">Search by Location</h3>
        <form onSubmit={this.searchByLocation} className="locations__holder">
          <input
            name="input"
            className="locations__holder--input"
            type="text"
          />
          <button className="locations__holder--button">
            Find schools now
          </button>
        </form>
        <iframe
          title="iframe"
          className="landing-page__iframe--map"
          src={`https://www.google.com/maps/embed/v1/place?key=${API_KEY}&q=${this.state.city}`}
        ></iframe>
      </main>
    );
  }
}
