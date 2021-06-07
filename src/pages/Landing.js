import React, { Component } from "react";
import ProjectCard from "../components/ProjectCard";
import { overviews } from "../data/projectOverviews";
import "../css/landing.css";

export default class Landing extends Component {
  render() {
    return (
      <div>
        <div className="landing-hero-wrapper">
          <h1>
            User Interface <span>&</span>&nbsp;Experience designer
          </h1>
          <h3>
            Creating intuitive human centered experiences. I work on digital
            design, user experiences, and brand identities.
          </h3>
        </div>
        <div className="project-section-wrapper">
          <div className="section-header d-flex flex-row justify-content-between">
            <div className="left-section">
              <h4 className="bold-text">Projects</h4>
            </div>
            <div className="right-section d-flex">
              <div
                className="filter-wrapper d-flex"
                style={{ paddingRight: "10px" }}
              >
                <p className="bold-text">Device Type</p>
                &nbsp;
                <p className="light-grey-text">All</p>
              </div>
              <div className="filter-wrapper d-flex">
                <p className="bold-text">Design Type</p>
                &nbsp;
                <p className="light-grey-text">All</p>
              </div>
            </div>
          </div>
          <div className="project-grid w-100">
            {overviews.map((projectOverview) => (
              <ProjectCard data={projectOverview} />
            ))}
          </div>
        </div>
      </div>
    );
  }
}
