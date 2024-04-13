import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const Footer = () => {
  return (
    <>
      <footer className="mt-[200px] py-3 bg-gray-900 ">
        <Container>
          <Row>
            <Col md={4}>
              <h2 className="text-white">Contact</h2>
              <ul>
                <li>
                  <div>
                    <div className="text-white">Ginestre Street</div>
                  </div>
                </li>
                <li>
                  <div>
                    <div className="text-white">10981, Berlin</div>
                  </div>
                </li>
                <li>
                  <div className="text-red-500">sushimania.@gmail.com</div>
                </li>
                <li>
                  <div className="text-white">Tel: 4664 7373737</div>
                </li>
              </ul>
            </Col>
            <Col md={4}>
              <h2 className="text-white">Opening times</h2>
              <ul className="list-unstyled text-small">
                <li>
                  <div className="text-white">Mo - Fr von 11:30 bis 22:00</div>
                </li>
                <li>
                  <div className="text-white">Sa + So von 11:30 bis 22:00</div>
                </li>
              </ul>
            </Col>
            <Col md={4}>
              <h2 className="text-white">Follower us</h2>
              <ul className="list-unstyled text-small">
                <li>
                  <a
                    className="text-white no-underline"
                    href="https://www.facebook.com/sushimania/"
                  >
                    Facebook
                  </a>
                </li>
                <li>
                  <a
                    className="text-white no-underline"
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
              <p className="text-3xl font-bold mb-2 text-white  bg-gray-900 ">
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
