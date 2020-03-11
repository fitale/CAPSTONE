import React, { Component } from "react";

const API_KEY = "AIzaSyA_JOFNWwvsXhy3dsmSRX7nqi9KQy5Db7U";
const API_URL = `https://www.google.com/maps/embed/v1/place?key=${API_KEY}&q=places`;

export default class Locations extends Component {
  render() {
    return (
      <main className="locations">
        <h3 className="locations__title">Search by Location</h3>
        <div id="map" className="locations__map"></div>
      </main>
    );
  }
}
