import React from "react";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";

const CardDisplay = (props) => {
  const title = props.propCard.title;
  var image;
  if (props.propIndex === 1 || props.propIndex === 3)
    image = props.propCard.image.expense;
  else if (props.propIndex === 2) image = props.propCard.image.product;
  else if (props.propIndex === 0) image = props.propCard.image.it;
  const text = props.propCard.text;
  const github = props.propCard.github;
  const liveDemo = props.propCard.liveDemo;
  //console.log(github);
  //console.log(liveDemo);
  return (
    <Col md={6} sm={12} lg={4} className=" py-3 mx-auto">
      <Card
        shadow={5}
        className="card-img-top w-75 h-auto bg-info  shadow  justify-content-center "
      >
        <Card.Img
          variant="top"
          src={image}
          className="img-fluid w-100 h-100"
          alt="Card image cap"
        />
        <Card.Body>
          <Card.Title className="text-center p-0">{title}</Card.Title>

          <Card.Text>
            <p> {text} </p>
          </Card.Text>
        </Card.Body>
        <Card.Footer className="d-flex justify-content-between bg-dark">
          <Card.Link
            href={github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-info"
          >
            Github
          </Card.Link>
          <Card.Link
            href={liveDemo}
            target="_blank"
            rel="noopener noreferrer"
            className="text-info"
          >
            Live Demo
          </Card.Link>
        </Card.Footer>
      </Card>
    </Col>
  );
};

export default CardDisplay;
