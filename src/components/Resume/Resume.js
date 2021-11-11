import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Particle from "../Particle";
import Resumecontent from "./ResumeContent";
import axios from "axios";
import pdf from "../../Assets/Avinash_Kumar_Resume_10-11-2021-19-41-03.pdf";
import { AiOutlineDownload } from "react-icons/ai";
import Aos from "aos";
import "aos/dist/aos.css";
function Resume() {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  });

  return (
    <Container fluid className="resume-section">
      <Particle />
      <Container>
        <Row
          style={{ justifyContent: "center", position: "relative" }}
          data-aos="fade-up"
        >
          <Button variant="primary" href={pdf} target="_blank">
            <AiOutlineDownload />
            &nbsp;Download Resume
          </Button>
        </Row>
        <Row className="resume" data-aos="fade-up">
          <Col md={6} className="resume-left">
            <h3 className="resume-title">Training</h3>
            <Resumecontent
              title="EOCL , Haldia, West Bengal"
              date="June 2020"
              content={[
                "I had worked on processing fieldwork for various projects which comprise layout marking, Structural checking, on-site work overview.",
              ]}
            />
            <h3 className="resume-title">Voluntary Experience</h3>
            <Resumecontent
              title="Jigayasa"
              content={[
                "Jigyasa is a NGO that provides free education to poor childrens in Haldia city. ",
              ]}
            />
          </Col>
          <Col md={6} className="resume-right">
            <h3 className="resume-title">Education</h3>
            <Resumecontent
              title=" B.Tech MECHANICAL ENGINEERING [ Haldia Institute of Technology, West Bengal ] "
              date="2016 - 2020"
              content={["CGPA: 8.00"]}
            />
            <Resumecontent
              title="12TH BOARD [ Gyan Bharti Residential Complex, Gaya, Bihar ]"
              date="2013 - 2015"
              content={["Precentage: 92.6%"]}
            />
            <Resumecontent
              title="10TH BOARD [ Manav Bharti National Complex, Gaya, Bihar ] "
              date="2012 - 2013"
              content={["Precentage: 9.8 CGPA"]}
            />
          </Col>
        </Row>
        <Row
          style={{ justifyContent: "center", position: "relative" }}
          data-aos="fade-right"
        >
          <Button variant="primary" href={pdf} target="_blank">
            <AiOutlineDownload />
            &nbsp;Download Resume
          </Button>
        </Row>
      </Container>
    </Container>
  );
}

export default Resume;
