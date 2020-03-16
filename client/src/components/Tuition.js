import React, { Component } from "react";
import axios from "axios";

export default class Tuition extends Component {
  state = {
    tuition: "select-one",
    priceMin: "select-one",
    priceMax: "select-one"
  };

  handleChangeTuitionType = event => {
    this.setState({
      tuition: event.target.value
    });
  };

  handleChangeTuitionPriceMin = event => {
    this.setState({
      priceMin: event.target.value
    });
  };

  handleChangeTuitionPriceMax = event => {
    this.setState({
      priceMax: event.target.value
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    console.log(`this is the new state: ${JSON.stringify(this.state)}`);
    axios
      .get("http://localhost:5000/api/udata")
      .then(res => {
        console.log(res.data);
        res.data.filter(uni => {
          console.log(`this is in-state tuition: ${uni.tuition_in_state}`);
          console.log(`this is out-of-state tuition: ${uni.tuition_out_state}`);
          if (
            uni.tuition_in_state >= this.state.priceMin &&
            uni.tuition_in_state <= this.state.priceMax
          ) {
            console.log(`${uni.campus} in-state tuition is in range`);
          } else {
            console.log(`${uni.campus} in-state tuition is out of range`);
          }
        });
      })
      .catch(err => {
        console.log(err);
      });
  };

  render() {
    {
      if (this.state.tuition === 0 || this.state.price === 0) {
        return <h1>LOADING</h1>;
      } else {
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
            <h3>Name of Univeristy</h3>
          </main>
        );
      }
    }
  }
}
