import React, { useState } from "react";

import Container from "react-bootstrap/Container";
import Jumbotron from "react-bootstrap/Jumbotron";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Recaptcha from "react-recaptcha";
//import Axios from "axios";
//import request from "request";
import emailjs from "emailjs-com";

require("dotenv").config();

const ContactPage = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [flag, setFlag] = useState(false);
  const [emailSent, setEmailSent] = useState(null);
  const [isverified, setIsverified] = useState(false);
  const from_email = "coolnabinn@gmail.com";
  const from_name = "Nabin Neupane";
  const apiKey = process.env.REACT_APP_EMAILJS_API_KEY;

  function handleCaptcha() {
    console.log("here to verify....");
    setIsverified(true);

    console.log("Now it is verified");
  }
  function handleFormSubmission(e) {
    e.preventDefault();
    console.log(apiKey);
    if (!isverified) {
      setEmailSent(false);
      alert("Please verify that you are human and press submit to continue.");
      setEmailSent(null);
    } else {
      var userData = {
        name: name,
        email: email,
        message: message,
        from_email: from_email,
        from_name: from_name,
      };

      //this would help to send message to me fromn any random user. 200 mails per month

      emailjs.send("default_service", "regular_email", userData, apiKey).then(
        (response) => {
          setEmailSent(true);
          setName("");
          setEmail("");
          setMessage("");
          alert(
            "Thank you for your message. I will reach out to you shortly.  "
          );
          console.log("success", response.status);
          setEmailSent(null);
          setFlag(true);
        },
        (err) => {
          console.log("Failed to send feedback. Error: ", err);
        }
      );
    }
  }
  return (
    <Jumbotron className=" bg-white jumbotron-fluid p-0 mb-0" id="top-section">
      <Container fluid={true}>
        <Row>
          <Col sm={12}>
            <center className="  display-1 font-weight-bolder border-bottom border-dark mb-4">
              Let's Talk
            </center>
          </Col>
        </Row>
        <Row className="justify-content-center">
          <Form onSubmit={handleFormSubmission}>
            <Form.Group>
              <Form.Label htmlFor="name" className="blockquote">
                Full Name
              </Form.Label>
              <Form.Control
                className="form-control-lg"
                id="name"
                name="name"
                type="name"
                placeholder="Enter Full Name"
                autoComplete="off"
                value={name}
                onChange={(val) => setName(val.target.value)}
                required
              ></Form.Control>
            </Form.Group>
            <Form.Group>
              <Form.Label htmlFor="email" className="blockquote">
                Email
              </Form.Label>
              <Form.Control
                className="form-control-lg "
                id="email"
                name="email"
                type="email"
                value={email}
                placeholder="name@example.com"
                autoComplete="off"
                onChange={(val) => setEmail(val.target.value)}
                required
              />
              <small id="emailHelp" className="form-text text-muted">
                I'll never share your email with anyone else.
              </small>
            </Form.Group>
            <Form.Group>
              <Form.Label htmlFor="message" className="blockquote">
                Message
              </Form.Label>
              <Form.Control
                className="form-control-lg "
                id="message"
                name="message"
                as="textarea"
                placeholder="Enter any message here..."
                autoComplete="off"
                value={message}
                onChange={(val) => setMessage(val.target.value)}
                required
              ></Form.Control>
            </Form.Group>
            <Recaptcha
              sitekey="6LfCO7IZAAAAAOHV0UBJXgFPJ12pLNBzHcX81k0v"
              theme="light"
              onloadCallback={() => {
                console.log("Recaptcha loaded....");
              }}
              verifyCallback={handleCaptcha}
            />
            <Button
              className=" d-inline-block btn-primary btn-lg my-2"
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
