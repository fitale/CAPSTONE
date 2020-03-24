import React, { Component } from "react";

import IPEDS from "../assets/images/IPEDS.png";
import nygov from "../assets/images/nygov.png";
import myAPI from "../assets/images/myAPI.png";
export default class Data extends Component {
  render() {
    return (
      <main className="main-data">
        <h1 className="main-data__h1">DATA</h1>
        <div className="main-data__div">
          <div className="main-data__div--flex ">
            <a
              className="a"
              href="https://data.ny.gov/api/views/3cij-nwhw/rows.json?accessType=DOWNLOAD&sorting=true"
            >
              <img className="img" src={nygov} alt="site-screenshot" />
            </a>
            <h3 className="h3">
              Consulted data.ny.gov to build uChoose's API. data.ny.gov provides
              highlights on undergraduate and graduate enrollment, as well as
              some program area offerings for schools registered in the State
              University of New York (SUNY) System.
            </h3>
          </div>
          <div className="main-data__div--flex">
            <a
              className="a"
              href="https://nces.ed.gov/ipeds/datacenter/InstitutionByName.aspx"
            >
              <img className="img" src={IPEDS} alt="site-screenshot" />
            </a>
            <h3 className="h3">
              Researched universities using IPEDS - the Institute of Education
              Sciences (IES) - the US’s leading source for rigorous, independent
              education research, evaluation and statistics.
            </h3>
          </div>

          <div className="main-data__div--flex">
            <a className="a" href="http://localhost:5000/api/udata">
              <img className="img" src={myAPI} alt="site-screenshot" />
            </a>
            <h3 className="h3">
              Built the API that uChoose uses to teach users about schools.
              Highlights information about campus overview and provides insight
              to admission statistics.
            </h3>
          </div>
        </div>
      </main>
    );
  }
}
