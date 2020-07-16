import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Jumbotron from "react-bootstrap/Jumbotron";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import {
  faUserGraduate,
  faAward,
  faCogs,
  faArrowUp,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import Skills from "../container/Skills";
import Honors from "../container/Honors";

const AboutPage = () => {
  const [clickEducation, setClickEducation] = useState(false);
  const [clickHonors, setClickHonors] = useState(false);
  const [clickSkills, setClickSkills] = useState(false);

  return (
    <Jumbotron className=" bg-white jumbotron-fluid p-0 mb-0" id="top-section">
      <Container fluid={true}>
        <Row>
          <Col sm={12}>
            <center className="  display-1 font-weight-bolder border-bottom border-dark mb-5">
              About Me
            </center>
            <content>
              <Row>
                <Col className="col-5"> Image halney ho </Col>
                <Col>
                  <p>
                    Hello, My name is Nabin Neupane. I am a recent graduate from
                    University of Southern Mississippi.
                  </p>
                  <p> I am constantly learning new things</p>
                  <p> I am constantly learning new things</p>
                  <p> I am constantly learning new things</p>
                  <p> I am constantly learning new things</p>
                  <p> I am constantly learning new things</p>
                  <br /> <br />
                </Col>
              </Row>
            </content>
            <Row className=" border-top d-flex flex-row  text-center">
              <Col className="mt-5">
                <a
                  href="#education"
                  variant="outline-secondary "
                  role="button"
                  className="btn btn-dark btn-lg ml-4 mb-3 "
                  onClick={() => {
                    setClickEducation(!clickEducation);
                    setClickSkills(false);
                    setClickHonors(false);
                  }}
                >
                  <FontAwesomeIcon icon={faUserGraduate} size="2x" />
                  <span className="font-weight-bold p-2  dropdown-toggle ">
                    Courses Taken
                  </span>
                </a>

                <a
                  href="#skills"
                  variant="outline-secondary "
                  role="button"
                  className="btn btn-dark btn-lg ml-4 mb-3 "
                  onClick={() => {
                    setClickSkills(!clickSkills);
                    setClickEducation(false);
                    setClickHonors(false);
                  }}
                >
                  <FontAwesomeIcon icon={faCogs} size="2x" />{" "}
                  <span className="font-weight-bold p-2 dropdown-toggle">
                    Professional Skills
                  </span>
                </a>

                <a
                  href="#honors"
                  variant="outline-secondary "
                  role="button"
                  className="btn btn-dark btn-lg ml-4 mb-3 "
                  onClick={() => {
                    setClickHonors(!clickHonors);
                    setClickEducation(false);
                    setClickSkills(false);
                  }}
                >
                  <FontAwesomeIcon icon={faAward} size="2x" />{" "}
                  <span className="font-weight-bold p-2 dropdown-toggle">
                    Honors
                  </span>
                </a>
              </Col>
            </Row>
            <section className="mt-5 mx-auto mb-4">
              <Row id="education">{clickEducation && <Education />}</Row>
              <Row id="honors"> {clickHonors && <Honors />} </Row>
              <Row id="skills"> {clickSkills && <Skills />} </Row>
            </section>
          </Col>
        </Row>
       
      </Container>
    </Jumbotron>
  );
};

const Education = () => {
  return <Container fluid={true}>Hi I am Education</Container>;
};

export default AboutPage;
