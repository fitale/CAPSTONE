import React, { Component, useState } from "react";
import { Link } from "react-router-dom";
import {
  GoogleMap,
  withScriptjs,
  withGoogleMap,
  Marker,
  InfoWindow
} from "react-google-maps";

import gradCap from "../assets/icons/grad-cap.svg";

const API_KEY = "AIzaSyA_JOFNWwvsXhy3dsmSRX7nqi9KQy5Db7U";

let testData = [];
let filteredUni = [];

// renders GoogleMap in browser
function Map() {
  const [selectedUni, setSelectedUni] = useState(null);
  const myMarker = filteredUni.map(school => {
    return (
      <Marker
        key={school._id}
        position={{ lat: school.lat, lng: school.lng }}
        onClick={() => {
          setSelectedUni(school);
        }}
        icon={{
          url: gradCap
        }}
      />
    );
  });

  return (
    <GoogleMap
      defaultZoom={6}
      defaultCenter={{
        lat: 43.048122,
        lng: -76.147423
      }}
    >
      {myMarker}
      {selectedUni && (
        <InfoWindow
          position={{ lat: selectedUni.lat, lng: selectedUni.lng }}
          onCloseClick={() => {
            setSelectedUni(null);
          }}
        >
          <div>
            <h3>{selectedUni.campus}</h3>
            <h6>{selectedUni.address}</h6>
            <h6>
              {selectedUni.city}, {selectedUni.state} {selectedUni.zip}
            </h6>
            <Link to={`${selectedUni._id}`}>
              <h5>Learn more</h5>
            </Link>
          </div>
        </InfoWindow>
      )}
    </GoogleMap>
  );
}

const WrappedMap = withScriptjs(withGoogleMap(Map));

export default class Locations2 extends Component {
  // data passed down from App.js
  componentDidMount() {
    testData = this.props.uData;
  }

  // eventHandler controls form submission and user city search
  searchByLocation = event => {
    event.preventDefault();
    let location = event.target.input.value.toLowerCase();
    filteredUni = testData.filter(uni => {
      return uni.city.toLowerCase().includes(location);
    });
    this.setState({
      test: "testing"
    });
  };

  render() {
    let myHtml = "";
    if (this.props.uData !== undefined) {
      myHtml = this.props.uData.map(uni => {
        return <p key={uni._id}>{uni.campus}</p>;
      });
    } else {
      myHtml = <p>Loading...</p>;
    }

    return (
      <main>
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
        {/* container for GoogleMaps */}
        <div
          className="locations__map-holder"
          style={{ height: "50vh", width: "100vw" }}
        >
          <WrappedMap
            googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=${API_KEY}`}
            loadingElement={<div style={{ height: `100%` }} />}
            containerElement={<div style={{ height: `100%` }} />}
            mapElement={<div style={{ height: `100%` }} />}
          />
        </div>
        <h3>Cities to search by:</h3>
        <p>Buffalo</p>
        <p>Amherst</p>
        <p>Binghamton</p>
        <p>Batavia</p>
        <p>Geneseo</p>
        <p>Rochester</p>
        <p>Henrietta</p>
        <p>Brockport</p>
        <p>Fredonia</p>
        <p>Dunkirk</p>
        <p>Canandaigua</p>
        <p>Niagara</p>
        <p>Sanborn</p>
      </main>
    );
  }
}
