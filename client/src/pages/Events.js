import React from "react";
import { Col, Row, Container } from "../components/Grid";
import Jumbotron from "../components/Jumbotron";
import Calendarz from "../components/Calendarz"

function Events() {
  return (
    <Container fluid>
      <Row>
        <Col size="md-12">
          <Jumbotron>
            <Calendarz />
          </Jumbotron>
        </Col>
      </Row>
    </Container>
  );
}

export default Events;
