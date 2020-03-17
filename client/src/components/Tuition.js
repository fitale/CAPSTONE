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

  // sets state: tuition-in-state or tuition-out-of-state
  handleChangeTuitionType = event => {
    this.setState({
      tuition: event.target.value
    });
  };

  // sets state: tuition min
  handleChangeTuitionPriceMin = event => {
    this.setState({
      priceMin: event.target.value
    });
  };

  // sets state: tuition max
  handleChangeTuitionPriceMax = event => {
    this.setState({
      priceMax: event.target.value
    });
  };

  // submits form to search for university based on tuition price range
  handleSubmit = event => {
    event.preventDefault();
    this.props.uData.filter(uni => {
      if (
        this.state.tuition === "tuition_in_state" &&
        uni.tuition_in_state >= this.state.priceMin &&
        uni.tuition_in_state <= this.state.priceMax
      ) {
        this.state.inRangeUni.push(uni);
        this.setState({
          isShowingUni: true
        });
      }
      if (
        this.state.tuition === "tuition_out_state" &&
        uni.tuition_out_state >= this.state.priceMin &&
        uni.tuition_out_state <= this.state.priceMax
      ) {
        this.state.inRangeUni.push(uni);
        this.setState({
          isShowingUni: true
        });
      } else {
        this.state.outRangeUni.push(uni);
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
    console.log("link clicked");
    console.log(event.target.value);
    this.setState({
      oneID: event.target.value
    });
  };

  render() {
    // map through Uni in price range to display in browser
    const uCampus = this.state.inRangeUni.map(uni => {
      console.log(uni.id);
      return (
        <Link
          to={`/${uni.id}`}
          // to={`/:id`}
          key={uni.id}
          onClick={this.idProps}
          // oneUni={this.state.oneID}
          // params={{ id: `${uni.id}` }}
        >
          <li value={uni.id}>{uni.campus}</li>
        </Link>
      );
    });

    // let user know search is out of range and suggests trying again
    const noCampus = () => {
      if (
        this.state.inRangeUni.length === 0 &&
        this.state.outRangeUni.length > 0
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

    // const noCampus = this.state.outRangeUni.map((uni, i) => {
    //   if (
    //     this.state.inRangeUni.length === 0 &&
    //     this.state.outRangeUni.length > 0
    //   ) {
    //     return (
    //       <div>
    //         <h3>
    //           Unfortunately, there are no Universities that match your preferred
    //           tuition per academic year
    //         </h3>

    //         <button onClick={this.pageRefresh}>
    //           <h3>Search again</h3>
    //         </button>
    //       </div>
    //     );
    //   }
    // });

    {
      // if (
      //   this.state.tuition === 0 ||
      //   this.state.priceMin === 0 ||
      //   this.state.priceMax === 0
      // ) {
      //   return <h1>LOADING</h1>;
      // }
      // else {
      return (
        <main>
          <h3>What is your preferred tuition per academic year?</h3>
          <form onSubmit={this.handleSubmit}>
            <select onChange={this.handleChangeTuitionType}>
              <option value="select-one">--</option>
              <option value="tuition_in_state">In state</option>
              <option value="tuition_out_state">Out of state</option>
            </select>
            <select onChange={this.handleChangeTuitionPriceMin}>
              <option value="select-one">--</option>
              <option value="0">0</option>
              <option value="10000">10000</option>
              <option value="20000">20000</option>
              <option value="30000">30000</option>
              <option value="40000">40000</option>
            </select>
            <select onChange={this.handleChangeTuitionPriceMax}>
              <option value="select-one">--</option>
              <option value="10000">10000</option>
              <option value="20000">20000</option>
              <option value="30000">30000</option>
              <option value="40000">40000</option>
              <option value="50000">50000</option>
            </select>
            <input type="submit" value="Submit" />
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
}
// }
