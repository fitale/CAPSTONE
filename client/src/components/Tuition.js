import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Tuition extends Component {
  state = {
    tuition: "select-one",
    priceMin: "select-one",
    priceMax: "select-one",
    isShowingUni: false,
    isNotShowingUni: false,
    inRangeUni: [],
    outRangeUni: [],
    oneID: ""
  };

  // setState: tuition-in-state or tuition-out-of-state
  handleChangeTuitionType = event => {
    this.setState({
      tuition: event.target.value
    });
  };

  // setState: tuition min
  handleChangeTuitionPriceMin = event => {
    this.setState({
      priceMin: event.target.value
    });
  };

  // setState: tuition max
  handleChangeTuitionPriceMax = event => {
    this.setState({
      priceMax: event.target.value
    });
  };

  // submits form to search for university based on tuition price range
  handleSubmit = event => {
    event.preventDefault();
    // reset form
    event.target.reset();
    // begin filtering through university data
    this.props.uData.filter(uni => {
      // checks for null values
      if (!uni.tuition_out_state || !uni.tuition_in_state) {
        this.state.outRangeUni.push(uni);
        return this.setState({
          isNotShowingUni: true
        });
      }
      // if not null and in range for in-state tuition
      else if (
        this.state.tuition === "tuition_in_state" &&
        uni.tuition_in_state >= this.state.priceMin &&
        uni.tuition_in_state <= this.state.priceMax
      ) {
        this.state.inRangeUni.push(uni);
        return this.setState({
          isShowingUni: true
        });
      }
      // if not null and in range for out-of-state tuition
      else if (
        this.state.tuition === "tuition_out_state" &&
        uni.tuition_out_state >= this.state.priceMin &&
        uni.tuition_out_state <= this.state.priceMax
      ) {
        this.state.inRangeUni.push(uni);
        return this.setState({
          isShowingUni: true
        });
      }
      // if not null and no matches appear
      else {
        this.state.outRangeUni.push(uni);
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
    // map through uniData in price range to display in browser
    const uCampus = this.state.inRangeUni.map(uni => {
      return (
        <Link
          to={`/${uni._id}`}
          key={uni._id}
          onClick={this.idProps}
          className="link"
        >
          <li value={uni._id} className="li">
            {uni.campus}
          </li>
        </Link>
      );
    });

    // lets user know search is out of range and instructs them to try again
    const noCampus = () => {
      if (
        this.state.inRangeUni.length === 0 &&
        this.state.outRangeUni.length > 0
      ) {
        return (
          <div className="main-tuition__error--div">
            <h3 className="h3">
              No Universities match your preferred tuition per academic year
            </h3>

            <button onClick={this.pageRefresh} className="button">
              <h3 className="button__inner-text">Search again</h3>
            </button>
          </div>
        );
      }
    };

    return (
      <main className="main-tuition">
        <h3 className="main-tuition__title">
          What is your preferred tuition per academic year?
        </h3>
        <form onSubmit={this.handleSubmit} className="main-tuition__form">
          <div className="main-tuition__form--flex">
            <h5 className="h5">
              Are you searching for universities in-state or out-of-state?
            </h5>
            <select onChange={this.handleChangeTuitionType} className="select">
              <option value="select-one">--</option>
              <option value="tuition_in_state">In state</option>
              <option value="tuition_out_state">Out of state</option>
            </select>
          </div>
          <div className="main-tuition__form--flex">
            <h5 className="h5">
              Select your minimum annual tuition payment preference
            </h5>
            <select
              onChange={this.handleChangeTuitionPriceMin}
              className="select"
            >
              <option value="select-one">--</option>
              <option value="0">$0</option>
              <option value="10000">$10000</option>
              <option value="20000">$20000</option>
              <option value="30000">$30000</option>
              <option value="40000">$40000</option>
            </select>
          </div>
          <div className="main-tuition__form--flex">
            <h5 className="h5">
              Select your maximum annual tuition payment preference
            </h5>
            <select
              onChange={this.handleChangeTuitionPriceMax}
              className="select"
            >
              <option value="select-one">--</option>
              <option value="10000">$10000</option>
              <option value="20000">$20000</option>
              <option value="30000">$30000</option>
              <option value="40000">$40000</option>
              <option value="50000">$50000</option>
            </select>
          </div>

          <button className="main-tuition__form--submit">
            <h5 className="inner-text">SEARCH</h5>
          </button>
        </form>
        {/* renders if there are universities that match search parameters */}
        {this.state.isShowingUni && (
          <div className="main-tuition__uni">
            <h1 className="main-tuition__uni--title">
              Universities that match you
            </h1>
            {uCampus}
            <button onClick={this.pageRefresh} className="button">
              <h3 className="button__inner-text">Search again</h3>
            </button>
          </div>
        )}
        {/* renders if there are NO universities that match search parameters */}
        {this.state.isNotShowingUni && (
          <div className="main-tuition__error">{noCampus()}</div>
        )}
      </main>
    );
  }
}
