import React, { useState } from "react";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";
import { Col, Row, Container } from "../components/Grid";
import { Input, TextArea, FormBtn } from "../components/Form";
import pic1 from "./images/gogloba.png";
import emailjs from "emailjs-com"

function Goglobal() {
  // Setting our component's initial state
  
  const [formObject, setFormObject] = useState({})

  // Handles updating component state when the user types into the input field
  function handleInputChange(event) {
    const { name, value } = event.target;
    setFormObject({...formObject, [name]: value})
  };

  // When the form is submitted, use the API.saveBooking method to save the booking data
  // Then reload bookings from the database
  function handleFormSubmit(event) {
    
    event.preventDefault();
    if (formObject.name && formObject.emailaddress && formObject.message) {
      API.saveBooking({
        name: formObject.name,
        emailaddress: formObject.emailaddress,
        message: formObject.message
      })
        .then(alert("FORM SUBMITTED, A SPECIALIST WILL REACH OUT TO YOU VIA EMAIL SOON!!! THANK YOU FOR BOOKING WITH GLOBAL INTEGRITY!!!"))
        .catch(err => console.log(err));
    }
    emailfunction();
  };
  function emailfunction() {

  var templateParams = {
      
  }
    
  emailjs.send('default_service', 'goglobal', templateParams, "user_mJFCZ05IU2aK3ajvYFbOi")
  .then(function(response) {
     console.log('SUCCESS!', response.status, response.text);
  }, function(error) {
     console.log('FAILED...', error);
  })
  }

    return (
      <Container fluid>
        <Row>
          <Col size="lg-12" > 
              <h1 style={{ textAlign: "center", fontSize: 60}}><strong>GO GLOBAL</strong></h1>
           </Col>
           </Row>
        <Row>
          <Col size="lg-12" >
              <hr></hr> <img className="rounded mx-auto d-block" style={{ width: 500}} src={pic1} alt="a man" /><hr></hr>
           </Col>
           </Row>
           <Row>
          <Col size="lg-12" >
            <div className="rounded mx-auto d-block" style={{width:500}}>
              <h1 style={{ textAlign: "center"}}>Global Integrity will have you making an income through the digital market immediately. We will show you the quickest methods to begin earning as a web-based contractor. In this program you will be able to: Create your own company, contract jobs with Global Integrity Marketing, begin or develop your involvement in the cryptocurrency market (bitcoin), develop an asset portfolio, and more</h1>
              </div>
           </Col>
           </Row>
           <br></br>
        <Row>
          <Col size="lg-12">
            <Jumbotron>
              <h3>Fill out and submit your contact information below and we will reach out to you within one business day to schedule your FREE consultation</h3>
           <br></br>
            <form>
              <Input
                onChange={handleInputChange}
                name="name"
                placeholder="Name (Input Required)"
              />
              <Input
                onChange={handleInputChange}
                name="emailaddress"
                placeholder="Email Address (Input Required)"
              />
              <TextArea
                onChange={handleInputChange}
                name="message"
                placeholder="Message (Input Required)"
              />
              
              <br></br>
              <FormBtn
                disabled={!(formObject.name && formObject.emailaddress && formObject.message)}
                onClick={handleFormSubmit}
                
                
              >
                Submit Booking Request
                
              </FormBtn>
            </form>
            
            </Jumbotron>
            <br></br>
          </Col>
          
        </Row>
      </Container>
    );
  }


export default Goglobal;
