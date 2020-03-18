import React, { Component } from "react";
import { Link } from "react-router-dom";

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
        // console.log(`test scores match`);
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
        // console.log(`no test scores match`);
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
    // console.log("link clicked");
    // console.log(event.target.value);
    this.setState({
      oneID: event.target.value
    });
  };

  render() {
    // renders uni matches
    const uCampus = this.state.matchUni.map(uni => {
      console.log(uni.id);
      return (
        <Link to={`/${uni.id}`} key={uni.id} onClick={this.idProps}>
          <li value={uni.id}>{uni.campus}</li>
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
          <div>
            <h3>
              Unfortunately, there are no Universities that match your preferred
              tuition per academic year
            </h3>

            <button onClick={this.pageRefresh}>
              <h3>Search again</h3>
            </button>
          </div>
        );
      }
    };
    return (
      <main>
        <h3>What'd you score on the SATs or ACTs?</h3>
        <form onSubmit={this.handleEvent}>
          <select onChange={this.handleChange}>
            <option value="select-one">--</option>
            <option value="SAT">SAT math</option>
            <option value="SAT">SAT reading and writing</option>
            <option value="ACT">ACT</option>
          </select>
          <input
            type="text"
            name="input"
            placeholder="Enter your SAT or ACT test scores here"
          />
          <button>Find schools now</button>
        </form>
        {this.state.isShowingUni && (
          <div>
            <h1>Universities that match you</h1>
            {uCampus}
            <button onClick={this.pageRefresh}>
              <h3>Search again</h3>
            </button>
          </div>
        )}
        {this.state.isNotShowingUni && <div>{noCampus()}</div>}
      </main>
    );
  }
}
