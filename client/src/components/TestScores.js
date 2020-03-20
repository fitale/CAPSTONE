import React, { Component } from "react";
import { Link } from "react-router-dom";

import Footer from "./Footer.js";
export default class TestScores extends Component {
  state = {
    testType: "select-one",
    testScore: "",
    isShowingUni: false,
    isNotShowingUni: false,
    matchUni: [],
    noMatchUni: [],
    oneID: ""
  };

  // update state to be test user want to search by
  handleChange = event => {
    console.log(event.target.value);
    this.setState({
      testType: event.target.value
    });
  };

  // submits form to search for Uni based on test scores
  handleEvent = event => {
    event.preventDefault();
    // console.log(`input value: ${event.target.input.value}`);
    const studentScore = event.target.input.value;
    this.props.uData.filter(uni => {
      if (
        this.state.testType === "SAT" &&
        (uni.SAT_reading_writing_25 === studentScore ||
          uni.SAT_reading_writing_75 === studentScore ||
          uni.SAT_math_25 === studentScore ||
          uni.SAT_math_75 === studentScore)
      ) {
        this.state.matchUni.push(uni);
        this.setState({
          isShowingUni: true
        });
      }
      if (
        this.state.testType === "ACT" &&
        (uni.ACT_25 === studentScore || uni.ACT_75 === studentScore)
      ) {
        this.state.matchUni.push(uni);
        this.setState({
          isShowingUni: true
        });
      } else {
        this.state.noMatchUni.push(uni);
        this.setState({
          isNotShowingUni: true
        });
      }
    });
  };

  // refresh page to begin another search
  pageRefresh = event => {
    window.location.reload();
  };

  // grabbing ID to link to individual university page
  idProps = event => {
    this.setState({
      oneID: event.target.value
    });
  };

  render() {
    // renders uni matches
    const uCampus = this.state.matchUni.map(uni => {
      return (
        <Link
          to={`/${uni.id}`}
          key={uni.id}
          onClick={this.idProps}
          className="test-scores__uni--link"
        >
          <li value={uni.id} className="li">
            {uni.campus}
          </li>
        </Link>
      );
    });

    // lets user know there are no uni matches and suggests they try searching again
    const noCampus = () => {
      if (
        this.state.matchUni.length === 0 &&
        this.state.noMatchUni.length > 0
      ) {
        return (
          <div className="test-scores__error--div">
            <h3 className="message">
              No Universities that match your preferred tuition per academic
              year
            </h3>

            <button onClick={this.pageRefresh} className="button">
              <h3 className="text">Search again</h3>
            </button>
          </div>
        );
      }
    };
    return (
      <main className="test-scores">
        <h3 className="test-scores__title">
          What'd you score on the SATs or ACTs?
        </h3>
        <form onSubmit={this.handleEvent} className="test-scores__form">
          <div className="test-scores__form--div">
            <h5 className="prompt">Search by SAT or ACT</h5>
            <select onChange={this.handleChange} className="select">
              <option value="select-one">--</option>
              <option value="SAT">SAT math</option>
              <option value="SAT">SAT reading and writing</option>
              <option value="ACT">ACT</option>
            </select>
          </div>
          <input
            type="text"
            name="input"
            placeholder="Enter your test score"
            className="test-scores__form--input"
            required
          />
          <button className="test-scores__form--button">
            <h5 className="submit">SUBMIT</h5>
          </button>
        </form>
        {this.state.isShowingUni && (
          <div className="test-scores__uni">
            <h1 className="test-scores__uni--matches">
              Universities that match you
            </h1>
            {uCampus}
            <button
              onClick={this.pageRefresh}
              className="test-scores__uni--button"
            >
              <h3 className="text">Search again</h3>
            </button>
          </div>
        )}
        {this.state.isNotShowingUni && (
          <div className="test-scores__error">{noCampus()}</div>
        )}
        <Footer />
      </main>
    );
  }
}
