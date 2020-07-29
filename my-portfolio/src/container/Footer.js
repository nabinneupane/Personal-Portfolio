import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
//fixed-bottom
function Footer() {
  const thisYear = new Date().getFullYear();
  return (
    <footer className=" p-0 sticky-bottom">
      <Container fluid={true} className=" text-info bg-light">
        <Row className="border-top justify-content-between p-3  ">
          <Col className="p-2 " md={3} sm={7}>
            Nabin Neupane
          </Col>
          <Col className="p-2 justify-content-end " md={2.5}>
            Copyright &copy; {thisYear}. All rights reserved.
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;
