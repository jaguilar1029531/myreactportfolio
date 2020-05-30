import React from "react";
import { Col, Row, Container } from "../components/Grid";
import pic1 from "./images/goglobal.png";
import pic2 from "./images/consultation.png";
import pic3 from "./images/gogloba.png";
import pic4 from "./images/resumeservices.png";
import pic5 from "./images/websites.png";
import pic6 from "./images/cataloging.png";
import pic7 from "./images/dataproduction.png";
import { Link } from "react-router-dom";

function Bookings() {
  return (
    <Container fluid>
      <Row>
        <Col size="lg-12">
        <hr></hr> <img src={pic1} alt="mountains" />
    <hr></hr>
        </Col>
        </Row>
      <Row>
        <Col size="lg-12">
          
          
      <h1 className="title">Services</h1>
      <hr></hr>
      <h2 className="subtitle" style={{width: 500}}>
        Contractors at Global Integrity offer a wide variety of specialized services, and are prepared to take you Global!
      </h2>
      <hr></hr>
  
        </Col>
      </Row>
      <Row>
        <Col size="sm-4">
      <h3 style={{ fontSize: 25}}><strong>CONSULTATION</strong></h3>
      <br></br>
      <img src={pic2} alt="smiling business people" />
      <br></br>
      <br></br>
      <h3 style={{ fontSize: 25,}}><strong>MEETINGS ARE VIA WEB ONLY</strong></h3>
      <br></br>
      <h3 ><Link to={"/websites"}><strong>Click here to read more.</strong></Link></h3>
      <br></br>
        </Col>
        <Col size="sm-4">
      <h3 style={{ fontSize: 25}}><strong>GO GLOBAL</strong></h3>
      <br></br>
      <img  src={pic3} alt="a world map" />
      <br></br>
      <br></br>
      <h3 style={{ fontSize: 25}}><strong>JOIN OUR NETWORK NOW</strong></h3>
      <br></br>
      <h3 ><Link to={"/goglobal"}><strong>Click here to read more.</strong></Link></h3>
      <br></br>
        </Col>
        <Col size="sm-4">
      <h3 style={{fontSize: 25}}><strong>RÉSUMÉS</strong></h3>
      <br></br>
      <img  src={pic4} alt="a résumé" />
      <br></br>
      <br></br>
      <h3 style={{fontSize: 25}}><strong>STAND OUT ABOVE OTHERS</strong></h3>
      <br></br>
      <h3><Link to={"/resumeservices"}><strong>Click here to read more.</strong></Link></h3>
      <br></br>
        </Col>
      </Row>
      <Row>
        <Col size="sm-4">
      <h3 style={{ fontSize: 25}}><strong>WEBSITES</strong></h3>
      <br></br>
      <br></br>
      <img  src={pic5} alt="a website" />
      <br></br>
      <br></br>
      <h3 style={{ fontSize: 25}}><strong>BILLIONS OF POTENTIAL CUSTOMERS ARE WAITING FOR YOU</strong></h3>
      <br></br>
      <h3 ><Link to={"/websites"}><strong>Click here to read more.</strong></Link></h3>
      <br></br>
        </Col>
        <Col size="sm-4">
      <h3 style={{ fontSize: 25}}><strong>CATALOGING</strong></h3>
      <br></br>
      <br></br>
      <img  src={pic6} alt="safety deposit boxes" />
      <br></br>
      <br></br>
      <h3 style={{fontSize: 25}}><strong>TAKE YOUR WEB-STORE ONLINE AND MAKE IT LOOK GREAT AS WELL</strong></h3>
      <br></br>
      <h3 ><Link to={"/cataloging"}><strong>Click here to read more.</strong></Link></h3>
      <br></br>
        </Col>
        <Col size="sm-4">
      <h3 style={{fontSize: 25}}><strong>DATA LISTS</strong></h3>
      <br></br><br></br>
      <img  src={pic7} alt="a data chain" />
      <br></br>
      <br></br>
      <h3 style={{fontSize: 25}}><strong>FIND YOUR MARKET, GET CONTACT INFO, AND REFINE RESULTS</strong></h3>
      <br></br>
      <h3 ><Link to={"/dataproduction"}><strong>Click here to read more.</strong></Link></h3>
      <br></br>
        </Col>
      </Row>
    </Container>
  );
}

export default Bookings;
