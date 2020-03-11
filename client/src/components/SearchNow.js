import React, { Component } from "react";

export default class SearchNow extends Component {
  render() {
    return (
      <main>
        <h1>How would you like to search?</h1>
        <section>
          <card>
            <h3>Location</h3>
          </card>
          <card>
            <h3>Tuition</h3>
          </card>
          <card>
            <h3>Test Scores</h3>
          </card>
        </section>
      </main>
    );
  }
}
