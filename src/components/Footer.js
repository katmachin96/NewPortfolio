import React, { Component } from "react";
import "../css/footer.css";

export default class Footer extends Component {
  render() {
    return (
      <div className="footer-wrapper d-flex flex-row justify-content-between align-items-center">
        <div className="footer-left-section d-flex flex-row align-items-center">
          <span>© 2021 | Katherine Machin</span>
        </div>
        <div className="footer-right-section d-flex flex-row justify-content-between">
          <a href="#">LinkedIn</a>
          <a href="#">Behance</a>
          <a href="#">Dribbble</a>
        </div>
      </div>
    );
  }
}
