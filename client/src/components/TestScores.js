import React, { Component } from "react";
import { Link } from "react-router-dom";

import Footer from "./Footer.js";
export default class TestScores extends Component {
  state = {
    testType: "select-one",
    testScore: 0,
    isShowingUni: false,
    isNotShowingUni: false,
    matchUni: [],
    noMatchUni: [],
    oneID: ""
  };

  // update state to be test user want to search by
  handleChange = event => {
    this.setState({
      testType: event.target.value
    });
  };

  // submits form to search for Uni based on test scores
  handleEvent = event => {
    event.preventDefault();
    const studentScore = Number(event.target.input.value);
    // begin filtering through all university data
    this.props.uData.filter(uni => {
      // checking state to search by SAT
      if (this.state.testType === "SAT") {
        // checking for null values
        if (
          !uni.SAT_reading_writing_25 ||
          !uni.SAT_reading_writing_75 ||
          !uni.SAT_math_25 ||
          !uni.SAT_math_75
        ) {
          this.state.noMatchUni.push(uni);
          return this.setState({
            isNotShowingUni: true
          });
        }
        // comparing true values
        else if (
          uni.SAT_reading_writing_25 === studentScore ||
          uni.SAT_reading_writing_75 === studentScore ||
          uni.SAT_math_25 === studentScore ||
          uni.SAT_math_75 === studentScore
        ) {
          this.state.matchUni.push(uni);
          return this.setState({
            isShowingUni: true
          });
        }
      }
      // checking state to search by ACT
      else if (this.state.testType === "ACT") {
        // checking for null values
        if (!uni.ACT_25 || !uni.ACT_75) {
          this.state.noMatchUni.push(uni);
          return this.setState({
            isNotShowingUni: true
          });
        }
        // comparing true values
        else if (uni.ACT_25 === studentScore || uni.ACT_75 === studentScore) {
          this.state.matchUni.push(uni);
          return this.setState({
            isShowingUni: true
          });
        }
      }
      // true values with no matches
      else {
        this.state.noMatchUni.push(uni);
        return this.setState({
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
    // renders uni matches as links to university profile
    const uCampus = this.state.matchUni.map(uni => {
      return (
        <Link
          to={`/${uni._id}`}
          key={uni._id}
          onClick={this.idProps}
          className="test-scores__uni--link"
        >
          <li value={uni._id} className="li">
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
            <h3 className="message">No Universities match your test scores</h3>

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
        {/* renders if there are universities that match search parameters */}
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
        {/* renders if no universities were found to match search parameters */}
        {this.state.isNotShowingUni && (
          <div className="test-scores__error">{noCampus()}</div>
        )}
        <Footer />
      </main>
    );
  }
}
