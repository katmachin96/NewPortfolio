import React, { Component } from "react";

import "../css/projectcard.css";

export default class ProjectCard extends Component {
  render() {
    return (
      <div className="project-card-wrapper d-flex flex-column">
        <img src={this.props.data.img} className="img-fluid" />
        <div className="project-header-section d-flex flex-row">
          <div className="card-text-section d-flex flex-column justify-content-between">
            <div className="top-section">
              <div className="d-flex flex-row align-items-center">
                <h4 className="bold-text">{this.props.data.title}</h4>
                &nbsp;
                <span className="blue-text">{this.props.data.type}</span>
              </div>
              <p>{this.props.eyebrow}</p>
            </div>
            <div className="bottom-section">
              {this.props.data.tags.map((tag) => (
                <span>{tag} | &nbsp;</span>
              ))}
            </div>
          </div>
          <div className="arrow-section d-flex align-items-center justify-content-center">
            <img src="/assets/icons/arrow_right.svg" />
          </div>
        </div>
      </div>
    );
  }
}
