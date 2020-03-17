import React, { Component } from "react";
import Footer from "./Footer";

import uImage from "../assets/images/hero.jpg";

export default class UniversityPage extends Component {
  state = {
    uniData: []
  };

  render() {
    return (
      <main className="u-container">
        <h3 className="u-container__title">Uni name</h3>
        <button className="u-container__button">
          <h5 className="u-container__button--text">ADD TO UNI WATCH LIST</h5>
        </button>
        <h5 className="u-container__subheader">Campus Overview</h5>
        <div className="u-container__hero-holder">
          <img
            src={uImage}
            alt="univeristy"
            className="u-container__hero-holder--img"
          />
        </div>
        <h5>College Type</h5>
        <p>description</p>
        <h5>Enrollment as of Fall 2018</h5>
        <p>some num</p>
        <h6>Undergraduate</h6>
        <p>another num</p>
        <h6>Graduate</h6>
        <p>and another num</p>
        <h5>Website</h5>
        <p>url here</p>
        <h5>Address</h5>
        <p>some address</p>
        <h5>Popular programs</h5>
        <p>one</p>
        <p>two</p>
        <p>three</p>
        <p>four</p>
        <p>five</p>
        <h5>Admission Overview</h5>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.
        </p>
        <h5>Campus Culture</h5>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.
        </p>
        <Footer />
      </main>
    );
  }
}
