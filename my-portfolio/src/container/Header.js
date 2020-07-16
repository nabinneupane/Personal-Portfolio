import React from "react";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import resume from "../files/Neupane_Nabin.pdf";

import { Link } from "react-router-dom";

const Header = () => (
  <Container className="p-0 " fluid={true}>
    <Navbar className="border-bottom navbar-expand-md bg-light " expand="lg">
      <Navbar.Brand className="text-info"> Nabin Neupane</Navbar.Brand>
      <Navbar.Toggle aria-controls="navbar-toggle" />
      <Navbar.Collapse id="navbar-toggle  ">
        <Nav className="ml-auto nav-tabs border-bottom-0 ">
          <Link to="/" className="nav-link text-info">
            Home
          </Link>
          <Link
            to={resume}
            className="nav-link text-info"
            target="_blank"
            rel="noopener noreferrer"
          >
            Resume
          </Link>
          <Link to="/project" className="nav-link text-info">
            Project
          </Link>
          <Link to="/about" className="nav-link text-info">
            About
          </Link>
          <Link to="/contact" className="nav-link text-info">
            Contact
          </Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  </Container>
);

export default Header;
