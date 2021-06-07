import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";

import "../css/aboutme.css";
export default class AboutMe extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: "",
      lastName: "",
      subject: "",
      body: "",
    };
  }

  handleChange = (event) => {
    const value = event.target.value;
    this.setState({
      [event.target.name]: value,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    if (
      this.state.firstName == "" ||
      this.state.lastName == "" ||
      this.state.subject == "" ||
      this.state.body == ""
    ) {
      alert("Please fill out all fields to contact me!");
      return;
    }
    console.log(this.state.firstName);
    console.log(this.state.lastName);
    console.log(this.state.subject);
    console.log(this.state.body);
  };

  render() {
    return (
      <div className="about-wrapper">
        <Row className="hero-wrapper">
          <Col md={4} className="left-section d-flex flex-column">
            <h1>Hello,</h1>
            <p>
              My name is Katherine Machin, a Cuban Americna UIUX designer Based
              in Miami Florida. Lorem ipsum dolor sit amet, consectetur
              adipiscing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
              exercitation ullamco laboris nisi ut aliquip ex ea commodo
              consequat. Duis aute irure dolor in reprehenderit in voluptate
              velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
              occaecat cupidatat non proident, sunt in culpa qui officia
              deserunt mollit anim id est laborum.b
            </p>
          </Col>
          <Col md={8} className="right-section">
            <div className="inner-img-container"></div>
          </Col>
        </Row>
        <Row className="skills-section">
          <Col
            md={6}
            className="yellow-section d-flex flex-column justify-content-center"
            style={{ padding: "5%" }}
          >
            <h4 className="blue-text">Visual Design</h4>
            <p className="blue-text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.b
            </p>
          </Col>
          <Col
            md={6}
            className="multi-column d-flex flex-column justify-content-center p-md-0"
          >
            <div className="cyan-section d-flex flex-column justify-content-center flex-grow-1">
              <h4 className="blue-text">Interaction design</h4>
              <p className="blue-text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis a
              </p>
            </div>
            <div className="pink-section d-flex flex-column justify-content-center flex-grow-1">
              <h4>Product Thinking</h4>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis a
              </p>
            </div>
            <div className="blue-section d-flex flex-column justify-content-center flex-grow-1">
              <h4>Development</h4>
              <p>
                Programtic strategies <br />
                Javascript, HTML, CSS, React, Vue
              </p>
            </div>
          </Col>
        </Row>
        <div
          className="banner-wrapper d-flex flex-row"
          style={{
            padding: "1% 5%",
            overflowX: "scroll",
          }}
        >
          <img src="https://picsum.photos/200/300" className="company-logo" />
          <img src="https://picsum.photos/200/300" className="company-logo" />
          <img src="https://picsum.photos/200/300" className="company-logo" />
          <img src="https://picsum.photos/200/300" className="company-logo" />
          <img src="https://picsum.photos/200/300" className="company-logo" />
          <img src="https://picsum.photos/200/300" className="company-logo" />
          <img src="https://picsum.photos/200/300" className="company-logo" />
        </div>
        <Container fluid className="contact-form-wrapper">
          <Row>
            <Col
              md={6}
              className="contact-form-text d-flex flex-column"
              style={{ padding: "5%" }}
            >
              <h3>Contact Me</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
                <br />
                <br />
                Email: kmachin@alumni.risd.edu
                <br />
                Phone: (305)-965-1643
                <br />
              </p>
            </Col>
            <Col
              md={6}
              className="contact-form d-flex flex-column"
              style={{ padding: "5%" }}
            >
              <form onSubmit={this.handleSubmit} id="form">
                <div className="identifier-wrapper d-flex flex-row mb-3">
                  <input
                    type="text"
                    name="firstName"
                    id="firstName"
                    placeholder="First Name"
                    className="flex-grow-1"
                    style={{ marginRight: "2%" }}
                    value={this.state.firstName}
                    onChange={this.handleChange}
                  />
                  <input
                    type="text"
                    name="lastName"
                    id="lname"
                    placeholder="Last Name"
                    className="flex-grow-1"
                    value={this.state.lastName}
                    onChange={this.handleChange}
                  />
                </div>
                <div className="subject-wrapper d-flex flex-row mb-3">
                  <input
                    type="text"
                    name="subject"
                    id="subject"
                    placeholder="Subject"
                    className="flex-grow-1"
                    value={this.state.subject}
                    onChange={this.handleChange}
                  />
                </div>
                <div className="body-wrapper d-flex flex-row mb-3">
                  <textarea
                    type="text"
                    name="body"
                    id="body"
                    placeholder="Any Questions?"
                    className="flex-grow-1"
                    value={this.state.body}
                    onChange={this.handleChange}
                  />
                </div>
                <div className="submit-wrapper d-flex">
                  <input
                    type="submit"
                    value="Submit"
                    className="flex-grow-1"
                    id="submit-btn"
                  />
                </div>
              </form>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}
