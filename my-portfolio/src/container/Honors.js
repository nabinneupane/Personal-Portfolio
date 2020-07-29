import React from "react";
import Container from "react-bootstrap/Container";
import Jumbotron from "react-bootstrap/Jumbotron";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

// import { faMedal } from "@fortawesome/free-solid-svg-icons";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Honors = () => (
  <Jumbotron className="jumbotron-fluid p-2 mb-0  w-100 mx-auto mt-0">
    <Container>
      <Row>
        <Col>
          <center>
            {/* <a className="btn-floating btn-lg btn-default">
              <FontAwesomeIcon className=" " icon={faMedal} size="2x" />
            </a> */}
          </center>
          Hi This is my medal Section
        </Col>
        <Col> Hello</Col>
        <Col> Hello</Col>
      </Row>
    </Container>
  </Jumbotron>
);

export default Honors;
