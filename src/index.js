import React from "react";
import ReactDOM from "react-dom";
// import Landing from "./pages/Landing.js";
import AboutMe from "./pages/AboutMe";

import "bootstrap/dist/css/bootstrap.css";
import "./css/base.css";

ReactDOM.render(
  <React.StrictMode>
    <AboutMe />
    {/* <Landing /> */}
  </React.StrictMode>,
  document.getElementById("root")
);
