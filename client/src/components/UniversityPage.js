import React, { Component } from "react";
import Footer from "./Footer";

import uImage from "../assets/images/hero.jpg";

export default class UniversityPage extends Component {
  state = {
    oneUniID: "",
    oneUniv: {}
  };

  componentDidMount() {
    console.log(`ID passed as props: ${this.props.match.params.id}`);
    const oneUniv = this.props.uData.map(uni => {
      if (uni.id === this.props.match.params.id) {
        this.setState(
          {
            oneUniID: this.props.match.params.id,
            oneUniv: uni
          },
          () => {
            console.log(`stateID: ${this.state.oneUniID}`);
            console.log(`stateUNIV: ${JSON.stringify(this.state.oneUniv)}`);
          }
        );
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
          <div className="u-container__holder--left">
            <h5 className="sub">College Type</h5>
            <p className="label">{this.state.oneUniv.institution_type}</p>
          </div>
          <div className="u-container__holder--right">
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
          <div className="u-container__holder3--div">
            <h6 className="sub">Undergraduate</h6>
            <p className="label">{this.state.oneUniv.undergrad_enrollment}</p>
          </div>
          <div className="u-container__holder3--div">
            <h6 className="sub">Graduate</h6>
            <p className="label">{this.state.oneUniv.graduate_enrollment}</p>
          </div>
        </div>
        <div className="u-container__holder4">
          <div className="u-container__holder4--div">
            <h5 className="sub">Website</h5>
            <p className="label">{this.state.oneUniv.campus_website}</p>
          </div>
          <div className="u-container__holder4--div">
            <h5 className="sub">Address</h5>
            <p className="label">{this.state.oneUniv.address}</p>
            <p className="label">
              {this.state.oneUniv.city}, {this.state.oneUniv.state}{" "}
              {this.state.oneUniv.zip}
            </p>
          </div>
        </div>
        <p style={{ color: "grey" }}>INSERT MAP HERE</p>
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
            <h6 className="sub">Applicants</h6>
            <div className="flex2">
              <div className="flex2__div">
                <h6 className="flex2__div--sub">Total:</h6>
                <p className="flex2__div--label">
                  {this.state.oneUniv.applicants_total}
                </p>
              </div>
              <div className="flex2__div">
                <h6 className="flex2__div--sub">Male:</h6>
                <p className="flex2__div--label">
                  {" "}
                  {this.state.oneUniv.applicants_male}
                </p>
              </div>
              <div className="flex2__div">
                <h6 className="flex2__div--sub">Female:</h6>
                <p className="flex2__div--label">
                  {this.state.oneUniv.applicants_female}
                </p>
              </div>
            </div>
          </div>
          <h6>Test Scores</h6>
          <div>
            <h6>SAT (reading and writing 25th percentile)</h6>
            <p>{this.state.oneUniv.SAT_reading_writing_25}</p>
            <h6>SAT (reading and writing 75th percentile)</h6>
            <p>{this.state.oneUniv.SAT_reading_writing_75}</p>
            <h6>SAT (math 25th percentile)</h6>
            <p>{this.state.oneUniv.SAT_math_25}</p>
            <h6>SAT (math 75th percentile)</h6>
            <p>{this.state.oneUniv.SAT_math_75}</p>
            <h6>ACT (25th percentile)</h6>
            <p>{this.state.oneUniv.ACT_25}</p>
            <h6>ACT (75th percentile)</h6>
            <p>{this.state.oneUniv.ACT_75}</p>
          </div>
          <h6>Aplpication Fee</h6>
          <p>{this.state.oneUniv.application_fee}</p>
          <h6>Student to faculty ratio</h6>
          <p>{this.state.oneUniv.student_to_faculty}</p>
          <h6>Admission</h6>
          <div>
            <h6>Total: </h6>
            <p>{this.state.oneUniv.admission_total}</p>
            <h6>Male:</h6>
            <p>{this.state.oneUniv.admission_male}</p>
            <h6>Female: </h6>
            <p>{this.state.oneUniv.admission_female}</p>
          </div>
          <h6>Enrollment</h6>
          <div>
            <h6>Total: </h6>
            <p>{this.state.oneUniv.total_enrollment}</p>
            <h6>Full time undergraduates:</h6>
            <p>{this.state.oneUniv.full_time_undergrad_enrollment}</p>
            <h6>Full time undergraduates (male):</h6>
            <p>{this.state.oneUniv.full_time_undergrad_male}</p>
            <h6>Full time undergraduates (female):</h6>
            <p>{this.state.oneUniv.full_time_undergrad_female}</p>
          </div>
          <h6>Tuition</h6>
          <div>
            <h6>In-state:</h6>
            <p>{this.state.oneUniv.tuition_in_state}</p>
            <h6>Out-of-state:</h6>
            <p>{this.state.oneUniv.tuition_out_state}</p>
          </div>
          <h5>Campus Culture</h5>
          <p>
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
        </section>
        <Footer />
      </main>
    );
  }
}
