import bitcoinpic from "./bitcoin.jpg";
import imanipic from "./imani.png"
import { Col, Row } from "../Grid";
import React, { useState, useEffect } from "react";
import Jumbotron from "../Jumbotron";
import { Input, FormBtn } from "../Form";
import API from "../../utils/API";
import emailjs from "emailjs-com";

function Classcard() {
    
  // Setting our component's initial state
  const setClassbookings = useState([])
  const [formObject, setFormObject] = useState({})

  // Load all books and store them with setBooks
  useEffect(() => {
    loadClassbookings()
  }, [])

  // Loads all books and sets them to books
  function loadClassbookings() {
    API.getClassbookings()
      .then(res => 
        setClassbookings(res.data)
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
    if (formObject.name && formObject.emailaddress) {
      API.saveClassbooking({
        name: formObject.name,
        emailaddress: formObject.emailaddress
      })
        .then(alert("FORM SUBMITTED, A SPECIALIST WILL REACH OUT TO YOU VIA EMAIL TO GIVE YOU A CLASS ACCESS KEY SOON!!! THANK YOU FOR BOOKING A CLASS WITH GLOBAL INTEGRITY!!!"))
        .then(res => loadClassbookings())
        .catch(err => console.log(err));
    }
    emailfunction();
  };
  function emailfunction() {

  var templateParams = {
      
  }
    
    emailjs.send('default_service', 'template_dhpghJPo', templateParams, "user_Z1HryPA1jzVwmj7gx0knZ")
    .then(function(response) {
       console.log('SUCCESS!', response.status, response.text);
    }, function(error) {
       console.log('FAILED...', error);
    })
  }
  return (
    <section>
   
    <div className="card"></div>
  <div className="card-image"></div>
    <figure  >
      <img className="rounded mx-auto d-block" style={{width:500}} src={bitcoinpic} alt="a bitcoin price chart"></img>
    </figure>
    
  <div className="card-content"></div>
    <div className="media">
      <div className="media-left">
        <figure className="image is-48x48">
          <img src={imanipic} alt="lovely lady"></img>
         
        </figure>
      </div>
      <div className="media-content">
        <p className="title is-4">Hosted by: <b>Imani Glasco</b></p>
        <p className="subtitle is-6">@cryptocoinmeet</p>
      </div>
    </div>
<br></br>
    <div className="content">
      Hi! I can't wait to meet you! My husband Jesse and I are a web contracting team who have been working with the organizers of <a href="https://www.instagram.com/globalintegrity/">@GlobalIntegrity</a> for years now! We specialize in Cataloging, Cryptocurrency Miners, and Blockchain literacy. 
      I hope you're ready to have your mind blown at the fascinating world of MAGIC INTERNET MONEY!!!   
       <br></br>
      <a href="https://www.instagram.com/explore/tags/globalintegrity/">#GLOBALINTEGRITY</a> <a href="https://www.instagram.com/explore/tags/bitcoin/">#BITCOIN</a>
      <br></br>
      <br></br>
      <p>Class Dates and Times: Every Wednesday in June, @ 730pm CDT</p>
     
      <p>Sign up Below!</p>

      <Row>
          <Col size="lg-12">
            <Jumbotron>
              <h3>Fill out and submit your contact information below and we will reach out to you within one business day with your CLASSROOM ACCESS KEY</h3>
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
              <br></br>
              <FormBtn
                disabled={!(formObject.name && formObject.emailaddress)}
                onClick={handleFormSubmit}
                
                
              >
                Submit Classroom Booking Request
                
              </FormBtn>
            </form>
            
            </Jumbotron>
            <br></br>
          </Col>
          
        </Row>
        

    </div>
    </section>
  );
}

export default Classcard;
