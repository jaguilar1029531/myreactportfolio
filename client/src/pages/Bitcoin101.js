import React from "react";
import { Col, Row, Container } from "../components/Grid";
import Jumbotron from "../components/Jumbotron";
import Classcard from "../components/Classcard";

function Bitcoin101() {
  return (
    <Container fluid>
      <Row>
        <Col size="md-12">
          <Jumbotron>
          </Jumbotron>
        </Col>
      </Row>
      <br></br>
      <br></br>
      <Row>
          <Col size="lg-12">
              <h1 style={{fontSize: 50, textAlign: "center"}}>BITCOIN 101</h1>
              <hr></hr>
              <h3 style={{textAlign: "center"}}>Learn the building blocks of Bitcoin and the cryptocurrency environment.
              </h3>
          </Col>
      </Row>
      <br></br>
      <Row>
          <Col size="lg-12">
          <Classcard />
          </Col>
      </Row>
    </Container>
  );
}

export default Bitcoin101;
