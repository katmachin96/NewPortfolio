import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import AboutMe from "./pages/AboutMe";
import Landing from "./pages/Landing";
import Resume from "./pages/Resume";
import NoMatch from "./pages/NoMatch";

export default function AppRouter() {
  return (
    <Router>
      <div>
        <Header />
        <Switch>
          <Route exact path="/about">
            <AboutMe />
          </Route>
          <Route exact path="/resume">
            <Resume />
          </Route>
          <Route exact path="/">
            <Landing />
          </Route>
          <Route path="*">
            <NoMatch />
          </Route>
        </Switch>
        {/* <Footer /> */}
      </div>
    </Router>
  );
}
