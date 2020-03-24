import React, { Component } from "react";
import headshot from "../assets/images/headshot.jpg";

export default class About extends Component {
  render() {
    return (
      <main className="main">
        <h1 className="main__welcome">about uChoose</h1>
        <h2 className="main__name">by fitale wari</h2>
        <section className="main__section">
          <img
            className="main__section--headshot"
            src={headshot}
            alt="fitale-headshot"
          />
          <div className="main__section--div">
            <h3 className="label">
              uChoose is more than just a university search tool. It is a new
              way to make smarter decisions when it comes to planning for
              university.
            </h3>
            <h3 className="para">
              uChoose suggests universities students ought to consider based on
              simplified campus match scores, tuition costs, and location
              matches. Not only can they find the schools that best fit their
              academic goals, but they can find institutions that are most
              affordable and begin planning to apply. With uChoose, students and
              families have the power to begin their univeristy search process
              and make the best decisions.
            </h3>
          </div>
        </section>
      </main>
    );
  }
}
