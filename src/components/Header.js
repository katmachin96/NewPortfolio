import React, { Component } from "react";
import useWindowDimensions from "../helpers/windowDimensions";
import { HiMenu } from "react-icons/hi";
import "../css/header.css";

export default function Header() {
  const { width, _ } = useWindowDimensions();
  const renderMobileHeader = () => {
    return (
      <div className="header-wrapper fixed-top d-flex align-items-center">
        <HiMenu style={{ color: "#fff" }} />
        <div className="d-flex justify-content-center align-items-center flex-grow-1">
          <h2>Kat Machin</h2>
        </div>
      </div>
    );
  };
  const renderDesktopHeader = () => {
    return (
      <div className="header-wrapper fixed-top d-flex justify-content-between align-items-center">
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
  };
  if (width <= 600) {
    return renderMobileHeader();
  } else {
    return renderDesktopHeader();
  }
}
