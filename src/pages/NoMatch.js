import React, { Component } from "react";
import { Link } from "react-router-dom";

import "../css/nomatch.css";

export default class NoMatch extends Component {
  render() {
    return (
      <div className="no-match-wrapper d-flex flex-column justify-content-center align-items-center vh-100">
        <h1>Ahhh! I received a 404</h1>
        <p>
          I'm not quite sure where you're trying to go. Wanna try the{" "}
          <Link to="/">homepage</Link> instead?
        </p>
      </div>
    );
  }
}
