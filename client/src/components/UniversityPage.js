import React, { Component } from "react";

import uImage from "../assets/images/uni.jpg";

const API_KEY = "AIzaSyA_JOFNWwvsXhy3dsmSRX7nqi9KQy5Db7U";
export default class UniversityPage extends Component {
  state = {
    oneUniID: "",
    oneUniv: {}
  };

  // passing id down as props
  componentDidMount() {
    // console.log(this.props.uData);
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
          <h5 className="u-container__button--text">ADD TO WATCH LIST</h5>
        </button>
        <h5 className="u-container__subheader">Campus Overview</h5>
        <div className="u-container__hero">
          <div className="u-container__hero--img">
            <img src={uImage} alt="univeristy" className="img" />
          </div>
          <div className="u-container__hero--div">
            <h5 className="sub">College Type</h5>
            <p className="label">{this.state.oneUniv.institution_type}</p>
            <h5 className="sub">College Level</h5>
            <p className="label">{this.state.oneUniv.institution_level}</p>
            <h5 className="sub">
              Enrollment as of {this.state.oneUniv.enrollment_as_of}
            </h5>
            <p className="sub-light">(part-time and full-time students)</p>
            <h6 className="sub">Undergraduate</h6>
            <p className="label">{this.state.oneUniv.undergrad_enrollment}</p>
            <h6 className="sub">Graduate</h6>
            <p className="label">{this.state.oneUniv.graduate_enrollment}</p>
            <h5 className="sub">Website</h5>
            <a href={`${this.state.oneUniv.campus_website}`} className="a">
              <p className="label">{this.state.oneUniv.campus_website}</p>{" "}
            </a>
            <h5 className="sub">Address</h5>
            <p className="label">{this.state.oneUniv.address}</p>
            <p className="label">
              {this.state.oneUniv.city}, {this.state.oneUniv.state}{" "}
              {this.state.oneUniv.zip}
            </p>
          </div>
        </div>
        <div className="u-container__div">
          <iframe
            title="iframe"
            className="u-container__div--iframe"
            src={`https://www.google.com/maps/embed/v1/place?key=${API_KEY}&q=${this.state.oneUniv.campus}`}
          ></iframe>
        </div>
        <section className="u-container__section">
          <div className="u-container__section--holder u-container__section--holder-mobile u-container__section--holder-desk">
            <h5 className="sub">Popular programs</h5>
            <p className="label">{this.state.oneUniv.program_1}</p>
            <p className="label">{this.state.oneUniv.program_2}</p>
            <p className="label">{this.state.oneUniv.program_3}</p>
            <p className="label">{this.state.oneUniv.program_4}</p>
            <p className="label">{this.state.oneUniv.program_5}</p>
            <h5 className="sub">Student to faculty ratio</h5>
            <p className="label">{this.state.oneUniv.student_to_faculty}</p>
            <h5 className="sub">Mission Statement</h5>
            <p className="label mission">{this.state.oneUniv.mission}</p>
          </div>
          <div className="u-container__section--holder ">
            <h5 className="sub">Total Applicants</h5>
            <p className="label">{this.state.oneUniv.applicants_total}</p>
            <h6 className="sub">Male</h6>
            <p className="label"> {this.state.oneUniv.applicants_male}</p>
            <h6 className="sub">Female</h6>
            <p className="label">{this.state.oneUniv.applicants_female}</p>
            <h5 className="sub">Admission Total </h5>
            <p className="label">{this.state.oneUniv.admission_total}</p>
            <h6 className="sub">Male</h6>
            <p className="label">{this.state.oneUniv.admission_male}</p>
            <h6 className="sub">Female </h6>
            <p className="label">{this.state.oneUniv.admission_female}</p>

            <h5 className="sub">Full Time Undergraduate Enrollment</h5>
            <p className="label">
              {this.state.oneUniv.full_time_undergrad_enrollment}
            </p>
            <h6 className="sub">Male</h6>
            <p className="label">
              {this.state.oneUniv.full_time_undergrad_male}
            </p>
            <h6 className="sub">Female</h6>
            <p className="label">
              {this.state.oneUniv.full_time_undergrad_female}
            </p>
          </div>
          <div className="u-container__section--holder u-container__section--holder-mobile">
            <h5 className="sub">Test Scores</h5>
            <h6 className="sub">SAT (reading and writing 25th percentile)</h6>
            <p className="label">{this.state.oneUniv.SAT_reading_writing_25}</p>
            <h6 className="sub">SAT (reading and writing 75th percentile)</h6>
            <p className="label">{this.state.oneUniv.SAT_reading_writing_75}</p>
            <h6 className="sub">SAT (math 25th percentile)</h6>
            <p className="label">{this.state.oneUniv.SAT_math_25}</p>
            <h6 className="sub">SAT (math 75th percentile)</h6>
            <p className="label">{this.state.oneUniv.SAT_math_75}</p>
            <h6 className="sub">ACT (25th percentile)</h6>
            <p className="label">{this.state.oneUniv.ACT_25}</p>
            <h6 className="sub">ACT (75th percentile)</h6>
            <p className="label">{this.state.oneUniv.ACT_75}</p>
          </div>
          <div className="u-container__section--holder u-container__section--holder-desk">
            <h5 className="sub">Tuition</h5>
            <h6 className="sub">In-state</h6>
            <p className="label">${this.state.oneUniv.tuition_in_state}</p>
            <h6 className="sub">Out-of-state</h6>
            <p className="label">${this.state.oneUniv.tuition_out_state}</p>
            <h5 className="sub">Application Fee</h5>
            <p className="label">${this.state.oneUniv.application_fee}</p>
          </div>
        </section>
      </main>
    );
  }
}
