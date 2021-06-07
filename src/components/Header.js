import React, { Component } from "react";
import "../css/header.css";

export default class Header extends Component {
  render() {
    return (
      <div className="header-wrapper fixed-top d-flex justify-content-between">
        <div className="left-section">
          <h2>Kat Machin</h2>
        </div>
        <div className="right-section d-flex flex-row">
          <a className="mx-5" href="/">
            WORK
          </a>
          <a className="mx-5" href="/about">
            ABOUT ME
          </a>
          <a className="mx-5" href="/resume">
            RESUME
          </a>
        </div>
      </div>
    );
  }
}
