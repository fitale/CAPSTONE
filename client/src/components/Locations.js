import React, { Component } from "react";
import axios from "axios";
import GoogleMapReact from "google-map-react";

// import menuIcon from "../assets/icons/menu-icon.svg";
import loadingImg from "../assets/icons/loading.svg";
const API_KEY = "AIzaSyA_JOFNWwvsXhy3dsmSRX7nqi9KQy5Db7U";

const AnyReactComponent = ({ text }) => <div>{text}</div>;
export default class Locations extends Component {
  state = {
    city: "Buffalo",
    center: {
      lat: 43.2994,
      lng: -74.2179
    },
    marker: [],
    zoom: 6
  };

  searchByLocation = event => {
    event.preventDefault();
    console.log(event.target.input.value);
    let location = event.target.input.value;
    axios.get("http://localhost:5000/api/udata").then(res => {
      const buffUnis = res.data.filter(uni =>
        uni.city.toLowerCase().includes(location.toLowerCase())
      );
      console.log(buffUnis);
      const newCenter = {};
      newCenter.lat = buffUnis[0].lat;
      newCenter.lng = buffUnis[0].lng;
      const myMarker = buffUnis.map(oneUni => {
        console.log(`latitude of one university in buffalo: ${oneUni.lat}`);
        console.log(`longitude of one university in buffalo: ${oneUni.lng}`);
        return (
          <AnyReactComponent
            lat={oneUni.lat}
            lng={oneUni.lng}
            text="HERE I AM"
          />
        );
      });
      this.setState({
        city: location,
        center: newCenter,
        marker: myMarker,
        zoom: 11
      });
    });
  };

  render() {
    if (this.state.city.length === 0) {
      return (
        <div>
          <img src={loadingImg} alt="loading" />
        </div>
      );
    } else {
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
          <div style={{ height: "100vh", width: "100%" }}>
            <GoogleMapReact
              bootstrapURLKeys={{ key: API_KEY }}
              defaultCenter={this.state.center}
              defaultZoom={this.state.zoom}
            >
              {this.state.marker}
            </GoogleMapReact>
          </div>
        </main>
      );
    }
  }
}
