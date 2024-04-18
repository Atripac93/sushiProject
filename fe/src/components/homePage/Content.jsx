import React from "react";
import sushiData from "../../list/sushiData";
import Card from "../cards/Card";
import NavigationBar from "../navigationBar/NavigationBar";
import { nanoid } from "nanoid";
import { Container, Row } from "react-bootstrap";
import Footer from "../footer/Footer";

const Content = () => {
  return (
    <>
      <NavigationBar />
      <Container>
        <Row>
          {sushiData.map((card) => (
            <Card
              key={nanoid()}
              id={card.id}
              name={card.name}
              image={card.image}
            />
          ))}
        </Row>
        <div className="flex">
          <a
            href="#"
            className="mt-[30px] no-underline text-lg font-bold text-red-900"
          >
            returns on!
          </a>
        </div>
      </Container>

      <Footer />
    </>
  );
};

export default Content;
