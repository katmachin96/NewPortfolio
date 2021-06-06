import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";
import "../css/resume.css";

export default class Resume extends Component {
  render() {
    return (
      <Container fluid className="resume-wrapper" style={{ padding: "5%" }}>
        <Container>
          <Row className="metadata-section">
            <Col md="4">
              <h2>Resume</h2>
            </Col>
            <Col md="8">
              <p>
                Or get a PDF version <a href="#">here</a>
              </p>
            </Col>
          </Row>
          <Row className="education-section my-5">
            <Col md="4">
              <h3 className="d-flex flex-row align-items-center">
                <div className="section-marker yellow-div"></div> &nbsp;
                Education
              </h3>
            </Col>
            <Col md="8" className="d-flex flex-column justify-content-between">
              <div className="education-entry">
                <p>Rhode Island School of Design | Bachelors of Fine Art</p>
                <p>
                  Graphic Design specialization
                  <br />
                  Providence, Rhode island 2020
                </p>
              </div>
              <div className="education-entry">
                <p>Rhode Island School of Design | Bachelors of Fine Art</p>
                <p>
                  Graphic Design specialization
                  <br />
                  Providence, Rhode island 2020
                </p>
              </div>
              <div className="education-entry">
                <p>Rhode Island School of Design | Bachelors of Fine Art</p>
                <p>
                  Graphic Design specialization
                  <br />
                  Providence, Rhode island 2020
                </p>
              </div>
            </Col>
          </Row>
          <Row className="experience-section">
            <Col md="4">
              <h3 className="d-flex flex-row align-items-center">
                <div className="section-marker pink-div"></div> &nbsp;
                Experience
              </h3>
            </Col>
            <Col md="8" className="d-flex flex-column justify-content-between">
              <div className="experience-entry">
                <div className="experience-metadata d-flex flex-column">
                  <p>Finary</p>
                  <p>
                    UIUX Designer
                    <br />
                    Feb 2021 - Present | Contract
                  </p>
                </div>
                <p className="what-i-did">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit
                </p>
                <p className="what-i-used">
                  Tools used - Figma, Illustrator, Photoshop
                </p>
              </div>
              <div className="experience-entry">
                <div className="experience-metadata d-flex flex-column">
                  <p>Finary</p>
                  <p>
                    UIUX Designer
                    <br />
                    Feb 2021 - Present | Contract
                  </p>
                </div>
                <p className="what-i-did">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit
                </p>
                <p className="what-i-used">
                  Tools used - Figma, Illustrator, Photoshop
                </p>
              </div>
              <div className="experience-entry">
                <div className="experience-metadata d-flex flex-column">
                  <p>Finary</p>
                  <p>
                    UIUX Designer
                    <br />
                    Feb 2021 - Present | Contract
                  </p>
                </div>
                <p className="what-i-did">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit
                </p>
                <p className="what-i-used">
                  Tools used - Figma, Illustrator, Photoshop
                </p>
              </div>
              <div className="experience-entry">
                <div className="experience-metadata d-flex flex-column">
                  <p>Finary</p>
                  <p>
                    UIUX Designer
                    <br />
                    Feb 2021 - Present | Contract
                  </p>
                </div>
                <p className="what-i-did">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit
                </p>
                <p className="what-i-used">
                  Tools used - Figma, Illustrator, Photoshop
                </p>
              </div>
            </Col>
          </Row>
          <Row className="skills-section my-5">
            <Col md="4">
              <h3 className="d-flex flex-row align-items-center">
                <div className="section-marker cyan-div"></div> &nbsp; Skills
              </h3>
            </Col>
            <Col
              md="8"
              className="d-flex flex-md-row flex-column justify-content-between"
            >
              <div
                className="skills-entry d-flex flex-column"
                style={{ borderRight: "1px solid var(--cyan)" }}
              >
                <p>Visual Design</p>
                <p>
                  User Interface Design <br />
                  Graphic Design <br />
                  Illustration <br />
                  Brand identity <br />
                  Typography <br />
                  Layout & grid <br />
                  Motion design <br />
                  Color
                </p>
              </div>
              <div
                className="skills-entry d-flex flex-column align-items-md-center"
                style={{ borderRight: "1px solid var(--cyan)" }}
              >
                <p>Product Thinking</p>
                <p>
                  Qualitative User Testing
                  <br />
                  Quantitative User testing
                  <br />
                  Journey Mapping
                  <br />
                  User Research
                  <br />
                  A/B Testing
                  <br />
                  Usability testing
                </p>
              </div>
              <div
                className="skills-entry d-flex flex-column align-items-md-center"
                style={{ borderRight: "1px solid var(--cyan)" }}
              >
                <p>Interaction Design</p>
                <p>
                  User Experience <br />
                  Responsive Design <br />
                  Prototyping <br />
                  Ideation <br />
                  sketching <br />
                </p>
              </div>
            </Col>
          </Row>
          <Row className="tools-section my-5">
            <Col md="4">
              <h3 className="d-flex flex-row align-items-center">
                <div className="section-marker blue-div"></div> &nbsp; Technical
                Tools
              </h3>
            </Col>
            <Col
              md="8"
              className="d-flex flex-md-row flex-column justify-content-between"
            >
              <div
                className="tools-entry d-flex flex-column"
                style={{ borderRight: "1px solid var(--blue)" }}
              >
                <p>Visual</p>
                <p>
                  Photoshop
                  <br />
                  Illustrator
                  <br />
                  Indesign
                  <br />
                  After Effects
                </p>
              </div>
              <div
                className="tools-entry d-flex flex-column align-items-md-center"
                style={{ borderRight: "1px solid var(--blue)" }}
              >
                <p>Prototyping</p>
                <p>
                  Figma
                  <br />
                  Sketch
                  <br />
                  Adobe XD
                  <br />
                  Framer
                  <br />
                  Balsamiq <br />
                  Invision
                  <br />
                  Proto.io
                </p>
              </div>
              <div
                className="tools-entry d-flex flex-column align-items-md-center"
                style={{ borderRight: "1px solid var(--blue)" }}
              >
                <p>Development</p>
                <p>
                  Html, CSS
                  <br />
                  Javascript
                  <br />
                  React
                  <br />
                  Vue
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </Container>
    );
  }
}
