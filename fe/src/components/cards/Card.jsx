import React from "react";
import Card from "react-bootstrap/Card";
import { Col } from "react-bootstrap";
import styles from "./Card.module.css";
import { Link } from "react-router-dom";
const Seite = ({ name, price, image, description, id }) => {
  return (
    <>
      <Col xs={12} md={6} lg={6}>
        <Card style={{ width: "30rem" }}>
          <Link to={`/sushi/${id}`}>
            <Card.Img className={styles.myCard} variant="top" src={image} />
          </Link>
          <Card.Body>
            <Card.Title className="p-2 font-sans text-2xl">{name}</Card.Title>
            <Card.Text>{description}</Card.Text>
            <Card.Text>{price}</Card.Text>
          </Card.Body>
        </Card>
      </Col>
    </>
  );
};

export default Seite;
