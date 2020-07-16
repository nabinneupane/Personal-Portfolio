import React from "react";
import Image from "react-bootstrap/Image";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Jumbotron from "react-bootstrap/Jumbotron";
import { Tooltip } from "@material-ui/core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faFacebook,
  faTwitter,
  faInstagram,
  faGithub,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";

function LandingPage() {
  return (
    <Container fluid={true} className="mb-5">
      <Row className=" p-3 ml-auto mb-4">
        <Col className="view overlay z-depth-1-half">
          <Image
            style={{
              height: "300px",
              display: "block",
              width: "300px",
            }}
            className="img-fluid mx-auto  rounded-circle "
            src="https://res.cloudinary.com/nabinneupane/image/upload/v1592933624/Photo/NabinNeupane.jpg"
            fluid
          ></Image>
        </Col>
      </Row>
      <h3> </h3>
      <Row className=" p-3 ml-auto mb-0">
        <Jumbotron className="mx-auto  text-center p-1 jumbotron-fluid shadow-lg   rounded">
          <h1
            className="border-bottom"
            style={{
              fontSize: "3.5em",
              color: "Black",
            }}
          >
            Nabin Neupane
          </h1>
          <center className="pt-2">
            JavaScript | Java | Python | Bootstrap | React | Node JS | Express |
            HTML/CSS | Spring
          </center>

          <Row className="p-3 w-responsive text-center mx-auto  col-sm-auto">
            <Col className="counter">
              <Tooltip title="LinkedIn">
                <a
                  href="https://www.linkedin.com/in/nabinneupane/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FontAwesomeIcon icon={faLinkedin} size="3x" />
                </a>
              </Tooltip>
            </Col>
            <Col>
              <Tooltip title="Github">
                <a
                  href="https://github.com/nabinneupane"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FontAwesomeIcon icon={faGithub} size="3x" />
                </a>
              </Tooltip>
            </Col>
            <Col>
              <Tooltip title="Instagram">
                <a
                  href="https://www.instagram.com/coolnabinn"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FontAwesomeIcon icon={faInstagram} size="3x" />
                </a>
              </Tooltip>
            </Col>
            <Col>
              <Tooltip title="Facebook">
                <a
                  href="https://www.facebook.com/coolnabinn"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FontAwesomeIcon icon={faFacebook} size="3x" />
                </a>
              </Tooltip>
            </Col>
            <Col>
              <Tooltip title="Twitter">
                <a
                  href="https://twitter.com/Coolnabin11"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FontAwesomeIcon icon={faTwitter} size="3x" />
                </a>
              </Tooltip>
            </Col>
          </Row>
        </Jumbotron>
      </Row>
    </Container>
  );
}

export default LandingPage;
