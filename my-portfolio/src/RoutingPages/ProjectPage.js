import React from "react";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import Jumbotron from "react-bootstrap/Jumbotron";

import ReactProject from "../container/ReactProject";

const ProjectPage = () => (
  <Jumbotron className="bg-white jumbotron-fluid p-0 mb-0">
    <Tabs
      defaultActiveKey="reactProject"
      id="uncontrolled-tab-example"
      className="justify-content-center p-0 mt-1"
    >
      <Tab eventKey="reactProject" title="React">
        <ReactProject />
      </Tab>
      <Tab eventKey="profile" title="Python">
        <Template />
      </Tab>
      <Tab eventKey="contact" title="Other"></Tab>
    </Tabs>
  </Jumbotron>
);

export default ProjectPage;

const Template = () => {
  return (
    <Container fluid={true}>
      <Card shadow={5} style={{ width: "18em" }}>
        <Card.Img variant="top" src="holder.js/100px180" />
      </Card>
    </Container>
  );
};
