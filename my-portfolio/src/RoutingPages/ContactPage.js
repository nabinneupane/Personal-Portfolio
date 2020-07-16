import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Jumbotron from "react-bootstrap/Jumbotron";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Recaptcha from "react-recaptcha";
//import Axios from "axios";
import request from "request";

const ContactPage = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [flag, setFlag] = useState(false);
  const [emailSent, setEmailSent] = useState(null);
  const [isverified, setIsverified] = useState(false);

  function recaptchaLoaded() {
    console.log("Success...");
  }

  function handleCaptcha() {
    console.log("here to verify....");
    setIsverified(true);
    console.log("Now it is verified");
  }
  function handleFormSubmission(e) {
    e.preventDefault();
    console.log("isverified:", isverified);
    console.log("Submitted...");
    if (!isverified) {
      alert("Please verify that you are human");
      setEmailSent(false);
    } else {
      //   Axios.post("/api/email", )
      //     .then((res) => {
      //       setFlag(true);
      //       setEmailSent(true);
      //     })
      //     .catch((err) => {
      //       console.log(err);
      //       setFlag(false);
      //       setEmailSent(false);
      //     });
      // }
      var userData = {
        name: name,
        email: email,
        message: message,
      };
      console.log(userData);
    }
    var options = {
      uri: "http://localhost:3030/api/email",
      method: "POST",
      json: userData,
    };

    request(options, (err, res, body) => {
      if (err) throw err;
    });
    setFlag(false);
    setEmailSent(false);
  }
  return (
    <Jumbotron className=" bg-white jumbotron-fluid p-0 mb-0" id="top-section">
      <Container fluid={true}>
        <Row>
          <Col sm={12}>
            <center className="  display-1 font-weight-bolder border-bottom border-dark mb-5 mt-3">
              Let's Talk
            </center>
          </Col>
        </Row>
        <Row className="justify-content-center">
          <Form onSubmit={handleFormSubmission} className="mb-2">
            <Form.Group>
              <Form.Label htmlFor="name">Full Name</Form.Label>
              <Form.Control
                className="form-control-lg"
                id="name"
                name="name"
                type="text"
                placeholder="type your name..."
                value={name}
                onChange={(val) => setName(val.target.value)}
              ></Form.Control>
            </Form.Group>
            <Form.Group>
              <Form.Label htmlFor="email"> Email</Form.Label>
              <Form.Control
                className="form-control-lg"
                id="email"
                name="email"
                type="text"
                value={email}
                placeholder="type your email..."
                onChange={(val) => setEmail(val.target.value)}
              ></Form.Control>
            </Form.Group>
            <Form.Group>
              <Form.Label htmlFor="message"> Message</Form.Label>
              <Form.Control
                className="form-control-lg mb-2"
                id="message"
                name="message"
                as="textarea"
                placeholder="Type any message here..."
                value={message}
                onChange={(val) => setMessage(val.target.value)}
              ></Form.Control>
            </Form.Group>
            <Recaptcha
              sitekey="6LfCO7IZAAAAAOHV0UBJXgFPJ12pLNBzHcX81k0v"
              theme="light"
              render="explicit"
              onloadCallback={recaptchaLoaded}
              verifyCallback={handleCaptcha}
            />
            <Button
              className=" d-inline-block btn-primary btn-lg mt-3 mb-3"
              type="submit"
              disabled={flag}
            >
              Send
            </Button>

            {emailSent === true && (
              <p className="d-inline  text-success font-weight-bold p-2">
                Success! Message Sent
              </p>
            )}
            {emailSent === false && (
              <p className="d-inline text-danger font-weight-bold p-2">
                Error sending Message !!!
              </p>
            )}
          </Form>
        </Row>
      </Container>
    </Jumbotron>
  );
};

export default ContactPage;
