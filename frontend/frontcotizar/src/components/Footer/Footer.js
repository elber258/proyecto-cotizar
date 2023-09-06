import React from "react";
import "assets/css/App.css";
import {
  AiFillTwitterCircle,
  AiFillLinkedin,
  AiOutlineInstagram,
  AiFillMail,
} from "react-icons/ai";

import { Container, Row, Col } from "reactstrap";

const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Col>
          <div className="socialNetworkIconsLayout">
            <Row xs="4">
              <Col>
                <a
                  href="https://twitter.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <AiFillTwitterCircle className="socialNetworkIcons" />
                </a>
              </Col>

              <Col>
                <a
                  href="https://www.linkedin.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <AiFillLinkedin className="socialNetworkIcons" />
                </a>
              </Col>

              <Col>
                <a
                  href="https://www.instagram.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <AiOutlineInstagram className="socialNetworkIcons" />
                </a>
              </Col>

              <Col sm>
                <a
                  href="mailto:cotizarcom2@gmail.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <AiFillMail className="socialNetworkIcons" />
                </a>
              </Col>
            </Row>
          </div>

          <Row>
            <Container className="footerText" fluid="md">
              ¡Cotiza y Decide con Cotizar.com!
            </Container>
          </Row>

          <Row>
            <Container className="footerText" fluid="md">
              Derechos reservados, Cotizar.com (2023) &#169;
            </Container>
          </Row>
        </Col>
      </Container>
    </footer>
  );
};

export default Footer;
