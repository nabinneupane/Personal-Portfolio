import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
//fixed-bottom
function Footer() {
  return (
    <footer className=" p-0">
      <Container fluid={true} className=" text-info bg-light">
        <Row className="border-top justify-content-between p-3  ">
          <Col className="p-2" md={3} sm={12}>
            Nabin Neupane
          </Col>
          <Col className="p-2 justify-content-end " md={3}>
            This site was made by Neupane Neupane
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;
