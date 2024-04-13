import React from "react";
import { sushiData } from "../../list/sushiData";
import Card from "../cards/Card";
import NavigationBar from "../navigationBar/NavigationBar";
import { nanoid } from "nanoid";
import { Container, Row } from "react-bootstrap";
import Footer from "../footer/Footer";

const Content = () => {
  return (
    <div>
      <NavigationBar />
      <Container>
        <Row>
          {sushiData.map((card) => (
            <Card
              key={nanoid()}
              name={card.name}
              image={card.image}
              description={card.description}
              price={card.price}
            />
          ))}
        </Row>
      </Container>
      <Footer />
    </div>
  );
};

export default Content;
