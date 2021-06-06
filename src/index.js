import React from "react";
import ReactDOM from "react-dom";
// import Landing from "./pages/Landing.js";
// import AboutMe from "./pages/AboutMe";
import Resume from "./pages/Resume";

import "bootstrap/dist/css/bootstrap.css";
import "./css/base.css";

ReactDOM.render(
  <React.StrictMode>
    <Resume />
  </React.StrictMode>,
  document.getElementById("root")
);
