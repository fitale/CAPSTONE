import React, { Component } from "react";
import heroImage from "../assets/images/hero.jpg";

export default class Hero extends Component {
  render() {
    return (
      <section className="hero">
        <img src={heroImage} alt="hero-image" className="hero__image" />
        <h3 className="hero__text">Find the University that suits you</h3>
      </section>
    );
  }
}
