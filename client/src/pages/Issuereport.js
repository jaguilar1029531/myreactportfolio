import { Col, Row, Container } from "../components/Grid";
import Jumbotron from "../components/Jumbotron";
import userpic from "./images/anonymoususer.png";
import React, { useState, useEffect } from "react";
import API from "../utils/API";
import { List, ListItem } from "../components/List";
import { Input, FormBtn } from "../components/Form";
import emailjs from "emailjs-com";

function Issuereport() {

  // Setting our component's initial state
  const [issuereports, setIssuereports] = useState([])
  const [formObject, setFormObject] = useState({})

  // Load all books and store them with setBooks
  useEffect(() => {
    loadIssuereports()
  }, [])

  // Loads all books and sets them to books
  function loadIssuereports() {
    API.getIssuereports()
      .then(res => 
        setIssuereports(res.data)
      )
      .catch(err => console.log(err));
  };
  // Handles updating component state when the user types into the input field
  function handleInputChange(event) {
    const { name, value } = event.target;
    setFormObject({...formObject, [name]: value})
  };

  // When the form is submitted, use the API.saveBook method to save the book data
  // Then reload books from the database
  function handleFormSubmit(event) {
    
    event.preventDefault();
    if (formObject.issue) {
      API.saveIssuereport({
        issue: formObject.issue,
        contact: formObject.contact
      })
        .then(alert("FORM SUBMITTED, THANK YOU FOR HELPING MAKE GLOBAL INTEGRITY DOT COM A BETTER PLACE!!!"))
        .then(res => loadIssuereports())
        .catch(err => console.log(err));
    }
    emailfunction();
  };
  function emailfunction() {

  var templateParams = {
      
  }
    
    emailjs.send('default_service', 'template_tB0yykvO', templateParams, "user_pIUi2X6RNv86DairrJ6TE")
    .then(function(response) {
       console.log('SUCCESS!', response.status, response.text);
    }, function(error) {
       console.log('FAILED...', error);
    })
  }
  return (
    <Container fluid>
        <Row>
          <Col size="lg-12">
            
              
            
            <Jumbotron>
              <h3>Leave a review about your experience with Global Integrity</h3>
              <br></br>
            <form style={{marginLeft:25}}>
              <Input
                onChange={handleInputChange}
                name="issue"
                placeholder="What is the issue with Global Integrity Dot Com? (Input Required)"
              />
              <Input
                onChange={handleInputChange}
                name="contact"
                placeholder="Enter your email if you'd like us to contact you."
              />
              <br></br>
              <FormBtn
                disabled={!(formObject.issue )}
                onClick={handleFormSubmit}
                
              >
                Submit this issue!
              </FormBtn>
            </form>
            </Jumbotron>
            <br></br>
          </Col>
         
        </Row>
      <Row>
        <Col size="lg-12">
          <div><div className="card"></div>
        <div className="card-image"></div>
        <br></br>
           <strong>User Site Issues</strong>
           <hr></hr>
           {issuereports.length ? (
              <List>
                {issuereports.map(issuereport => (
                  <ListItem key={issuereport._id}>
                    
                      <strong>
                      <div className="media-left">
              <figure className="image is-96x96">
                <img src={userpic} alt="an anonymous site user"></img>
              </figure>
              <br></br>
              
            </div>
            <br></br> 
            <br></br> 
            <b>Anonymous</b> stated: <br></br> <b>{issuereport.issue}</b><br></br> About Global Integrity Dot Com <br></br><br></br> On <br></br>{issuereport.date} 
                      </strong>
                  </ListItem>
                ))}
              </List>
            ) : (
              <h3>No Results to Display</h3>
            )}
        
            
            </div>
          
         
         
        </Col>
      </Row>
      
    </Container>
  );
}

export default Issuereport;
