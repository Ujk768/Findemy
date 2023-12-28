import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import "../BodyLogos/BodyLogo.css";
export default function BodyLogo() {
  return (
    <Container fluid className="contents">
      <Row>
        <Col className="first" md={12} lg={4}>
          {" "}
          Top Companies choose Findemy Business to build in-demand career
          skills.
        </Col>
        <Col className="d-flex">
          <Col>
            <img
              src="https://s.udemycdn.com/partner-logos/v4/nasdaq-dark.svg"
              alt="Nasdaq"
            ></img>
          </Col>

          <Col>
            <img
              src="https://s.udemycdn.com/partner-logos/v4/netapp-dark.svg"
              alt="NetApp"
            ></img>
          </Col>

          <Col>
            <img
              src="	https://s.udemycdn.com/partner-logos/v4/volkswagen-dark.svg"
              alt="VolksWagen"
            ></img>
          </Col>

          <Col>
            <img
              src="https://s.udemycdn.com/partner-logos/v4/eventbrite-dark.svg"
              alt="eventbrite"
            ></img>
          </Col>
          <Col>
            <img
              src="	https://s.udemycdn.com/partner-logos/v4/box-dark.svg"
              alt="box-logo"
            ></img>
          </Col>
        </Col>
      </Row>
    </Container>
  );
}
