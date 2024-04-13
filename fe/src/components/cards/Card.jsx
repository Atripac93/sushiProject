import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Col } from "react-bootstrap";
import styles from "./Card.module.css";
const Seite = ({ name, price, image, description }) => {
  return (
    <>
      <Col xs={12} md={6} lg={6}>
        <Card style={{ width: "30rem" }}>
          <Card.Img className={styles.myCard} variant="top" src={image} />
          <Card.Body>
            <Card.Title>{name}</Card.Title>
            <Card.Text>{description}</Card.Text>
            <Card.Text>{price}</Card.Text>
            <div className="flex gap-2">
              <Button variant="primary">Aggiungi al carrello</Button>
              <Button variant="primary">Leggi i dettagli</Button>
            </div>
          </Card.Body>
        </Card>
      </Col>
    </>
  );
};

export default Seite;
