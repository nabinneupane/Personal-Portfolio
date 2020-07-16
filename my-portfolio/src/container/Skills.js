import React from "react";
import Container from "react-bootstrap/Container";
import Accordion from "react-bootstrap/Accordion";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";




const Skills = () => {
  const languages = ["JavaScript", "Java", "Python", "C++"];
  const webDevelopment = [
    {
      id: "Front End",
      val: ["React JS", "HTML", "CSS", "Redux", "Spring", "Spring boot"],
    },
    {
      id: "Back End",
      val: ["Node JS", "Express JS", "Hibernet"],
    },
    {
      id: " Database",
      val: ["My Sql"],
    },
  ];
  const familiarLanguages = [" C# ", " C ", "Matlab"];
  return (
    <Container
      fluid={true}
      className=" d-flex justify-content-center  "
      md={4}
      sm={12}
    >
      <Accordion>
        <Row>
          <Col>
            <a
              href="#programming"
              className=" text-dark card-link mb-2 card-img-top"
            >
              <Accordion.Toggle
                as={Card.Header}
                eventKey="0"
                className="bg-info h4 "
              >
                <center> Programming Languages </center>
              </Accordion.Toggle>
              <Accordion.Collapse eventKey="0">
                <Card.Body className="h4 font-weight-normal">
                  <ul>
                    {languages.map((value, i) => (
                      <li key={i}> {value} </li>
                    ))}
                  </ul>
                </Card.Body>
              </Accordion.Collapse>
            </a>
            <a
              href="#web"
              id="programming"
              className=" text-dark card-link mb-2 card-img-top "
            >
              <Accordion.Toggle
                as={Card.Header}
                eventKey="1"
                className=" bg-info h4 "
              >
                <center> Web Development Frameworks </center>
              </Accordion.Toggle>
              <Accordion.Collapse eventKey="1">
                <Card.Body className="h4 font-weight-normal">
                  <ul>
                    {webDevelopment.map((value, a) => (
                      <li key={a}>
                        {value.id}
                        <ul className="h5 font-weight-light">
                          {value.val.map((items, b) => (
                            <li key={b}> {items}</li>
                          ))}
                        </ul>
                      </li>
                    ))}
                  </ul>
                </Card.Body>
              </Accordion.Collapse>
            </a>

            <a
              id="web"
              href="#na"
              className=" text-dark card-link mb-2 card-img-top nounderline"
            >
              <Accordion.Toggle
                as={Card.Header}
                eventKey="3"
                className=" bg-info h4  "
              >
                <center>Familiar Languages</center>
              </Accordion.Toggle>
              <Accordion.Collapse eventKey="3">
                <Card.Body className="h4 font-weight-normal">
                  <ul>
                    {familiarLanguages.map((value, i) => (
                      <li key={i}> {value} </li>
                    ))}
                  </ul>
                </Card.Body>
              </Accordion.Collapse>
            </a>
          </Col>
        </Row>
      </Accordion>
    </Container>
  );
};

export default Skills;
