import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import CardDisplay from "./CardDisplay";
import expense from "../files/Expense_Tracker.png";
import product from "../files/Product_app.png";
import it from "../files/try.jpg";

const ReactProject = () => {
  const cardInfo = [
    {
      image: { it },
      title: "FIXIT",
      text: "This is body of FIXIT app",
      github: "https://github.com/nabinneupane/CSC-414-Final-Project-",
      liveDemo: "https://github.com/nabinneupane/CSC-414-Final-Project-",
    },
    {
      image: { expense },
      title: "Expense Tracker",
      text: "This is the body of expense tracker ",
      github: "https://github.com/nabinneupane/finance-tracker",
      liveDemo: "https://nabinneupane.github.io/finance-tracker/",
    },

    {
      image: { product },
      title: "Office Management",
      text: "This is body of FIXIT app",
      github: "https://github.com/nabinneupane/Homework-5-",
      liveDemo: "https://nabinneupane.github.io/Homework-5-/",
    },
  ];

  const renderCard = (card, index) => {
    return <CardDisplay propCard={card} propIndex={index} />;
  };

  return (
    <Container
      fluid={true}
      style={{ backgroundColor: "#dbe5e6" }}
      className="py-4"
    >
      <Row>{cardInfo.map(renderCard)}</Row>
    </Container>
  );
};

export default ReactProject;
