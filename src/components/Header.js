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
          <h3 className="px-2">WORK</h3>
          <h3 className="px-2">ABOUT ME</h3>
          <h3>RESUME</h3>
        </div>
      </div>
    );
  }
}
