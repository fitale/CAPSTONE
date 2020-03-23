import React, { Component } from "react";

import uImage from "../assets/images/hero.jpg";

const API_KEY = "AIzaSyA_JOFNWwvsXhy3dsmSRX7nqi9KQy5Db7U";
export default class UniversityPage extends Component {
  state = {
    oneUniID: "",
    oneUniv: {}
  };

  // passing id down as props
  componentDidMount() {
    this.props.uData.map(uni => {
      if (uni._id === this.props.match.params._id) {
        return this.setState({
          oneUniID: this.props.match.params._id,
          oneUniv: uni
        });
      }
    });
  }

  render() {
    return (
      <main className="u-container">
        <h3 className="u-container__title">{this.state.oneUniv.campus}</h3>
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
        <div className="u-container__holder">
          <div className="u-container__holder--flex">
            <h5 className="sub">College Type</h5>
            <p className="label">{this.state.oneUniv.institution_type}</p>
          </div>
          <div className="u-container__holder--flex">
            <h5 className="sub">College Level</h5>
            <p className="label">{this.state.oneUniv.institution_level}</p>
          </div>
        </div>
        <div className="u-container__holder2">
          <h5 className="u-container__holder2--sub">
            Enrollment as of {this.state.oneUniv.enrollment_as_of}
          </h5>
          <p className="u-container__holder2--sub-light">
            (part-time and full-time students)
          </p>
        </div>
        <div className="u-container__holder3">
          <div className="u-container__holder3--flex">
            <h6 className="sub">Undergraduate</h6>
            <p className="label">{this.state.oneUniv.undergrad_enrollment}</p>
          </div>
          <div className="u-container__holder3--flex">
            <h6 className="sub">Graduate</h6>
            <p className="label">{this.state.oneUniv.graduate_enrollment}</p>
          </div>
        </div>
        <div className="u-container__holder4">
          <div className="u-container__holder4--flex">
            <h5 className="sub">Website</h5>
            <p className="label">{this.state.oneUniv.campus_website}</p>
          </div>
          <div className="u-container__holder4--flex">
            <h5 className="sub">Address</h5>
            <p className="label">{this.state.oneUniv.address}</p>
            <p className="label">
              {this.state.oneUniv.city}, {this.state.oneUniv.state}{" "}
              {this.state.oneUniv.zip}
            </p>
          </div>
        </div>
        <iframe
          title="iframe"
          className="u-container__iframe"
          src={`https://www.google.com/maps/embed/v1/place?key=${API_KEY}&q=${this.state.oneUniv.campus}`}
        ></iframe>

        <div className="u-container__holder5">
          <div className="u-container__holder5--flex">
            <h5 className="sub">Popular programs</h5>
          </div>
          <div className="u-container__holder5--flex">
            <p className="label">{this.state.oneUniv.program_1}</p>
            <p className="label">{this.state.oneUniv.program_2}</p>
            <p className="label">{this.state.oneUniv.program_3}</p>
            <p className="label">{this.state.oneUniv.program_4}</p>
            <p className="label">{this.state.oneUniv.program_5}</p>
          </div>
        </div>
        <section className="u-container__section">
          <h5 className="u-container__section--h5">Admission Overview</h5>
          <div className="u-container__section--flex">
            <h6 className="label">Applicants</h6>
            <div className="flex2">
              <div className="flex2__div">
                <h6 className="flex2__div--label">Total</h6>
                <p className="flex2__div--para">
                  {this.state.oneUniv.applicants_total}
                </p>
              </div>
              <div className="flex2__div">
                <h6 className="flex2__div--label">Male</h6>
                <p className="flex2__div--para">
                  {" "}
                  {this.state.oneUniv.applicants_male}
                </p>
              </div>
              <div className="flex2__div">
                <h6 className="flex2__div--label">Female</h6>
                <p className="flex2__div--para">
                  {this.state.oneUniv.applicants_female}
                </p>
              </div>
            </div>
          </div>
          <div className="u-container__section--scores">
            <h6 className="label">Test Scores</h6>
            <div className="div">
              <h6 className="div__label">
                SAT (reading and writing 25th percentile)
              </h6>
              <p className="div__para">
                {this.state.oneUniv.SAT_reading_writing_25}
              </p>
              <h6 className="div__label">
                SAT (reading and writing 75th percentile)
              </h6>
              <p className="div__para">
                {this.state.oneUniv.SAT_reading_writing_75}
              </p>
              <h6 className="div__label">SAT (math 25th percentile)</h6>
              <p className="div__para">{this.state.oneUniv.SAT_math_25}</p>
              <h6 className="div__label">SAT (math 75th percentile)</h6>
              <p className="div__para">{this.state.oneUniv.SAT_math_75}</p>
              <h6 className="div__label">ACT (25th percentile)</h6>
              <p className="div__para">{this.state.oneUniv.ACT_25}</p>
              <h6 className="div__label">ACT (75th percentile)</h6>
              <p className="div__para">{this.state.oneUniv.ACT_75}</p>
            </div>
          </div>

          <h6 className="u-container__section--label">Application Fee</h6>
          <p className="u-container__section--para">
            ${this.state.oneUniv.application_fee}
          </p>
          <h6 className="u-container__section--label">
            Student to faculty ratio
          </h6>
          <p className="u-container__section--para">
            {this.state.oneUniv.student_to_faculty}
          </p>
        </section>
        <section className="u-container__section">
          <h5 className="u-container__section--h5">Admission</h5>
          <div className="u-container__section--div">
            <h6 className="label">Total: </h6>
            <p className="para">{this.state.oneUniv.admission_total}</p>
            <h6 className="label">Male:</h6>
            <p className="para">{this.state.oneUniv.admission_male}</p>
            <h6 className="label">Female: </h6>
            <p className="para">{this.state.oneUniv.admission_female}</p>
          </div>
          <div className="u-container__section--column">
            <h6 className="label">Undergraduate Enrollment</h6>
            <div className="inner-div">
              <div className="inner-div__flex">
                <h6 className="inner-div__flex--h6">Total </h6>
                <p className="inner-div__flex--para">
                  {this.state.oneUniv.total_enrollment}
                </p>
              </div>
              <div className="inner-div__flex">
                <h6 className="inner-div__flex--h6">Full time</h6>
                <p className="inner-div__flex--para">
                  {this.state.oneUniv.full_time_undergrad_enrollment}
                </p>
              </div>
              <div className="inner-div__flex">
                <h6 className="inner-div__flex--h6">Full time (male)</h6>
                <p className="inner-div__flex--para">
                  {this.state.oneUniv.full_time_undergrad_male}
                </p>
              </div>
              <div className="inner-div__flex">
                <h6 className="inner-div__flex--h6">Full time (female)</h6>
                <p className="inner-div__flex--para">
                  {this.state.oneUniv.full_time_undergrad_female}
                </p>
              </div>
            </div>
          </div>
          <div className="u-container__section--tuition">
            <h6 className="label">Tuition</h6>
            <div className="div">
              <div className="div__inner-div">
                <h6 className="div__inner-div--label">In-state</h6>
                <p className="div__inner-div--para">
                  {this.state.oneUniv.tuition_in_state}
                </p>
              </div>
              <div className="div__inner-div">
                <h6 className="div__inner-div--label">Out-of-state</h6>
                <p className="div__inner-div--para">
                  {this.state.oneUniv.tuition_out_state}
                </p>
              </div>
            </div>
          </div>
        </section>
        <div className="u-container__culture">
          <h5 className="u-container__culture--h5">Campus Culture</h5>
          <p className="u-container__culture--para">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
          </p>
        </div>
      </main>
    );
  }
}
