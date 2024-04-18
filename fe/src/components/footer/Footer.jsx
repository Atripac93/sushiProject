import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const Footer = () => {
  return (
    <>
      <footer className="mt-[200px] py-3 bg-orange-400 ">
        <Container>
          <Row>
            <Col md={4}>
              <h2 className="text-white">Contact</h2>
              <ul className="text-black font-bold">
                <li>
                  <div>
                    <div>Ginestre Street</div>
                  </div>
                </li>
                <li>
                  <div>
                    <div>10981, Berlin</div>
                  </div>
                </li>
                <li>
                  <div>sushimania.@gmail.com</div>
                </li>
                <li>
                  <div>Tel: 4664 7373737</div>
                </li>
              </ul>
            </Col>
            <Col md={4}>
              <h2 className="text-white">Opening times</h2>
              <ul className="list-unstyled text-small font-bold text-black">
                <li>
                  <div>Mo - Fr von 11:30 bis 22:00</div>
                </li>
                <li>
                  <div>Sa + So von 11:30 bis 22:00</div>
                </li>
              </ul>
            </Col>
            <Col md={4}>
              <h2 className="text-white">Follower us</h2>
              <ul className="list-unstyled">
                <li>
                  <a
                    className="text-black no-underline"
                    href="https://www.facebook.com/sushimania/"
                  >
                    Facebook
                  </a>
                </li>
                <li>
                  <a
                    className="text-black no-underline"
                    href="https://www.instagram.com/sushimanialb/"
                  >
                    Instagram
                  </a>
                </li>
              </ul>
            </Col>
          </Row>
          <Row>
            <Col>
              <p className="text-3xl font-bold mb-2 text-black bg-orange-400">
                &copy; 2024 SushiMania
              </p>
            </Col>
          </Row>
        </Container>
      </footer>
    </>
  );
};

export default Footer;
