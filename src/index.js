import React from "react";
import ReactDOM from "react-dom";
import AppRouter from "./AppRouter";
// import Resume from "./pages/Resume";

import "bootstrap/dist/css/bootstrap.css";
import "./css/base.css";

ReactDOM.render(
  <React.StrictMode>
    <AppRouter />
    {/* <Resume /> */}
  </React.StrictMode>,
  document.getElementById("root")
);
