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
          style={{ cursor: `pointer` }}
        >
          <div>
            <h3 style={{ margin: `0 0 5px` }}>{selectedUni.campus}</h3>
            <h6>{selectedUni.address}</h6>
            <h6 style={{ margin: `0 0 5px` }}>
              {selectedUni.city}, {selectedUni.state} {selectedUni.zip}
            </h6>
            <p style={{ margin: `0 0 5px` }}>{selectedUni.mission}</p>
            <Link to={`${selectedUni._id}`} style={{ color: `#0000d6` }}>
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
      myHtml = <p className="p">Loading...</p>;
    }

    return (
      <main className="locations">
        <h3 className="locations__title">Search by Location</h3>
        <form onSubmit={this.searchByLocation} className="locations__form">
          <input
            name="input"
            className="locations__form--input"
            type="text"
            placeholder="Search city"
          />
          <button className="locations__form--button">
            <h5 className="submit"> SUBMIT</h5>
          </button>
        </form>
        {/* container for GoogleMaps and key */}
        <div
          className="locations__map-holder"
          style={{ height: "50vh", width: "100vw" }}
        >
          <WrappedMap
            googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=${API_KEY}`}
            loadingElement={<div style={{ height: `100%` }} />}
            containerElement={<div style={{ height: `100%` }} />}
            mapElement={<div style={{ height: `100%` }} />}
            className="locations__map-holder--flex"
          />
          <div className="locations__map-holder--flex-cities">
            <h3 className="h3">Cities to search by:</h3>
            <p className="p">Amherst</p>
            <p className="p">Batavia</p>
            <p className="p">Binghamton</p>
            <p className="p">Brockport</p>
            <p className="p">Buffalo</p>
            <p className="p">Canandaigua</p>
            <p className="p">Dunkirk</p>
            <p className="p">Fredonia</p>
            <p className="p">Geneseo</p>
            <p className="p">Henrietta</p>
            <p className="p">Niagara</p>
            <p className="p">Rochester</p>
            <p className="p">Sanborn</p>
          </div>
        </div>
      </main>
    );
  }
}
