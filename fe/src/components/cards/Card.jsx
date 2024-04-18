import React from "react";
import Card from "react-bootstrap/Card";
import { Col } from "react-bootstrap";
import styles from "./Card.module.css";
import { Link } from "react-router-dom";
const Seite = ({ name, price, image, description, id }) => {
  return (
    <>
      <Col xs={12} md={6} lg={6}>
        <Card className="w-30">
          <Link to={`/sushi/${id}`}>
            <Card.Img className={styles.myCard} variant="top" src={image} />
          </Link>
          <Card.Body className="bg-gray-600">
            <Card.Title className="p-2 font-bol hover:scale-x-125">
              {name}
            </Card.Title>
            <Card.Text>{description}</Card.Text>
            <Card.Text>{price}</Card.Text>
          </Card.Body>
        </Card>
      </Col>
    </>
  );
};

export default Seite;
